<template>
	<div class="main" id="login">
	   <div class="sbtop2">
	   	 <div class="retrun" @click="gotoretrun"></div>
	   </div>
	   <div class="logintop"><img src="../assets/img/logins.jpg"></div>
	   <div class="inputbox"><em>账号</em><input type="text" placeholder="输入手机号" v-model="input1" /></div>
	   <div class="inputbox"><em>密码</em><input type="password" placeholder="输入密码" v-model="input2" /></div>
	   <div class="btnlogin" @click="loginbtn">登录</div>
	</div>	
</template>
<script type="text/javascript">

	import $ from 'jquery';
	import Swiper from 'swiper';
	import { Dialog,Toast } from 'vant';
	import { Tab, Tabs } from 'vant';
	import 'swiper/dist/css/swiper.css';
	import md5 from 'js-md5';
	export default { 
		data(){
			return{
				input1:"",
				input2:""
			}
		},
		 methods: {
		 	gotoretrun(){
		 		this.$router.go(-1);
		 	},
		 	loginbtn(){
		 		var that = this;
		 		if(this.input1 == "" || this.input2 == ""){
		 			Toast('请输入账号或密码');
		 			return false
		 		}
		 		 this.$http({
						method:'post',
						url:"/api/login",
						data: {
							acc:this.input1,
							pwd:md5(this.input2)
						}
					}).then((res) => {
						console.log(res)
						if(res.data.code == 0){
							var url = that.$route.query.redirect;
							localStorage.setItem("token",res.data.data.token);
							this.$router.push(url || '/')
						}
				})
		 	}
		 },
		mounted:function(){
			sessionStorage.setItem("bank",1)
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