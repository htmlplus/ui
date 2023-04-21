import { setConfig } from './config.js';
import './core/index.js';

const reload = `
    <svg viewBox="0 0 24 24">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747"></path>
        <path d="M20 4v5h-5"></path>
    </svg>
`;

setConfig({
    asset: {
        symbol: {
            reload
        }
    }
});
