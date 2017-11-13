<template>
	<div class="index">
		<el-amap vid="amap" :plugin="plugin" class="amap-demo">
    	</el-amap>
    	<loading v-show="loadbool"></loading>
    	<banner :banners="banners"></banner>
    	<index-nav></index-nav>
    	<items :indexdatas="indexdatas"></items>
	</div>
</template>

<script>
import { getShopDis } from '../../util/changedata.js'
import items from './items'
import loading from '../com/loading'
import banner from './banner'
import indexNav from './nav'

export default {
	name: 'index',
	data(){
		var self = this
		return {
			plugin:[],
			indexdatas:'',
			loadbool:true,
			banners:[
				{
					imgUrl:'http://www.jiushumall.com/hs/public_source/wap/img/around/index1.jpg'
				},
				{
					imgUrl:'http://www.jiushumall.com/hs/public_source/wap/img/around/index2.jpg'
				}
			]
		}
	},
	created(){
	    var self = this;
	    // console.log(333);
	    this.plugin = [{
	        pName: 'Geolocation',
	            events: {
	              init(o) {
	                // o 是高德地图定位插件实例
	                o.getCurrentPosition((status, result) => {
	                	if(status=="error"){
	                		console.log(status);
	                		console.log("定位失败");
	                		self.getfun();
	                		return;
	                	}
	                	
	                  if (result && result.position) {
	                    self.lng = result.position.lng;
	                    self.lat = result.position.lat;
	                    sessionStorage.localdata = [self.lng,self.lat];
	                    console.log('定位中');
	                    self.getfun(self.lat,self.lng);
	                    self.$nextTick();
	                    
	                  }
	                });
	              }
	            }
	      }]
	},
	methods:{
	    getfun(curlat,curlng){
	      var that = this
	      // console.log('wo');
	      if(localStorage.indexdatas){
	      		// console.log('我是有数据');
	      		var resdata = JSON.parse(localStorage.indexdatas);
	      		var newdata=resdata;
		        that.loadbool = false;
		        that.indexdatas = newdata
	      }else {
	      	that.$http.get('https://jiushumall.com/wx_api/api.php?check=index_sj').then(res => {
	      		var newdata=getShopDis(res,curlat,curlng)
		      	localStorage.indexdatas = JSON.stringify(newdata);
		        that.loadbool = false;
		        that.indexdatas = newdata
		        // console.log(that.indexdatas);
		      },res => {

		      })
	      }
	      
	     
	    }
  	},
  	components:{
  		banner,
  		items,
  		loading,
  		indexNav
  	}
	
}
	
</script>

<style>
	
</style>