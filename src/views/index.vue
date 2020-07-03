<template>
	<div class="main" id="indexbox">
		<div class="indextop" v-if="nowloc == 1">
			<div class="inbox">
				<div class="index_txt" @click="gotologin">{{txt}}</div>
				<img src="../assets/img/indextop.jpg"/>
			</div>
		</div>
		<div class="gotolist" v-if="nowloc == 1" @click="gotolist"></div>
		<div class="caonima" v-if="nowloc == 1 && txt == '登录'" @click="gotolist">亲爱的朋友，{{sayhi}}</div>
		<div class="caonima" v-if="nowloc == 1 && txt == '退出'" @click="gotolist">亲爱的{{userinfo.name|formatname}}，{{sayhi}}</div>
		<div class="caonima1" v-if="nowloc == 1">
			<div class="day">{{d}}</div>
			<div class="times">
				<p>{{y}}年{{m}}月</p>
				<p>{{ds}}</p>
			</div>
		</div>
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
				userinfo:"",
				y:"",
				m:"",
				d:"",
				ds:"",
				sayhi:""
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
			},
			getCurrentDate() {
						var myDate = new Date();
						var year = myDate.getFullYear(); //年
						var month = myDate.getMonth() + 1; //月
						var day = myDate.getDate(); //日
						var days = myDate.getDay();
						var hour =  myDate.getHours() 
						if(hour < 6){this.sayhi = "凌晨好！"} 
						else if (hour < 9){this.sayhi="早上好！"} 
						else if (hour < 12){this.sayhi="上午好！"} 
						else if (hour < 14){this.sayhi="中午好！"} 
						else if (hour < 17){this.sayhi="下午好！"} 
						else if (hour < 19){this.sayhi="傍晚好！"} 
						else if (hour < 22){this.sayhi="晚上好！"} 
						else {this.sayhi="夜里好！"} 
						switch(days) {
								case 1:
									days = '星期一';
									break;
								case 2:
									days = '星期二';
									break;
								case 3:
									days = '星期三';
									break;
								case 4:
									days = '星期四';
									break;
								case 5:
									days = '星期五';
									break;
								case 6:
									days = '星期六';
									break;
								case 0:
									days = '星期日';
									break;
						}
						this.y =year;
						this.m=month;
						if(day<10){
							this.d = '0'+day;	
						}else{
							this.d = day;
						}
						
						this.ds = days
						var str = year + "年" + month + "月" + day + "日  " + days;
						//return str;
					}
		 },
		mounted:function(){
			document.addEventListener("plusready",plusReady,false); 
			function plusReady(){
				plus.navigator.setStatusBarBackground("#000000");
			} 
			this.getCurrentDate()
			this.index() 
		}

	}
	
</script>
<style scoped>
  
</style>