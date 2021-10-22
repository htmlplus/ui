import esbuild from 'esbuild';

export const script = (context) => {

    if (context.skip) return;

    const { code, map, warnings } = esbuild.transformSync(
        context.script,
        {
            loader: 'ts'
        }
    );

    context.script = code;
}