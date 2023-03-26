<script>
	import '../app.css';
	import NavBar from '../components/NavBar.svelte';
	import RightContent from '../components/RightContent/RightContent.svelte';
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

<button
	on:click={toggleMenu}
	class="absolute left-6 top-8 bg-[#54b689] text-white p-4 rounded-full shadow-lg cursor-pointer"
>
	<Icon icon="material-symbols:menu" />
</button>
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
