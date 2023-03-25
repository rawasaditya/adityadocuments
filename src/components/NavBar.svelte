<script>
	import Icon from '@iconify/svelte';
</script>

<!-- <header class="flex justify-center items-center">
	<nav
		class="bg-white flex flex-col lg:flex-row px-20 py-5 w-full lg:w-fit lg:gap-40 gap-5 lg:mt-10 lg:rounded-full shadow-md items-center"
	>
		<h2>
			<span class="font-semibold text-2xl">JDocs</span>
			<sub class="text-red-400 text-xs">By Aditya Rawas</sub>
		</h2>
		<div class="flex gap-11 text-sm">
			<ul class="flex gap-7 uppercase items-center">
				<li>Home</li>
				<li>About</li>
				<li>
					<Icon icon="mdi:twitter" class="text-2xl text-blue-400" />
				</li>
				<li>
					<Icon icon="mdi:instagram" class="text-2xl text-red-500" />
				</li>
				<li>
					<Icon icon="mdi:linkedin" class="text-2xl text-indigo-500" />
				</li>
			</ul>
		</div>
	</nav>
</header> -->
<header class="h-screen w-96 bg-[#5FCB71] shadow-xl py-10 text-white">
	<nav class="w-full flex flex-col align-middle items-center gap-5">
		<h2 class="text-center text-3xl w-full font-semibold">Aditya Rawas</h2>
		<div class="flex flex-col items-center gap-2 px-3 mt-4">
			<img
				alt="Aditya Rawas"
				src="https://pbs.twimg.com/profile_images/1456775976847773696/S4K3tnxt_400x400.jpg"
				class="rounded-full w-52"
			/>
			<p class="text-sm text-center">
				Hi, my name is Anthony Doe. Briefly introduce yourself here. You can also provide a link to
				the about page.
			</p>
		</div>
		<ul class="flex justify-around w-full my-4">
			<li class="bg-white p-2 rounded-full cursor-pointer">
				<Icon icon="mdi:twitter" class="text-2xl text-[#5FCB71]" />
			</li>
			<li class="bg-white p-2 rounded-full cursor-pointer">
				<Icon icon="mdi:instagram" class="text-2xl text-[#5FCB71]" />
			</li>
			<li class="bg-white p-2 rounded-full cursor-pointer">
				<Icon icon="mdi:linkedin" class="text-2xl text-[#5FCB71]" />
			</li>
			<li class="bg-white p-2 rounded-full cursor-pointer">
				<Icon icon="mdi:github" class="text-2xl text-[#5FCB71]" />
			</li>
		</ul>
	</nav>
	<hr />
</header>

<style>
	hr {
		margin: 1rem 0;
		color: inherit;
		border: 0;
		border-top: 1px solid;
		opacity: 0.25;
	}
</style>
