<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	export let data;

	const { form } = superForm(data.form);
</script>

<SuperDebug data={$form} />
<form class="mb-10 border-8 border-red-100 p-10" method="POST">
	<label for="name">Name:</label>
	<input bind:value={$form.name} name="name" type="text" />
	<label>Threshold: <input name="threshold" bind:value={$form.threshold} type="number" /></label>
	<!-- <label>Threshold <input name="threshold" /></label>
	<label>ChoiceLimit <input name="choiceLimit" /></label>
	<label>Public? <input name="public" /></label>
	<label>Anonymous? <input name="anonymous" /></label> -->
	<button class="p-2">Submit!</button>
</form>
