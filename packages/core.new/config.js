export const config = {
    prefix: 'plus',
    docs: {
        docs: 'json/docs.json',
        vscode: 'json/html.html-data.json',
    },
    scss: {
        includePaths: [
            'src/styles'
        ],
        injectGlobalPaths: [
            'src/styles/mixins/index.scss',
            'src/styles/variables/index.scss'
        ]
    },
    outputs: [
        {
            type: 'www',
            dist: 'www',
        },
        {
            type: 'cdn',
            dist: 'htmlplus',
        },
        {
            type: 'type',
            dist: 'types',
        },
        {
            type: 'docs',
            dist: 'json/docs.json',
        },
        {
            type: 'vscode',
            dist: 'json/html.html-data.json',
        },
    ]
}