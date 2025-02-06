import { Bind, Element, Property, Query, State } from '@htmlplus/element';

import type PrismType from 'prismjs';

import { PlusCore } from '@/core';
import { ExternalDependencyError, NotEmptyPropertyError } from '@/errors';
import { AsyncCache } from '@/services';

import { PrismPlugins, PrismResolver } from './prism.types';

let PrismCore: typeof PrismType;

/**
 * @thirdParty
 * @dependencies prismjs
 *
 * @part code    - The code element.
 * @part pre     - The pre element.
 *
 * @slot default - The default slot.
 */
@Element()
export class Prism extends PlusCore {
  /**
   * The programming language to highlight.
   */
  @Property({ reflect: true })
  language?: string = 'javascript';

  /**
   * The theme to apply for syntax highlighting.
   */
  @Property({ reflect: true })
  theme?: string = 'default';

  /**
   * Plugins to enhance Prism's functionality.
   */
  @Property()
  plugins?: PrismPlugins;

  /**
   * Whether to synchronize updates with DOM changes.
   */
  @Property()
  sync?: boolean;

  /**
   * A custom resolver function to load Prism assets (e.g., languages, themes, plugins).
   */
  @Property()
  resolver?: PrismResolver;

  @Query('style')
  $style!: HTMLElement;

  @State()
  tick: number;

  observer: MutationObserver = new MutationObserver(this.onChange);

  cache = new AsyncCache<PrismResolver>({
    type: 'global',
    namespace: 'prism',
    resolver: async (params) => {
      if (typeof this.resolver !== 'function') {
        console.warn(
          [
            `The 'prism' element can't find the '${params.key}' file for '${params.value}'. `,
            `It uses an async 'resolver' function to load files, which isn't set up by default. `,
            `You may need to configure it properly. `,
            `Check the documentation for the correct resolver setup to fix the issue.`
          ].join(''),
          this.$host
        );
        return;
      }

      try {
        return await this.resolver(params);
      } catch (error) {
        console.warn(
          [
            `The 'prism' element is not able to resolve the '${params.key}' file for '${params.value}'. `,
            `There is a problem with the 'resolver' property, and its output cannot be used. `,
            'Make sure that the output of the property is correct.'
          ].join(''),
          this.$host
        );
        throw error;
      }
    }
  });

  get attributes() {
    const attributes = {};

    for (const pluginKey of this.pluginKeys) {
      const plugin = this.plugins[pluginKey];

      if (typeof plugin !== 'object') continue;

      for (const key in plugin) {
        if (Object.hasOwn(plugin, key)) {
          attributes[`data-${key}`] = `${plugin[key]}`;
        }
      }
    }

    return attributes;
  }

  get assets() {
    const assets: Parameters<PrismResolver>[0][] = [];

    if (!PrismCore.languages[this.language]) {
      assets.push({
        key: 'language',
        value: this.language
      });
    }

    if (this.theme && this.theme != 'default') {
      assets.push({
        key: 'theme',
        value: this.theme
      });
    }

    for (const pluginKey of this.pluginKeys) {
      assets.push({
        key: 'plugin',
        value: pluginKey
      });
    }

    return assets;
  }

  get codeClass() {
    return [`language-${this.language}`].join(' ');
  }

  get preClass() {
    return [`language-${this.language}`, ...this.pluginKeys].join(' ');
  }

  get pluginKeys() {
    return Object.keys(this.plugins || {}).filter((key) => !!this.plugins[key]);
  }

  async update() {
    if (!PrismCore) return;

    if (!this.language) {
      throw new NotEmptyPropertyError(this.$host, 'language');
    }

    this.$style.innerHTML = '';

    for (const asset of this.assets) {
      if (!asset.value) continue;

      const result = await this.cache.resolve(asset);

      const style = result?.default || result || '';

      if (typeof style != 'string') continue;

      this.$style.innerHTML += style;
    }

    // TODO
    if (this.$style.innerHTML) {
      this.$style.innerHTML = `:host([theme="${this.theme}"]){${this.$style.innerHTML}}`;
    }

    PrismCore.highlightAllUnder(this.$host.shadowRoot, false);
  }

  @Bind()
  onChange() {
    this.tick++;
  }

  connectedCallback() {
    return import('prismjs')
      .then((module) => {
        PrismCore = module;
      })
      .catch((error) => {
        throw new ExternalDependencyError(this.$host, 'prismjs', { cause: error });
      });
  }

  disconnectedCallback() {
    this.observer.disconnect();
  }

  updatedCallback() {
    this.observer.disconnect();

    if (this.sync) {
      this.observer.observe(this.$host, { childList: true });
    }

    this.update();
  }

  render() {
    return (
      <div>
        <style />
        {/* prettier-ignore */}
        <pre className={this.preClass} {...this.attributes}><code className={this.codeClass} part="code" dangerouslySetInnerHTML={{ __html: this.$host.innerHTML }}></code></pre>
      </div>
    );
  }
}
