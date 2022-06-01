<script>
	let dada = "rien du tout";

	async function vachercher() {
		const resp = await fetch("/api");
		const rjson = await resp.json();
		dada = rjson.date_time;
		console.log("dada = " + dada);
	}
</script>

<section>
	<h3>Click mon api</h3>
	<button on:click={vachercher}>Bouton</button>
	<p>Le resultat est {dada}</p>
</section>

<style>
	section h3 {
		color: LightBlue;
	}
</style>
