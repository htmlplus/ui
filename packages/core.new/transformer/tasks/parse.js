import { Project } from 'ts-morph';

export const parse = (context) => {

    const { id } = context;

    const project = new Project();

    const ast = project.addSourceFileAtPath(id);
    
    context.ast = ast;
}