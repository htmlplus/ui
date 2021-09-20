export const component = (context) => {

    const { script, markup, style } = context;

    const lines = [
        script,
        markup,
        style,
    ];

    const source = lines.join('\n');

    context.source = source;
}