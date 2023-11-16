<script>
	import './styles.css';
	import logo from '$lib/images/svelte-logo.svg';
	import tmdb from '$lib/images/tmbd.svg'
</script>



<nav>

	<a href="/"> 
		<img alt="svelteFlix" src={logo}/>

	</a>

	<div class="links">
		<a href="/search">Search</a>
		<a href="/watchlist">WatchList</a>
		<a href="/login">Login</a>
	</div>
</nav>
<div>
	<slot/>
</div>
<footer>
	<p>Data provided by
		<a href="https://www.themoviedb.org">
			<img alt="The Movie DB" src={tmdb}/>
		</a>

	</p>
</footer>
<style>
	nav{
		display:flex;
		width:100%;
		height: 3rem;
		align-items:center;
		justify-content: space-between;
		max-width: var(--column);
		padding: 0 var(--side);
		color: var(--accent);
	}

	a{
		color:inherit;
	}
	img{
		height: 1rem;
	}
	.links{
		display: flex;

	}
	footer{
		display:flex;
		justify-content: center;
		height: 5rem;
	}
</style>

