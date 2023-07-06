import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

const Poll = z.object({
	// id: z.number(),
	name: z.string(),
	// candidates: Candidate[],
	threshold: z.number(),
	choiceLimit: z.number(),
	public: z.boolean(),
	anonymous: z.boolean()
});

export async function load() {
	const form = await superValidate(Poll);
	return { form };
}

export const actions = {
	default: async ({ request }) => {
		// const foo = Poll.parse({ name: 'ok' });
		// console.log(foo);
		const form = await superValidate(request, Poll);
		console.log('POST', form);

		if (!form.valid) {
			return fail(400, { form });
		}
		return { form };
	}
};
