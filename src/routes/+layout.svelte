<script>
	import '../app.css';
	import NavBar from '../components/NavBar.svelte';
	import Icon from '@iconify/svelte';
	export let data;
	let heading = data.book?.name;
	let description = data.book?.description;
	let image = data.book?.image;
	let chapters = data.book?.chapters;
	let menu = false;
	const toggleMenu = () => {
		menu = !menu;
	};
</script>

<div class="w-full left-6 top-8 bg-[#54b689] text-white p-4 shadow-lg cursor-pointer lg:hidden">
	<button on:click={toggleMenu} class="text-[#54b689] bg-white px-4 py-2 rounded-md cursor-pointer">
		<Icon icon="material-symbols:menu" />
	</button>
</div>
<NavBar
	{menu}
	{toggleMenu}
	{heading}
	{description}
	{image}
	showSocials={data?.book ? false : true}
	{chapters}
/>
<div class="lg:ml-96">
	<slot />
</div>
