<script>

	let count = 50;

	function plusdeux() {
		count += 2;
	}

</script>

<section>
	<h3>Le composant BrowserClick</h3>
	<button on:click={plusdeux}>Action</button>
	<p>le message est {count}</p>

</section>

