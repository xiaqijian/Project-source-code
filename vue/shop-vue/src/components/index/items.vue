<template>
	<div class="">
		
			<div v-for="item in indexdatas">
				<router-link :to="'/detail/'+item.id">
					<div class="item">
						
						<div class="left">
							<div class="imgbox">
								<img :src="'https://www.jiushumall.com/dealer/dealer_up/server/'+item.img_url" alt="">
							</div>
							
							<p v-show="lcoalBl">距离你有<i>{{item.disdata}}</i>km</p>
						</div>
						<div class="right">
							<h4>{{item.shop_name}}</h4>
							<div class="icon-wujiao">
								<i class="icon iconfont icon-xingzhuang60kaobei2"></i>
								<i class="icon iconfont icon-xingzhuang60kaobei2"></i>
								<i class="icon iconfont icon-xingzhuang60kaobei2"></i>
								<i class="icon iconfont icon-xingzhuang60kaobei2"></i>
								<i class="icon iconfont icon-xingzhuang60kaobei2"></i>
							</div>
							<p>人均消费<i>33</i>元/人</p>
							<p>{{item.shop_address}}</p>
							<p class="redblock">
								<span class="red-icon">返</span>
								消费即反现米粒
							</p>
							<p class="redblock">
								<span class="red-icon">返</span>
								消费即送抵用券
							</p>
						</div>
					</div>
				</router-link>
			</div>
		
	</div>
</template>

<script>
import PullTo from 'vue-pull-to'

	export default {
		name:'items',
		props:['indexdatas'],
		data () {
			return {
				meg: '',
				lcoalBl:true
			}
		},
		components: {
	      PullTo
	    },
	    methods: {
	      refresh(loaded) {
	        setTimeout(() => {
	          this.dataList.reverse();
	          loaded('done');
	        }, 20);
	      }
	    }
	}
</script>

<style>
.item {
	background: #fff;
	display: flex;
	padding: .23rem;
	margin-bottom: .1rem;
}
.item .left {
	width: 3rem;
}
.item .left p i {
	color: red;
}
.item .left .imgbox{
	width: 100%;
	height: 2.12rem;
	overflow: hidden;
	border-radius: .1rem;
}
.item .left img {
	width:100%;
	border-radius: .1rem;
}
.item .right {
	flex: 1;
	padding-left: .2rem;
}
.item .right p i{
	color: red;
	font-weight: bold;
}
.item .right .redblock {
	margin-bottom: .1rem;
}
.item .right .redblock span{
	background: #e91e63;
	color: #fff;
	display: inline-block;
	padding: 0 .04rem;
	font-size: .08rem;
	border-radius: .04rem;
}
.icon-wujiao i {
	color: #de7b15;
}
</style>