import sass from 'sass';

export const style = (context) => {

    const { config, stylePath } = context;

    if (!stylePath) return;

    const options = (() => {
        try {
            return config.preprocess.scss || {};
        }
        catch {
            return {};
        }
    })();

    const { css, stats } = sass.renderSync({
        file: stylePath,
        ...options,
    });

    context.style = css.toString();

    context.dependencies = stats.includedFiles;
};