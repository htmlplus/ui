// TODO
export function Watch(...keys: Array<string>) {

    return function (target: any, propertyKey: string) {

        target.$watchers = target.$watchers || [];

        for (const key of keys) {

            const watcher = {
                key,
                handler: target[propertyKey],
            }

            target.$watchers.push(watcher);
        }
    }
}
