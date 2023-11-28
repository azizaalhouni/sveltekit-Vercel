import { g as get } from "../../chunks/api.js";
async function load({ fetch }) {
  const [trending, now_playing, upcoming] = await Promise.all([
    get(fetch, "trending/movie/day"),
    get(fetch, "movie/now_playing"),
    get(fetch, "movie/upcoming")
  ]);
  const featured = await get(fetch, `movie/${trending.results[0].id}`, {
    append_to_response: "images,videos,recommendations"
  });
  return {
    trending: trending.results.slice(1),
    featured,
    now_playing: now_playing.results,
    upcoming: upcoming.results
  };
}
export {
  load
};
