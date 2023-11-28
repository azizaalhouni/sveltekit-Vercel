import * as universal from '../entries/pages/search/_page.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/search/+page.ts";
export const imports = ["_app/immutable/nodes/7.037bfe19.js","_app/immutable/chunks/api.24b2cd97.js","_app/immutable/chunks/index.f9f2799d.js","_app/immutable/chunks/ResultsPage.7cf08947.js"];
export const stylesheets = ["_app/immutable/assets/7.1197470d.css","_app/immutable/assets/ResultsPage.a219a7ec.css"];
export const fonts = [];
