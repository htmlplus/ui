export const eventPath = (event) => {
  return event.path || (event.composedPath && event.composedPath());
}