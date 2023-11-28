import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../chunks/index.js";
import { R as ResultsPage } from "../../../../chunks/ResultsPage.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".column.svelte-910d5d{display:flex;flex-direction:column;height:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"column svelte-910d5d"}"><h1>${escape(data.title)}</h1>

    ${validate_component(ResultsPage, "ResultsPage").$$render(
    $$result,
    {
      movies: data.movies,
      next: data.next_page ? `/movies/${data.view}?page=${data.next_page}` : null
    },
    {},
    {}
  )}
</div>`;
});
export {
  Page as default
};
