export const style = (context) => {

    const { style } = context;

    if (!style) return;

    context.style = `<style>${style}</style>`;
};