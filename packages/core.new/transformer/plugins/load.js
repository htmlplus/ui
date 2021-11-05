import fs from 'fs';

export const load = (config) => {

    const next = (context) => {

        if (context.skip) return;

        context.content = fs.readFileSync(context.filename, 'utf8');
    }

    const finish = () => { }

    return {
        next,
        finish,
    }
}