import babelGenerator from '@babel/generator';
import babelTraverse from '@babel/traverse';
import t from '@babel/types';
import Case from 'case';
import * as CONSTANTS from '../../../../configs/constants.js';

// TODO
const generator = babelGenerator.default || babelGenerator;
const traverse = babelTraverse.default || babelTraverse;

export const markup = (config) => {

    const next = (context) => {
        
        if (context.skip) return;
        
    }

    const finish = () => { }

    return {
        next,
        finish,
    }
}