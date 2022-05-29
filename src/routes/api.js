export async function get({ params }) {

	const date_time = new Date();

	return {
      		body: { date_time }
    	};
}
