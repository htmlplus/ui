// TODO
export const getType = (node) => {
    try {
        return node.typeAnnotation.typeAnnotation.type
    }
    catch { }
}