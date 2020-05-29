<template>
	<div class="main" id="login">
	  <img src="../assets/img/login.jpg" class="loginimg"/>
	   <!-- <div class="sbtop2">
	   	 <div class="retrun" @click="gotoretrun"></div>
	   </div> -->
	   <div class="inputbox topinput1"><input type="text" placeholder="输入手机号" v-model="input1" /></div>
	   <div class="inputbox topinput2"><input type="password" placeholder="输入密码" v-model="input2" /></div>
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
						if(res){
							if(res.data.code == 0){
							var url = that.$route.query.redirect;
							localStorage.setItem("token",res.data.data.token);
							this.$router.push(url || '/')
							}
						}
						
				})
		 	}
		 },
		mounted:function(){
			 var token = localStorage.getItem("token");
			 console.log(token)
			 if(token){
				 this.$router.replace({name:'Index',params:{}})
			 }
		}

	}
</script>