export const getTags = (node) => {

    const tags = [];

    const lines = [];

    const comments = node
        .leadingComments
        .map((comment) => comment.value)
        .join('\r\n')
        .split('\r\n');

    for (const comment of comments) {

        let line = comment.trimLeft();

        if (line.startsWith('*'))
            line = line.slice(1);

        if (!line) continue;

        const isTag = line.trim().startsWith('@');

        if (isTag || !lines.length)
            lines.push(line);
        else
            lines[lines.length - 1] += line;
    }

    for (const line of lines) {

        let value = line.trim();

        if (!value.startsWith('@')) {

            tags.push({ value });

            continue;
        }

        const sections = value.split(' ');

        const key = sections[0].slice(1);

        value = sections.slice(1).join(' ').trim();

        tags.push({ key, value });
    }

    return tags;
}