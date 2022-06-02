<script>
	const myHash = {
		abc: {value: 5},
		ggg: {value: 9},
		houp: {value: 15}
	};
	const myHashIterable = Object.entries(myHash);

	const flala = () => {
		for ( const [key, val] of Object.entries(myHash) ) {
			console.log("key: " + key + ", val: " + val.value);
		} 
	};

	console.log(myHash['abc']);

</script>

<section>
	<h3>Named key component</h3>
	{#each Object.entries(myHash) as cat, i}
		<p>{i+1} : {cat[0]} : {cat[1].value}</p>
	{/each}
	<h4>Other implementation</h4>
	{#each Object.keys(myHash) as cat, i}
		<p>{i+1} : {cat} : {myHash[cat].value}</p>
	{/each}
	<button on:click={flala}>Click</button>
</section>

