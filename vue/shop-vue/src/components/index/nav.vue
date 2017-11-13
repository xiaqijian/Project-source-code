<template>
	<div class="nav">
		<router-link to="/lists/hotel_sj">
			<div class="navbox">
				<i class="icon iconfont icon-jiudian"></i>
				<p>预订酒店</p>
			</div>
		</router-link>
		<router-link to="/lists/foods_sj">
			<div class="navbox">
				<i class="icon iconfont icon-1-copy"></i>
				<p>餐饮美食</p>
			</div>
		</router-link>
		<router-link to="/lists/arder_sj">
			<div class="navbox">
				<i class="icon iconfont icon-ziyuan"></i>
				<p>休闲娱乐</p>
			</div>
		</router-link>
		<router-link to="/lists/shopping_sj">
			<div class="navbox">
				<i class="icon iconfont icon-gouwu"></i>
				<p>购物出现</p>
			</div>
		</router-link>
	</div>
</template>
<script>
	export default {
		name:'nav',
		data () {
			return {

			}
		}
	}
</script>
<style>

.nav {
	display: flex;
	background: #fff;
	margin:.12rem 0;
	padding: .2rem 0;
}

.nav a{
	flex: 1;
	text-align: center;
}
.nav .navbox i {
	font-size: .6rem;
}
.icon-jiudian {
	color: #f54919;
}
.icon-1-copy {
	color: #009688
}
.icon-ziyuan{
	color: #9C27B0
}
.icon-gouwu {
	color: #de7b15
}
</style>