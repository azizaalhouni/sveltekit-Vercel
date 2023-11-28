import { c as create_ssr_component, d as createEventDispatcher, e as escape, a as add_attribute, f as add_styles, b as each } from "./index.js";
import { m as media } from "./api.js";
const ResultsPage_svelte_svelte_type_style_lang = "";
const css = {
  code: ".viewport.svelte-hjd0hs{overflow-y:auto}.results.svelte-hjd0hs{display:grid;grid-template-columns:repeat(4,1fr);width:100%}a.svelte-hjd0hs{width:100%;aspect-ratio:2/3;padding:0.5rem}img.svelte-hjd0hs{width:100%}",
  map: null
};
const ResultsPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movies } = $$props;
  let { next } = $$props;
  createEventDispatcher();
  let viewport;
  let results;
  let a = 0;
  let b = movies.length;
  let padding_top = 0;
  let padding_bottom = 0;
  if ($$props.movies === void 0 && $$bindings.movies && movies !== void 0)
    $$bindings.movies(movies);
  if ($$props.next === void 0 && $$bindings.next && next !== void 0)
    $$bindings.next(next);
  $$result.css.add(css);
  return `

<p>showing item ${escape(a)} - ${escape(b)}</p>

<div class="${"viewport svelte-hjd0hs"}" style="${"height: 500px"}"${add_attribute("this", viewport, 0)}><div class="${"results svelte-hjd0hs"}"${add_styles({
    "padding-top": `${padding_top}px`,
    "padding-bottom": `${padding_bottom}px`
  })}${add_attribute("this", results, 0)}>${each(movies, (movie) => {
    return `<a href="${"/movies/" + escape(movie.id, true)}" class="${"svelte-hjd0hs"}"><img${add_attribute("alt", movie.title, 0)}${add_attribute("src", media(movie.poster_path, 500), 0)} class="${"svelte-hjd0hs"}">
    
    </a>`;
  })}</div>
${next ? `<a${add_attribute("href", next, 0)} class="${"svelte-hjd0hs"}">next page</a>` : ``}
</div>`;
});
export {
  ResultsPage as R
};
