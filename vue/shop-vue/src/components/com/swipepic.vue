<template>
	<div class="banner">
		<div class="shop-img-box">
			<swipe class="my-swipe" :showIndicators="false" :speed="3000">
				
					<swipe-item>
						<div class="conta-img" v-for="item in imgurls">
							<img :src="'https://www.jiushumall.com/dealer/dealer_up/server/'+item" alt="" @click="getImgUrl">	
						</div>
					</swipe-item>
			</swipe>
		</div>
		<photo v-show="photoBl" :phurl="phurl" @closePhoto="closePhoto"></photo>
	</div>
</template>

<script>
require('vue-swipe/dist/vue-swipe.css');

// in ES6 modules
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vue-swipe';
import photo from './photo';
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);
export default {
	props:['imgurls'],
	data () {
		return {
			n:null,
			photoBl:false,
			phurl:'https://www.jiushumall.com/dealer/dealer_up/server/upload/14992398045367.jpg',
		}
	},
	beforeCreate(){
        
	},
	components: {
		photo
	},
	methods:{
		getImgUrl (e) {
			// console.log(e.target.src);
			this.photoBl = true;
			this.phurl = e.target.src;
		},
		closePhoto (e) {
			// console.log(e);
			this.photoBl = false;
		}
	}
}
	
</script>

<style scoped>
.my-swipe {
  height: 1.8rem;
  color: #fff;
  font-size: 30px;
  text-align: center;
  background: #fff
}



.shop-img-box {
	/*border:1px solid red;*/
	overflow: hidden;
}
.shop-img-box .conta-img {
	width: 30%;
	float: left;
	margin:.12rem;
}
.shop-img-box .conta-img img {
	width: 100%;
}
</style>
</style>