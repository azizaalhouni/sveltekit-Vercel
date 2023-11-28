import { g as get } from "../../../chunks/api.js";
async function load({ url, fetch }) {
  const query = url.searchParams.get("query");
  if (!query) {
    return {
      query,
      movies: []
    };
  }
  const data = await get(fetch, "search/movie", { query });
  return {
    query,
    movies: data.results
  };
}
export {
  load
};
