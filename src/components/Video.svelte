<script>
	export let src = '';
	src = `/src/lib/assets/videos/${src}`;
	let videoController;
</script>

<video
	controls
	controlsList="nodownload"
	downloads
	class=" w-auto min-w-full aspect-video rounded-md border shadow-2xl"
	bind:this={videoController}
>
	<source {src} type="video/mp4" />
	Your browser does not support the video tag.
</video>
