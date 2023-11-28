

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.37204bc4.js","_app/immutable/chunks/index.f9f2799d.js","_app/immutable/chunks/stores.96f15517.js","_app/immutable/chunks/singletons.c369181a.js"];
export const stylesheets = ["_app/immutable/assets/0.6ff8b6f2.css"];
export const fonts = [];
