import * as universal from '../entries/pages/watchlist/_page.ts.js';
import * as server from '../entries/pages/watchlist/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/watchlist/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/watchlist/+page.ts";
export { server };
export const server_id = "src/routes/watchlist/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.22b565e5.js","_app/immutable/chunks/index.f9f2799d.js"];
export const stylesheets = [];
export const fonts = [];
