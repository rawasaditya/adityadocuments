<script>
	import BlogCard from '../BlogCard/BlogCard.svelte';
	export let books;
</script>

{#each books as book}
	<div class="lg:px-20 py-10">
		<h2
			class="border-l-4 pl-3 text-2xl py-4 mb-4 capitalize"
			style={`border-color:${book.bookColorCode}`}
		>
			{book?.name}
		</h2>
		<div class="px-7">
			<div class="grid lg:grid-cols-4 gap-4 gap-y-10">
				{#each book.chapters as chapters}
					<BlogCard
						title={chapters?.name}
						series={chapters.category}
						excerpt={chapters.description}
						bookSlug={book.slug}
						slug={chapters.slug}
					/>
				{/each}
			</div>
		</div>
	</div>
{/each}
