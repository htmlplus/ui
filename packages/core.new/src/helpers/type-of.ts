export const typeOf = (input) => {
  return Object
    .prototype
    .toString
    .call(input)
    .replace(/\[|\]|object| /g, '')
    .toLowerCase();
}