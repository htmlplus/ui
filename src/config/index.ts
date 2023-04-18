export { getConfig, setConfig } from '@htmlplus/element';

let p = '';

export const setPath = (path: string) => {
  p = path;
};

export const getPath = () => {
  return p;
};
