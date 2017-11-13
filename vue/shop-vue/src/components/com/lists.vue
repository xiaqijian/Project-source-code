<template>
	<div class="lists">
		<navs></navs>
		<items :indexdatas="items"></items>
	</div>
</template>
<script>
import { getShopDis } from '../../util/changedata.js'
import items from '../index/items'
import navs from '../index/nav'
	export default {
		name:'lists',
		data () {
			return {
				mesg:'我是分类',
				items:''
			}
		},
		created () {
			this.fetchData();
		},
		methods:{
			fetchData () {
				var localcur;
				var id = this.$route.params.id;
				var that = this;
				if(sessionStorage.localdata){
					localcur = sessionStorage.localdata.split(',');
				}else{
					localcur = [120.181017,30.269054];
				}
				
				var namero = this.$route.name;
	      		if(namero==="lists"){
	      			that.$http.get('https://jiushumall.com/wx_api/api.php?check='+id).then(res => {
						var newdata=getShopDis(res,localcur[1],localcur[0])
						that.items = newdata
					},res => {
						console.log(res)
					})
	      		}else{
	      			// console.log(999)
	      		}
				
			}
		},
		watch: {
	      '$route'(to,from){
	      		this.id=this.$route.params.id;
	        	this.fetchData();
	      }
	    },
		components:{
			items,
			navs
		}
	}
</script>
<style>
	
</style>