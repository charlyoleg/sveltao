export async function get({ params }) {

	const date_time = new Date();
	console.log("secret_zzz : " + date_time);

	return {
      		body: { date_time }
    	};
}
