<script>
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	export let heading = 'Aditya Rawas';
	export let description =
		'I my name is Aditya Rawas. This is not just ordinary dev blog platform. But documentation bin where I throw all my learning feel free to read by the serries of notes here.';
	export let image =
		'https://pbs.twimg.com/profile_images/1456775976847773696/S4K3tnxt_400x400.jpg';
	export let showSocials = true;
	export let chapters = [];
	export let menu = false;
	export let toggleMenu = () => {};
	$: active = $page.url.pathname.split('/').at(-1);
</script>

<header class={` text-white w-96 ${!menu ? 'hidden' : ''} lg:block relative`}>
	<div class="w-full flex align-top justify-start p-4 mb-5 lg:hidden">
		<button
			on:click={toggleMenu}
			class="text-[#54b689] bg-white px-4 py-2 rounded-md cursor-pointer"
		>
			<Icon icon="material-symbols:menu-open-rounded" />
		</button>
	</div>
	<nav class="w-full py-10 flex flex-col align-middle items-center gap-5">
		<h2 class="text-center text-3xl w-full font-semibold">{heading}</h2>
		<div class="flex flex-col items-center gap-2 px-3 mt-2">
			<img alt="Aditya Rawas" src={image} class="rounded-full w-36" />
			<p class="text-sm text-center p-3">{description}</p>
		</div>
		{#if showSocials}
			<ul class="flex justify-around w-full my-4">
				<a
					href="https://twitter.com/rawas_aditya"
					target="_blank"
					class="bg-white p-2 rounded-full cursor-pointer"
				>
					<Icon icon="mdi:twitter" class="text-2xl text-[#5FCB71]" />
				</a>
				<a
					target="_blank"
					href="https://www.instagram.com/aditya.rawas/"
					class="bg-white p-2 rounded-full cursor-pointer"
				>
					<Icon icon="mdi:instagram" class="text-2xl text-[#5FCB71]" />
				</a>
				<a
					href="https://www.linkedin.com/in/aditya-rawas-626578149/"
					target="_blank"
					class="bg-white p-2 rounded-full cursor-pointer"
				>
					<Icon icon="mdi:linkedin" class="text-2xl text-[#5FCB71]" />
				</a>
				<a
					href="https://github.com/rawasaditya"
					target="_blank"
					class="bg-white p-2 rounded-full cursor-pointer"
				>
					<Icon icon="mdi:github" class="text-2xl text-[#5FCB71]" />
				</a>
			</ul>
		{/if}
	</nav>
	<hr />

	<div class="max-w-screen-xl mx-auto min-h-sceen">
		<div class="grid divide-y divide-neutral-200 mt-8">
			{#each chapters as chapter}
				<a href={chapter.slug} class={`py-5 ${chapter.slug === active ? 'border-r-8' : ''} `}>
					<div class="flex justify-between items-center font-medium cursor-pointer list-none px-5">
						<span> {chapter.name}</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</header>

<style>
	hr {
		margin: 1rem 0;
		color: inherit;
		border: 0;
		border-top: 1px solid;
		opacity: 0.25;
	}

	header {
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
		background: #54b689;
		color: #fff;
		overflow-y: auto;
	}
</style>
