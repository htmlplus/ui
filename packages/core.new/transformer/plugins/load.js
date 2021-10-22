import fs from 'fs';

export const load = (context) => {

    if (context.skip) return;

    context.content = fs.readFileSync(context.filename, 'utf8');
}