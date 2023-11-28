import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component } from "../../chunks/index.js";
import { m as media } from "../../chunks/api.js";
import { C as Carousel } from "../../chunks/Carousel.js";
const Hero_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-1si1bdb{display:flex}.backdrop.svelte-1si1bdb{width:100%}.logo.svelte-1si1bdb{position:absolute;left:1rem;top:0;height:100%;width:30%;object-fit:contain;filter:drop-shadow(0 0 1rem black)}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let images;
  let backdrop;
  let logo;
  let { movie } = $$props;
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  $$result.css.add(css);
  images = movie.images;
  backdrop = images.backdrops.find((image) => !image.iso_639_1) || images.backdrops[0];
  logo = images.logos.find((image) => image.iso_639_1 === "en") || images.backdrops[0];
  return `<a href="${"/movies/" + escape(movie.id, true)}" class="${"column svelte-1si1bdb"}"><img class="${"backdrop svelte-1si1bdb"}"${add_attribute("alt", movie.title, 0)}${add_attribute("src", media(backdrop.file_path, 1280), 0)} style="${"aspect-ratio: " + escape(backdrop.aspect_ratio, true)}">



    <img class="${"logo svelte-1si1bdb"}"${add_attribute("alt", movie.title, 0)}${add_attribute("src", media(backdrop.file_path, 1280), 0)} style="${"aspect-ratio: " + escape(logo.aspect_ratio, true)}">
    </a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 class="${"column"}">Top trending movies</h1>

${validate_component(Hero, "Hero").$$render($$result, { movie: data.featured }, {}, {})}

${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      title: "Trending",
      movies: data.trending,
      href: "/movies/trending"
    },
    {},
    {}
  )}
${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      title: "Now_Playing",
      movies: data.now_playing,
      href: "/movies/now_playing"
    },
    {},
    {}
  )}
${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      title: "Upcoming",
      movies: data.upcoming,
      href: "/movies/upcoming"
    },
    {},
    {}
  )}

`;
});
export {
  Page as default
};
