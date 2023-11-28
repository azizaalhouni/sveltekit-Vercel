import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../../chunks/index.js";
import { R as ResultsPage } from "../../../chunks/ResultsPage.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "input.svelte-96d4ab{font-family:inherit;font-size:2em;padding:0.5em;width:100%;background:rgba(255,255,255,0.1);border:none;border-radius:0.2em;color:white}input.svelte-96d4ab:focus-visible{outline:2px solid var(--accent)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"column"}"><h1>Search</h1>
    <form><input name="${"query"}"${add_attribute("value", data.query, 0)} autocomplete="${"off"}" spellcheck="${"false"}" class="${"svelte-96d4ab"}"></form>

    ${data.query ? `${validate_component(ResultsPage, "ResultsPage").$$render($$result, { movies: data.movies, next: null }, {}, {})}` : ``}
</div>`;
});
export {
  Page as default
};
