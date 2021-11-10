export const style = (config) => {

    const next = (context) => {

        if (context.skip) return;

        if (!context.style) return;
        
    }

    const finish = () => { }

    return {
        next,
        finish,
    }
}