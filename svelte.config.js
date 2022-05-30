//import adapter from '@sveltejs/adapter-auto';
//import adapter from '@sveltejs/adapter-static';
//import adapter from '@sveltejs/adapter-node';
import staticAdapter from '@sveltejs/adapter-static';
import nodeAdapter from '@sveltejs/adapter-node';
import multiAdapter from '@macfja/svelte-multi-adapter';


/** @type {import('@sveltejs/kit').Config} */
const config = {

	kit: {
		//adapter: nodeAdapter({out: 'output_node'}),
		//adapter: staticAdapter({
		//	pages: 'output_static',
		//	assets: 'output_static',
		//	fallback: 'index.html',
		//	precompress: false
		//}),
		adapter: multiAdapter([
			staticAdapter({
				pages: 'output_static',
				assets: 'output_static',
				fallback: 'index.html',
				precompress: false
			}),
			nodeAdapter({
				out: 'output_node'
			})
		]),
		trailingSlash: 'always'
	},
};

export default config;
