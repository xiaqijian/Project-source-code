<template>
	<div class="banner">
		<swipe class="my-swipe">
		  <swipe-item class="slide1" v-for="item in banners" :key="item.id">
		  	<img :src="item.imgUrl" alt="">
		  </swipe-item>
		</swipe>
	</div>
</template>

<script>
require('vue-swipe/dist/vue-swipe.css');

// in ES6 modules
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vue-swipe';
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);
export default {
	props:['banners'],
	data () {
		return {
		}
	}
}
	
</script>

<style>
.banner {
	height: 2.6rem;
}
.my-swipe {
  height: 2.6rem;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>
