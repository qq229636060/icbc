<template>
	<div class="main" id="indexbox">
		<div class="indextop" v-if="nowloc == 1">
			<div class="inbox">
				<div class="index_txt" @click="gotologin">{{txt}}</div>
				<img src="../assets/img/indextop.jpg"/>
			</div>
		</div>
		<div class="gotolist" v-if="nowloc == 1" @click="gotolist"></div>
	   <img src="../assets/img/index.jpg" v-if="nowloc == 1" />
	   <img src="../assets/img/use.jpg" v-if="nowloc == 2" />
	   <img src="../assets/img/use1.jpg" v-if="nowloc == 3" />
	   <div class="usr_gologin" v-if="nowloc == 3"  @click="gotologin"></div>
	   <div class="useinfoz" v-if="nowloc == 2">
		   <div class="kh_name">{{userinfo.name|formatname}}</div>
		    <div class="kh_moblie">{{userinfo.mobile|formatnumber}}</div>
			<div class="kh_lastlogin">上次登录：{{userinfo.last}}</div>
			<div class="zmoney">{{userinfo.money}}</div>
			<div class="zmoney other">{{userinfo.money}}</div>
	   </div>
	   <div :class="nowloc == 1 ? 'foot' : 'foot1'">
		   <div class="gotouse" @click="gotouse"></div>
		   <div class="gotoindex" @click="gotoindex"></div>
	   </div>
	</div>	
</template>
<script type="text/javascript">
	import $ from 'jquery';
	import Swiper from 'swiper';
	import { Dialog,Toast } from 'vant';
	import f from './../assets/js/filter.js'
	export default { 
		data(){
			return{
				nowloc:1,
				txt:"",
				userinfo:""
			}
		},
		 methods: {
			gotoindex(){
				this.nowloc = 1;
			},
			gotouse(){
				var token = localStorage.getItem("token");
				if(token){
					this.nowloc = 2;
				}else{
					this.nowloc = 3;
				}
			},
			gotologin(){
				var token = localStorage.getItem("token");
				if(token){
					localStorage.removeItem("token");
				     this.index()
				}else{
					this.$router.push({name:"Login"})
				}
				
			},
			gotolist(){
				this.$router.push({name:"List"})
			},
			index(){
				var token = localStorage.getItem("token");
				if(token){
				 this.txt = "退出";
				  this.$http({
						method:'post',
						url:"/api/user"
					}).then((res)=>{
						if(res){
							if(res.data.code == 0){
								this.userinfo = res.data.data
							}
						}
					})
				}else{
				 this.txt = "登录"
				}
			}
		 },
		mounted:function(){
			document.addEventListener("plusready",plusReady,false); 
			function plusReady(){
				plus.navigator.setStatusBarBackground("#000000");
			} 
			this.index() 
		}

	}
	
</script>
<style scoped>
  
</style>