<template>
	<div class="loading">
		<img src="../../assets/img/loading.gif" alt="">
	</div>
</template>

<script>
	export default {
		name:'loading'
	}
</script>

<style>
.loading {
	width: 100rem;
	height: 100rem;
	background: #fff;
}
.loading img{
	width: 1rem;
	position:fixed;
	left: 50%;
	top:50%;
	margin-left: -.5rem;
	margin-top: -.5rem;
}
</style>