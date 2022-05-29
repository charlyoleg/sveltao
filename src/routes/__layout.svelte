<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Ma SPA</title>
</svelte:head>


<nav>
	<a class:active={$page.url.pathname === '/'} sveltekit:prefetch href="/">Home</a>
	<a class:active={$page.url.pathname === '/page2'} sveltekit:prefetch href="/page2">Page2</a>
	<a class:active={$page.url.pathname === '/page3'} sveltekit:prefetch href="/page3">Page3</a>
</nav>
<slot></slot>

<style>
	a {
		color: blue;
	}

	a.active {
		color: orange;
	}
</style>
