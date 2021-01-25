const style = () => {

    return {
        name: 'sass',
        pluginType: 'css',
        transform(content, fileName, context) {

            if (content.trim() === '') {

                return Promise.resolve({
                    id: fileName,
                    code: ''
                });
            }

            const code = content.replace(/\[\w+\]/g, (match) => `${match}:not(${match.replace(']', '=false]')})`);

            return Promise.resolve({
                id: fileName,
                code
            });
        }
    }
}

module.exports.style = style;