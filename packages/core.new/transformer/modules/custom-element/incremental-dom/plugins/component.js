export const component = (config) => {

    const next = async (context) => {

        if (context.skip) return;

    }

    const finish = () => { }

    return {
        next,
        finish,
    }
}