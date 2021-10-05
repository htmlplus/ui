import esbuild from 'esbuild';
import { htmlplus } from '../transformer/plugins/esbuild.js';

const time = Date.now();

esbuild
    .serve(
        {
            servedir: 'public',
            port: 8000,
        },
        {
            bundle: true,
            format: 'esm',
            entryPoints: ['./src/components/index.ts'],
            outfile: 'public/build/bundle.js',
            plugins: [
                htmlplus({
                    prefix: 'plus',
                    preprocess: {
                        scss: {
                            includePaths: ['./src/styles'],
                        }
                    }
                })
            ]
        }
    )
    .then((server) => {

        const duration = Date.now() - time;
        
        console.log(`Start on http://localhost:${server.port} in ${duration}ms`);
    });
