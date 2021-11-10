import Case from 'case';
import * as CONSTANTS from '../../../../configs/constants.js';

export const script = (config) => {

    const next = (context) => {

        if (context.skip) return;

    }

    const finish = () => { }

    return {
        next,
        finish,
    }
}