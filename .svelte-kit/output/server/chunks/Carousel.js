import { c as create_ssr_component, e as escape, a as add_attribute, b as each } from "./index.js";
import { m as media } from "./api.js";
const Carousel_svelte_svelte_type_style_lang = "";
const css = {
  code: ".carousel.svelte-1qihwod{--padding:max(var(--side), calc(var(--side)+ 100vw - var(--column))/2);display:flex;height:10rem;gap:1rem;overflow-x:scroll;scroll-snap-type:mandatory;scroll-padding-left:var(--padding);padding:- var(--padding)}.carousel.svelte-1qihwod:--webkit-scrollbar{display:none}a.svelte-1qihwod{height:100%}img.svelte-1qihwod{height:100%}",
  map: null
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { movies } = $$props;
  let { href } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.movies === void 0 && $$bindings.movies && movies !== void 0)
    $$bindings.movies(movies);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css);
  return `<h2 class="${"column"}">${escape(title)}
    ${href ? `<a${add_attribute("href", href, 0)} class="${"svelte-1qihwod"}">see all</a>` : ``}</h2>

<div class="${"carousel svelte-1qihwod"}">${each(movies, (movie) => {
    return `<a href="${"/movies/" + escape(movie.id, true)}" class="${"svelte-1qihwod"}"><img${add_attribute("alt", movie.title, 0)}${add_attribute("src", media(movie.poster_path, 500), 0)} class="${"svelte-1qihwod"}"></a>`;
  })}
</div>`;
});
export {
  Carousel as C
};
