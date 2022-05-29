//import adapter from '@sveltejs/adapter-auto';
//import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {

	kit: {
		adapter: adapter({out: 'build'}),
		//adapter: adapter({
		//	pages: 'build',
		//	assets: 'build',
		//	fallback: 'index.html',
		//	precompress: false
		//}),
		trailingSlash: 'always'
	},
};

export default config;
