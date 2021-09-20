export const style = (context) => {

    const { key } = context;

    const lines = [];

    lines.push('<style lang="scss">');

    // TODO
    lines.push(`@import '${key}.scss';`);

    lines.push('</style>');

    const style = lines.join('\n');

    context.style = style;
}