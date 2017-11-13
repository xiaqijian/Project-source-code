<template>
	<div class="photo" @click="closePhoto">
		<div class="box">
			<img :src="phurl" alt="">
		</div>
	</div>
</template>

<script>
export default {
	props:['phurl'],
	name:'photo',
	data () {
		return {

		}
	},
	methods: {
		closePhoto () {
			this.$emit('closePhoto','333');
		}
	}
}
	
</script>

<style scoped>
	.photo {
		position: fixed;
		top:0;
		left: 0;
		width: 100%;
		height: 100%;
		background:rgba(0, 0, 0, 0.79);
		/*opacity:0.5;*/

	}
	.photo .box {
		margin-top:3rem;
		height: 50%;
		overflow: hidden;
		/*border:1px solid red;*/
	}
	.photo .box img {
		width: 100%;
	}
</style>