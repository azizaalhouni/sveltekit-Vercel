

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4e5fcc79.js","_app/immutable/chunks/index.f9f2799d.js","_app/immutable/chunks/stores.96f15517.js","_app/immutable/chunks/singletons.c369181a.js"];
export const stylesheets = [];
export const fonts = [];
