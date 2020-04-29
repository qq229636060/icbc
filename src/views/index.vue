<template>
	<div class="main" id="indexbox">
	    <div class="topfix" v-if="index == 2 || index == 3">{{txt}}</div>
	    <div class="gotobank" v-if="index==4" @click="gotobank"></div>
		<img :src="img" class="indexbg"/>
		<div class="nav">
		    <img :src="navimg">
			<a class="navbox" @click="goto(1)"></a>
			<a class="navbox" @click="goto(2)"></a>
			<a class="navbox" @click="goto(3)"></a>
			<a class="navbox" @click="goto(4)"></a>
		</div>
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
				img:require('../assets/img/indexbg.jpg'),
				navimg:require('../assets/img/nav.jpg'),
				index:"",
				txt:""
			}
		},
		 methods: {
		 	gotobank(e){
		 		this.$router.push({name:'Bank',params:{}})
		 	},
		 	goto(e){
		 		if(e == 1){
		 			this.img = require('../assets/img/indexbg.jpg')
		 			this.navimg = require('../assets/img/nav.jpg')
		 			this.index =1
		 		}else if(e == 2){
		 			this.img = require('../assets/img/indexbg1.jpg')
		 			this.navimg = require('../assets/img/nav1.jpg')
		 			this.index =2
		 			this.txt = "办税"
		 		}else if(e == 3){
		 			this.img = require('../assets/img/indexbg2.jpg')
		 			this.navimg = require('../assets/img/nav2.jpg')
		 			this.index =3
		 			this.txt = "服务"
		 		}else if(e == 4){
		 			this.img = require('../assets/img/indexbg3.jpg')
		 			this.navimg = require('../assets/img/nav3.jpg')
		 			this.index =4
		 		}
		 	}
		 },
		mounted:function(){
			var that = this;
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