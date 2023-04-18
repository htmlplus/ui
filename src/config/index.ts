export { getConfig, setConfig } from '@htmlplus/element';

let basePath = '';

export const setBasePath = (path: string) => {
  basePath = path;
};

export const getBasePath = () => {
  return basePath;
};
