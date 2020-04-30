<template>
	<div class="main" id="bank">
	    <div class="sbtop">
	   	 <div class="retrun" @click="gotoretrun"></div>
	   </div>
	   <div class="h100"></div>
	   <van-tabs v-model="active" title-active-color="#4286f5" color="#4286f5" line-width="30%">
			  <van-tab title="未完成">
			  	  <div class="bigbox"><img src="../assets/img/ts.jpg"/></div>
			  	  <div class="nonebox"></div>
			  </van-tab>
			  <van-tab title="已完成">
			  	 <div class="box_year" @click="gotoinfo(b.id)" v-for="b in infoarr" >
			  	 	<h2>{{b.pushed}}</h2>
			  	 	<div class="infoboxz">
			  	 		<p>{{b.year}}年度综合年度所得年度汇算</p>
			  	 		<p>汇款所属期:{{b.year_s}}至{{b.year_e}}</p>
			  	 		<p>以退税额:{{b.refund_fee}}元</p>
			  	 		<i></i>
			  	 	</div>
			  	 </div>
			  </van-tab>
			  <van-tab title="已作废">
			  	<div class="nonebox"></div>
			  </van-tab>
		</van-tabs>
	</div>	
</template>
<script type="text/javascript">
	import $ from 'jquery';
	import Swiper from 'swiper';
	import { Dialog,Toast } from 'vant';
	import { Tab, Tabs } from 'vant';
	import 'swiper/dist/css/swiper.css';
	export default { 
		data(){
			return{
				active:0,
				infoarr:""
			}
		},
		 methods: {
		 	gotoretrun(){
		 		this.$router.go(-1);
		 	},
		 	gotoinfo(e){
		 		this.$router.push({name:'Info',query:{id:e}})
		 	}
		 },
		mounted:function(){
			var that = this;
			this.$http({
					method:'post',
					url:"/api/list",
					data: {}
				}).then((res) => {
					if(res.data.code == 0){
						console.log(res);
						this.infoarr = res.data.data
					}
			})
		}

	}
</script>