import fs from 'fs';

export const load = (context) => {

    const { filename } = context;

    context.content = fs.readFileSync(filename, 'utf8');
}