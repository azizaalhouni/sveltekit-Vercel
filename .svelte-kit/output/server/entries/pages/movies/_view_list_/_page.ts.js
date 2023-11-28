import { g as get } from "../../../../chunks/api.js";
import { v as views } from "../../../../chunks/views.js";
async function load({ params, url, fetch }) {
  const view = views[params.view];
  const page = url.searchParams.get("page") ?? "1";
  const data = await get(fetch, view.endpoint, {
    page
  });
  return {
    view: params.view,
    title: view.title,
    endpoint: view.endpoint,
    movies: data.results,
    next_page: data.page < data.total_pages ? data.page + 1 : null
  };
}
export {
  load
};
