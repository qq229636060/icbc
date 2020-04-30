<template>
	<div class="main" id="bank">
	   <div class="banktopfix">
	   	 <div class="retrun" @click="gotoretrun">
	   	 	
	   	 </div>
	   </div>
	   <div class="bankbox">
	   	  <img src="http://imgsa.baidu.com/exp/w=500/sign=81e01fd68713632715edc233a18fa056/6159252dd42a2834a4a4b50156b5c9ea15cebfbe.jpg" class="logos">
	   	  <div class="info">
	   	  	 <p>{{infodata.bank}}</p>
			 <p class="f28">{{infodata.card}}</p>
			 <p class="f26">已核验<i></i></p>
	   	  </div>
	   </div>
	   <div class="bottonnav"></div>
	</div>	
</template>
<script type="text/javascript">
	import $ from 'jquery';
	import Swiper from 'swiper';
	import { Dialog,Toast } from 'vant';
	import 'swiper/dist/css/swiper.css';
	export default { 
		data(){
			return{
			infodata:""
			}
		},
		 methods: {
		 	gotoretrun(){
		 		this.$router.go(-1);
		 	}
		 },
		mounted:function(){
			var that = this;
			sessionStorage.setItem("bank",1);
					this.$http({
					method:'post',
					url:"/api/user",
				}).then((res) => {
					if(res.data.code == 0){
						this.infodata = res.data.data
					}
			})
			// this.$http({
			// 		method:'get',
			// 		url:"/home/user/version",
			// 		data: {}
			// 	}).then((res) => {
			// 		this.versions = res.data.data
			// })
		}

	}
</script>