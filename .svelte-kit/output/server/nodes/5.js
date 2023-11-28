import * as universal from '../entries/pages/movies/_id_/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/movies/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/movies/[id]/+page.ts";
export const imports = ["_app/immutable/nodes/5.76f835c5.js","_app/immutable/chunks/api.24b2cd97.js","_app/immutable/chunks/index.f9f2799d.js","_app/immutable/chunks/Carousel.761bebf2.js"];
export const stylesheets = ["_app/immutable/assets/5.0c77af93.css","_app/immutable/assets/Carousel.4ee40529.css"];
export const fonts = [];
