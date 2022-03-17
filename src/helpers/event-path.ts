export const eventPath = (event: Event): Array<Element> => {
    return event['path'] || (event.composedPath && event.composedPath());
}