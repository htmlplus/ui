import esbuild from 'esbuild';
import { htmlplus } from '../transformer/esbuild.plugin.js';

esbuild
    .serve(
        {
            servedir: 'public',
            port: 8000,
        },
        {
            bundle: true,format:'esm',
            entryPoints: [
                './src/components/index.ts'
            ],
            outfile: 'public/build/bundle.js',
            plugins: [
                htmlplus
            ]
        }
    )
    .then((server) => {
        console.log(`Start on http://localhost:8000`);
    });