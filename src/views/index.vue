<template>
	<div class="main" id="indexbox">
		<div class="indextop" v-if="nowloc == 1">
			<div class="inbox">
				<div class="index_txt" @click="gotologin">{{txt}}</div>
				<img src="../assets/img/indextop.jpg"/>
			</div>
		</div>
	   <img src="../assets/img/index.jpg" v-if="nowloc == 1" />
	   <img src="../assets/img/use.jpg" v-if="nowloc == 2" />
	   <img src="../assets/img/use1.jpg" v-if="nowloc == 3" />
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
	 
	export default { 
		data(){
			return{
				nowloc:1,
				txt:""
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
			index(){
				var token = localStorage.getItem("token");
				if(token){
				 this.txt = "退出"
				}else{
					this.txt = "登录"
				}
			}
		 },
		mounted:function(){
			this.index() 
		}

	}
	
</script>
<style scoped>
  
</style>