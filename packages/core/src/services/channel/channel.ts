export type ChannelCallback<T> = (data: T) => void;
export class Channel<T = {}> {

  callbacks = {};

  send(name: string, data?: T, reverse?: boolean): void {

    name = reverse ? `${name}:reverse` : name;

    if (!Array.isArray(this.callbacks[name])) return;

    this.callbacks[name].forEach((callback) => callback(data));
  }

  on(name: string, callback: ChannelCallback<T>, reverse?: boolean): void {

    if (!name) return;

    name = reverse ? `${name}:reverse` : name;

    if (!Array.isArray(this.callbacks[name])) {

      this.callbacks[name] = [];
    }

    this.callbacks[name].push(callback);
  }

  off(name: string, callback: ChannelCallback<T>, reverse?: boolean): void {

    name = reverse ? `${name}:reverse` : name;

    const callbacks = this.callbacks[name] || [];

    const index = callbacks.findIndex((item) => item === callback);

    if (index < 0) return;

    this.callbacks[name].splice(index, 1);

    if (!this.callbacks[name].length) delete this.callbacks[name];
  }

  replace(current: string, next: string, callback: ChannelCallback<T>, reverse?: boolean): void {

    this.off(current, callback, reverse);

    this.on(next, callback, reverse);
  }
}