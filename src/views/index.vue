<template>
	<div class="main" id="indexbox">
	    <div class="topfix" v-if="index == 2 || index == 3">{{txt}}</div>
	    <div class="gotonext1" v-if="index == 2" @click="gotosblist"></div>
	    <div class="gotobank" v-if="index==4" @click="gotobank"></div>
	    <div class="gotonext" v-if="index==1" @click="goto(2)"></div>
	    <div class="gotologin" v-if="index==4 && islogin == false" @click="login">登录/注册</div>
	    <div class="useinfos" v-if="index==4 && islogin == true"><p>{{usename}}</p><p>{{mobile}}</p></div>
	    <div class="outlogin"  v-if="index==4 && islogin == true" @click="outlogin"><img src="../assets/img/outlogin.jpg"/></div>
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
				index:1,
				txt:"",
				islogin:false,
				usename:"",
				mobile:"",
				card:"",
				bank:""
			}
		},
		 methods: {
		 	gotobank(e){
		 		if(localStorage.getItem("token")){
		 			this.$router.push({name:'Bank',params:{}})
		 		}else{
		 			this.$router.push({name:'Login',query:{
	                    redirect:this.$router.history.current.fullPath
	                },params:{}})
		 		}
		 		
		 	},
		 	gotosblist(e){
		 		if(localStorage.getItem("token")){
		 			this.$router.push({name:'Sblist',params:{}})
		 		}else{
		 			this.$router.push({name:'Login',query:{
	                    redirect:this.$router.history.current.fullPath
	                },params:{}})
		 		}
		 		
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
		 			if(sessionStorage.getItem("bank")){
		 				sessionStorage.removeItem("bank")
		 			}
		 			if(localStorage.getItem("token") && localStorage.getItem("token") != ""){
		 				this.getuse()
		 			}
		 			
		 			this.img = require('../assets/img/indexbg3.jpg')
		 			this.navimg = require('../assets/img/nav3.jpg')
		 			this.index =4
		 		}
		 	},
		 	getuse(){
		 			this.$http({
						method:'post',
						url:"/api/user",
					}).then((res) => {
						console.log(res)
						if(res.data.code == 0){
							this.islogin = true
							this.usename = res.data.data.name
							this.mobile = res.data.data.mobile
							this.card = res.data.data.card
						}
				})
		 	},
		 	login(){
		 		  this.$router.push({name:'Login',params:{}})
		 	},
		 	outlogin(){
		 		this.islogin = false
		 		localStorage.setItem("token","")
		 	}
		 },
		mounted:function(){
			if(localStorage.getItem("token")){
				this.islogin = true
			}
			if(sessionStorage.getItem("bank") == 1){
				this.goto(4)
			}
		
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