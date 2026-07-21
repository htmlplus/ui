// TODO
export const register = (name, keyframe) => {
	globalThis[`$htmlplus:plus$`] ||= {};
	globalThis[`$htmlplus:plus$`]['assets'] ||= {};
	globalThis[`$htmlplus:plus$`]['assets']['animations'] ||= {};
	globalThis[`$htmlplus:plus$`]['assets']['animations'][name] = keyframe;
};
