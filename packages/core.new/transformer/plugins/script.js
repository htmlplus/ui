import esbuild from 'esbuild';

export const script = (config) => {

    const next = (context) => {

        if (context.skip) return;

        const { code, map, warnings } = esbuild.transformSync(
            context.script,
            {
                loader: 'ts'
            }
        );

        context.script = code;
    }

    const finish = () => { }

    return {
        next,
        finish,
    }
}