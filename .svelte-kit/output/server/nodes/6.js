import * as universal from '../entries/pages/movies/_view_list_/_page.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/movies/_view_list_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/movies/[view=list]/+page.ts";
export const imports = ["_app/immutable/nodes/6.197a4508.js","_app/immutable/chunks/api.24b2cd97.js","_app/immutable/chunks/views.2b268a34.js","_app/immutable/chunks/index.f9f2799d.js","_app/immutable/chunks/ResultsPage.7cf08947.js"];
export const stylesheets = ["_app/immutable/assets/6.1243af35.css","_app/immutable/assets/ResultsPage.a219a7ec.css"];
export const fonts = [];
