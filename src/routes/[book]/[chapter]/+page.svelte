<script>
	import { format } from 'date-fns';
	import Icon from '@iconify/svelte';
	export let data;
	const title = data.props.meta.title;
	const createdAt = format(new Date(data.props.meta.date), 'MMMM, dd y');
	const next = data.props.next || undefined;
	const prev = data.props.prev || undefined;
	let className = 'justify-between';
	if (Object.keys(next || {}).length == 0) {
		className = 'justify-start';
	}
	if (Object.keys(prev || {}).length == 0) {
		className = 'justify-end';
	}
</script>

<main class="px-20 py-10">
	<div class="text-left sm:text-center col-span-full">
		<div class="mb-5">
			<span class="font-semibold text-gray-500">{createdAt}</span>
		</div>
		<h1
			class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-center sm:text-4xl mb-8 xl:mb-16"
		>
			{title}
		</h1>
	</div>
	<article class="prose lg:prose-xl">
		{@html data.props.content}
	</article>
</main>
<footer class={`w-full h-20 bg-[#54b689] px-10 flex ${className} align-middle items-center`}>
	{#if prev}
		<a href={prev.slug} class="flex items-center bg-white text-[#54b689] px-4 py-2 rounded-full">
			<Icon icon="material-symbols:chevron-left" class="text-3xl" />
			{prev.name}</a
		>
	{/if}
	{#if next}
		<a href={next.slug} class="bg-white text-[#54b689] flex items-center px-4 py-2 rounded-full">
			{next.name}
			<Icon icon="material-symbols:chevron-right" class="text-3xl" />
		</a>
	{/if}
</footer>
