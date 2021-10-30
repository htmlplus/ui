import sass from 'sass';

export const style = (context) => {

    if (context.skip) return;

    if (!context.stylePath) return;

    const options = (() => {
        try {
            return context.config.preprocess.scss || {};
        }
        catch {
            return {};
        }
    })();

    const { css, stats } = sass.renderSync({
        file: context.stylePath,
        outputStyle: 'compressed',
        ...options,
    });

    context.style = css.toString();

    context.dependencies = stats.includedFiles;
};