import { c as create_ssr_component, s as subscribe, a as add_attribute } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const styles = "";
const logo = "/_app/immutable/assets/svelte-logo.87df40b8.svg";
const tmdb = "/_app/immutable/assets/tmbd.8e7b30f7.svg";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-19iy7mq{display:flex;width:100%;height:3rem;align-items:center;justify-content:space-between;max-width:var(--column);padding:0 var(--side);color:var(--accent)}a.svelte-19iy7mq{color:inherit;text-decoration:none}img.svelte-19iy7mq{height:1rem}.links.svelte-19iy7mq{display:flex;gap:1rem}main.infinite.svelte-19iy7mq{height:0;flex:1;overflow:hidden}footer.svelte-19iy7mq{display:flex;justify-content:center;height:5rem}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<nav class="${"svelte-19iy7mq"}"><a href="${"/"}" class="${"svelte-19iy7mq"}"><img alt="${"SvelteFlix"}"${add_attribute("src", logo, 0)} class="${"svelte-19iy7mq"}"></a>

	<div class="${"links svelte-19iy7mq"}"><a href="${"/search"}" class="${"svelte-19iy7mq"}">Search</a>
		<a href="${"/watchlist"}" class="${"svelte-19iy7mq"}">WatchList</a>
		<a href="${"/login"}" class="${"svelte-19iy7mq"}">Log in</a></div></nav>
<main class="${["svelte-19iy7mq", $page.data.infinite ? "infinite" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</main>
<footer class="${"svelte-19iy7mq"}"><p>Data provided by
		<a href="${"https://www.themoviedb.org"}" class="${"svelte-19iy7mq"}"><img alt="${"The Movie DB"}"${add_attribute("src", tmdb, 0)} class="${"svelte-19iy7mq"}"></a></p>
</footer>`;
});
export {
  Layout as default
};
