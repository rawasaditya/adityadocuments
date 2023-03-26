<script>
	// @ts-nocheck

	export let series;
	export let title;
	export let bookSlug;
	export let excerpt;
	export let slug;
	excerpt = excerpt?.length > 75 ? `${excerpt.slice(0, 75)}...` : excerpt;
</script>

<div class="blogCard">
	<div class="flex flex-col">
		<span class="text-xs font-semibold">{series}</span>
		<span class="text-md mb-1">{title}</span>
		<p class="text-sm text-gray-600">{excerpt}</p>
		<a href={`${bookSlug}/${slug}`} data-sveltekit-reload class="text-sm text-blue-500 hover:underline w-fit">Read</a>
	</div>
</div>
