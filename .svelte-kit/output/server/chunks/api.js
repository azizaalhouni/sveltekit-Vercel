const base = "https://api.movies.tastejs.com";
const media_base = "https://image.tmdb.org/t/p";
async function get(fetch, endpoint, params) {
  const q = new URLSearchParams(params);
  const response = await fetch(`${base}/${endpoint}?${q}`);
  return await response.json();
}
function media(file_path, width) {
  return `${media_base}/w${width}${file_path}`;
}
export {
  get as g,
  media as m
};
