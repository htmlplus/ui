# Prism

Syntax highlighting for code snippets, supporting multiple programming languages and offering customizable themes. Powered by [PrismJS](https://prismjs.com/).

<Playground />

<Usage />

<Api />

<GlobalConfig />

<Examples />

### Default

<Example src="examples/default" />

### Multiline

<Example src="examples/multiline" />

### Language

Many languages are supported by `PrismJS`, though only a few are loaded by default. These can be checked in `window.Prism.languages`. To use other languages, the `resolver` property should be configured.

<Example src="examples/language" />

### Theme

The default theme is supported by default. If other themes are required, the `resolver` property should be configured to return a raw CSS style.

<Example src="examples/theme" />

### Plugins

To use `PrismJS` plugins, the `plugins` property should be configured. All parameters required for plugin configuration are derived from `data-*` attributes. For instance, the `line-numbers` plugin has a configuration parameter named `data-start`, which is mapped to `start` with a valid value specified in the official `PrismJS` documentation.

<Example src="examples/plugins" />

### Resolver

The basic configuration for the `resolver` property are shown here, this configuration support all `themes`, `plugins`, and `languages` of the `PrismJS`.

<Example src="examples/resolver" />

### Sync

<Example src="examples/sync" />

### Copy Slot

<Example src="examples/copy-slot" />

<LastModified />
