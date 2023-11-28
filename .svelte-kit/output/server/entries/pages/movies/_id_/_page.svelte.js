import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../../../chunks/index.js";
import { C as Carousel } from "../../../../chunks/Carousel.js";
import { m as media } from "../../../../chunks/api.js";
const Hero_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".hero.svelte-12nbeq8.svelte-12nbeq8{display:grid;background:black}.backdrop.svelte-12nbeq8 img.svelte-12nbeq8{width:100%}.backdrop.svelte-12nbeq8.svelte-12nbeq8::after{content:'';position:absolute;width:100%;height:8rem;background:linear-gradient(to top,black,transparent);left:0;bottom:0}.info.svelte-12nbeq8.svelte-12nbeq8{display:flex;flex-direction:column;padding:0 var(--side);margin-top:-4rem;gap:1rem}.info.svelte-12nbeq8 h1.svelte-12nbeq8,.info.svelte-12nbeq8 p.svelte-12nbeq8{margin:0}@media(min-width: 40rem){.hero.svelte-12nbeq8.svelte-12nbeq8{grid-template-columns:1fr 60rem;grid-template-rows:auto}.backdrop.svelte-12nbeq8.svelte-12nbeq8{grid-column:2/3}.backdrop.svelte-12nbeq8.svelte-12nbeq8::after{width:15rem;height:100%;left:0;bottom:0;background:linear-gradient(to right,black, transparent)}.info.svelte-12nbeq8.svelte-12nbeq8{position:absolute;justify-content:center;top:0;left:0;width:40rem;height:100%;grid-column:1/2;margin-top:0;filter:drop-shadow(0 0 0.5rem black)}}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let backdrop;
  let { movie } = $$props;
  console.log(movie.images.backdrops[0].file_path);
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  $$result.css.add(css$1);
  backdrop = // movie.images.backdrops.find((image) => !image.iso_639_1) ||
  movie.images.backdrops[0];
  return `<div class="${"hero svelte-12nbeq8"}"><div class="${"backdrop svelte-12nbeq8"}"><img${add_attribute("alt", movie.title, 0)}${add_attribute("src", media(backdrop.file_path, 1280), 0)} class="${"svelte-12nbeq8"}"></div>


    <div class="${"info svelte-12nbeq8"}"><h1 class="${"svelte-12nbeq8"}">${escape(movie.title)}</h1>
        <p class="${"svelte-12nbeq8"}">${escape(movie.overview)}</p></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid.svelte-1xr4qkn{display:grid;margin:2em 0;gap:2em}iframe.svelte-1xr4qkn{aspect-ratio:16/9;width:100%}dl.svelte-1xr4qkn{display:grid;;;grid-template-columns:max-content 1fr;gap:1em}dt.svelte-1xr4qkn{text-transform:uppercase;font-size:0.8rem;opacity:0.8rem}@media(min-width: 40em){.grid.svelte-1xr4qkn{grid-template-columns:1fr 1fr}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Hero, "Hero").$$render($$result, { movie: data.movie }, {}, {})}
<div class="${"column grid svelte-1xr4qkn"}">${data.trailer ? `<iframe src="${"https://www.youtube.com/embed/" + escape(data.trailer.key, true)}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}" allowfullscreen class="${"svelte-1xr4qkn"}"></iframe>` : ``}

    <dl class="${"data svelte-1xr4qkn"}"><dt class="${"svelte-1xr4qkn"}">Released</dt><dd>${escape(data.movie.release_date)}</dd><dt class="${"svelte-1xr4qkn"}">Runtime</dt><dd>${escape(data.movie.runtime)} minutes</dd><dt class="${"svelte-1xr4qkn"}">Budget</dt><dd>$${escape(Math.round(data.movie.budget / 1e6))}M</dd><dt class="${"svelte-1xr4qkn"}">Revenue</dt><dd>$${escape(Math.round(data.movie.revenue / 1e6))}M</dd><dt class="${"svelte-1xr4qkn"}">Genre</dt><dd class="${"genres"}">${escape(data.movie.genres?.map((g) => g.name).join(", "))}</dd></dl></div>
${data.movie.recommendations.results.length > 0 ? `${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      title: "You might also like...",
      movies: data.movie.recommendations.results,
      href: "null"
    },
    {},
    {}
  )}` : ``}`;
});
export {
  Page as default
};
