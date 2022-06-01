<script>

	import { onMount } from 'svelte';
	//import { browser } from '$app/env';


	let count = 50;
	let elem_button;

	function getElemButton2(node) {
		elem_button = node;
	}

	onMount( () => {

		//function abc(x) {
		//	return(x+2);
		//}

		function plusdix() {
			count += 10;
			//console.debug(elem_button);
		}

		elem_button.addEventListener("click", plusdix);
		//document.addEventListener("click", plusdix);

		return( () => {
			//if (!elem_button) {
				elem_button.removeEventListener("click", plusdix);
			//}
		});
	});



	function plusdeux() {
		//if (browser) {
			//count = abc(count);
			count += 2;
		//} else {
		//	console.log("Not in browser");
		//}
	}

</script>

<section>
	<h3>Le composant BrowserClick</h3>
	<button on:click={plusdeux}>Action</button>
	<button use:getElemButton2>Action2</button>
	<p>le message est {count}</p>

</section>

