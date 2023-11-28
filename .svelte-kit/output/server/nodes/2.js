import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.98ebfb41.js","_app/immutable/chunks/api.24b2cd97.js","_app/immutable/chunks/index.f9f2799d.js","_app/immutable/chunks/Carousel.761bebf2.js"];
export const stylesheets = ["_app/immutable/assets/2.2afeb071.css","_app/immutable/assets/Carousel.4ee40529.css"];
export const fonts = [];
