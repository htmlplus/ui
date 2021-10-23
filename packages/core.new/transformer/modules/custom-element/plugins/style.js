export const style = (context) => {

    if (context.skip) return;

    if (!context.style) return;

    context.style = `<style>${context.style}</style>`;
};