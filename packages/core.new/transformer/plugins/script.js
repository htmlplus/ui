import esbuild from 'esbuild';

export const script = (context) => {

    const { script } = context;

    const { code, map, warnings } = esbuild.transformSync(script, { loader: 'ts' });

    context.script = code;
}