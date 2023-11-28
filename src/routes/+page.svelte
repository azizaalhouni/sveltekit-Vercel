<script>
	import Hero from './Hero.svelte';

	import Carousel from '../lib/components/Carousel.svelte';
	import { views } from '$lib/views';
	export let data;
</script>

<h1 class="column">Top trending movies</h1>

<Hero movie={data.featured} />

<Carousel title='Trending' movies={data.trending}  href="/movies/trending"/>
<Carousel title='Now_Playing' movies={data.now_playing} href="/movies/now_playing"/>
<Carousel title='Upcoming' movies={data.upcoming}  href="/movies/upcoming"/>

<!-- <Carousel movies={data.trending} view={views.trending} href="/movies/trending"/>
<Carousel movies={data.now_playing} view={views.now_playing} href="/movies/now_playing"/>
<Carousel movies={data.upcoming} view={views.upcoming} href="/movies/upcoming"/> -->