<template>
	<div class="detail">
		<div class="de-box">
			<div class="img">
				<img :src="'https://www.jiushumall.com/dealer/dealer_up/server/'+imgurl" alt="">
			</div>
			<div class="right">
				<h4>{{details.shop_name}}</h4>
				<p>
					{{details.shop_address}}
				</p>
				<div class="de-btn">
					<div class="btn-tel">
						电话
					</div>
					<p>
						<i class="icon-de">返</i>
						消费即返100%米粒
					</p>
					<p>暂无优惠信息</p>
				</div>
			</div>
		</div>
		<div class="shop-img">
			<h4>商家坏境</h4>
			<swipepic :imgurls="imgurls"></swipepic>
		</div>
		<div class="linediv">
			<div class="tel">
				<i class="icon iconfont icon-dianhua"></i>
				<p>{{details.tel}}</p>
			</div>
			<div class="tel">
				<i class="icon iconfont icon-weizhi"></i>
				<p>{{details.shop_address}}</p>
			</div>
		</div>
		<div class="shop-img">
			<h4>推荐商家</h4>
			<div class="shop-box">
				<items :indexdatas="indexdatas"></items>
				
			</div>
		</div>
	</div>
	

</template>
<script>
import swipepic from '../com/swipepic';
import { getShopDis } from '../../util/changedata.js';
import items from '../index/items';
export default {
		name:'detail',
		data () {
			return {
				meg:'我是详情页',
				details:[],
				imgurl:'upload/14962029881265.jpg',
				imgurls:[
					"upload/14992398045367.jpg"
				],
				indexdatas:""
			}
		},
		created () {
			this.fetchData();
		},
		methods:{
			fetchData() {
				var that =this;
				var id = that.$route.params.id
				var namero = this.$route.name;
	      		if(namero==="detail"){
					that.$http.get('https://jiushumall.com/wx_api/api.php?check=detail&id='+id).then(res => {
						
						that.details = res.data[0];
						that.imgurl =that.details.img_url[0]
						// console.log('路由监听');
						that.imgurls = that.changearr(that.details.img_url);
						// console.log('首次加载')
					    that.getAllData(res.data[0].lat,res.data[0].lng);
						// that.imgurls = res.data[0].img_url;
						// console.log(that.details.img_url[0])
						 
					},res => {

					})
				}
			},
			changearr (arr) {
				var len = arr.length;
				var result = [];
				// console.log(len);
				// for(var i=0;i<len;i+=3){
				//    result.push(arr.slice(i,i+3));
				// }
				result=arr.slice(0,3);
				return result;
			},
			getAllData (curlat,curlng) {
				var that = this;
				that.$http.get('https://jiushumall.com/wx_api/api.php?check=index_sj').then(res => {
			      	
			        var newdata=getShopDis(res,curlat,curlng).slice(1,8);
			        // console.log(newdata);
			        that.indexdatas = newdata;
			        
			      },res => {

			      })
			}
		},
		watch:{
			'$route'(to,from){
	      		this.id=this.$route.params.id;
	        	this.fetchData();
	      }
		},
		components:{
			swipepic,
			items
		}
	}
</script>
<style scoped>
/*@import url(/static/iconfont.css);*/
.detail {
	
}
.detail p {
	line-height: .6rem;
	color: #333;
}
.de-box {
	display: flex;
	padding: .13rem;
	background: #fff;
}
.de-box .img {
	width: 3rem;
	padding: 0 .12rem;

}
.de-box .img img {
	width: 100%;
	border-radius: .1rem;
}
.de-box .right {
	flex: 1
}
.btn-tel {
	background: #f44336;
	padding: .12rem .24rem;
	float: right;
	border-radius: .12rem;
	color: #fff;
}
.icon-de {
	background: #0fb39c;
	padding: .08rem .09rem;
	color: #fff;
	border-radius: .1rem;
}
.shop-img {
	padding: .13rem;
	margin-top: .12rem;
	background: #fff;
}
.shop-img h4 {
	border-bottom: 1px solid #efefef;
}
.linediv {
	margin:.12rem 0;
	background: #fff;
	overflow: hidden;
}
.linediv .tel {
	overflow: hidden;
	padding: .12rem;

	border-bottom: 1px solid #efefef;
}
.linediv .tel i {
	font-size: .4rem;
	color: #4caf50;
}
.linediv .tel p {
	float: right;
	line-height: .6rem;
}
.shop-box {
	background: #efefef;
}
</style>