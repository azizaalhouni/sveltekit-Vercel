<script lang="ts">
  import { media } from '$lib/api';
import type {MovieListResult} from '$lib/types';
  import { createEventDispatcher, onMount } from 'svelte';

    export let movies: MovieListResult[];
    export let next: string | null;

    const dispatch = createEventDispatcher();


    let viewport: HTMLDivElement;
    let results: HTMLDivElement;
    let item_width: number;
    let item_height: number;
    let num_columns = 4;

    function handle_resize(){
        const first = results.firstChild as HTMLAnchorElement;
        item_width = first.offsetWidth;
        item_height = first.offsetHeight;
        num_columns = 4;
        handle_scroll();
    }

    let a= 0;
    let b = movies.length;
    let padding_top = 0;
    let padding_bottom = 0;

    function handle_scroll(){
        const remining = viewport.scrollHeight - (viewport.scrollTop * viewport.clientHeight);
        console.log(remining);
if(remining < 400){
    dispatch('end');
}

a = Math.floor(viewport.scrollTop / item_height) * num_columns;
b = Math.ceil((viewport.scrollTop + viewport.clientHeight) / item_height) * num_columns;

padding_top = Math.floor(a/num_columns) * item_height;
padding_bottom = Math.floor((movies.length -b ) / num_columns)* item_height;
    }

onMount(handle_resize);
</script>

<svelte:window on:resize={handle_resize}/>

<p>showing item {a} - {b} </p>

<div bind:this={viewport} class="viewport" on:scroll={handle_scroll} style="height: 500px">
<div bind:this={results} 
class="results"
style:padding-top="{padding_top}px"
style:padding-bottom="{padding_bottom}px">
    {#each movies as movie}
        <a href="/movies/{movie.id}">
        <img alt={movie.title} src={media(movie.poster_path, 500)}/>
    
    </a>
    {/each}
</div>
{#if next}
<a href={next}>next page</a>

{/if}
</div>

<style>
    .viewport {
        overflow-y: auto;
    }
    .results{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        width: 100%;
    }
    a{
        width: 100%;
        aspect-ratio:2/3;
        padding: 0.5rem;
    }
    img{
        width: 100%;
    }
</style>