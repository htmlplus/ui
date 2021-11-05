export const style = (config) => {

    const next = (context) => {

        if (context.skip) return;

        if (!context.style) return;

        context.style = `<style>${context.style}</style>`;
    }

    const finish = () => { }

    return {
        next,
        finish,
    }
}