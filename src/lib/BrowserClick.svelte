<script>

	import { onMount } from 'svelte';


	let count = 50;
	let elem_button;

	function getElemButton2(node) {
		elem_button = node;
	}

	onMount( () => {

		function plusdix() {
			count += 10;
		}

		elem_button.addEventListener("click", plusdix);

		return( () => {
			elem_button.removeEventListener("click", plusdix);
		});
	});



	function plusdeux() {
		count += 2;
	}

</script>

<section>
	<h3>Le composant BrowserClick</h3>
	<button on:click={plusdeux}>Action</button>
	<button use:getElemButton2>Action2</button>
	<p>le message est {count}</p>
</section>

