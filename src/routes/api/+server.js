import { json } from '@sveltejs/kit';

export async function GET({ params }) {

	const date_time = new Date();
	console.log("secret_zzz : " + date_time);

	return json({ date_time });
}
