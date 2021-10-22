import fs from 'fs-extra';
import path from 'path';

const snapshot = (id) => {

    const stats = fs.statSync(id);

    return `${stats.ctime}/${stats.mtime}`;
}

export const cache = (context) => {

    if (!context.config.cache) return;

}