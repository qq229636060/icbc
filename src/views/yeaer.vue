<template>
	<div class="main" id="yeaer">
	   <div class="retrun" @click="gotoretrun"></div>
	   <img src="../assets/img/years.jpg" style="width:100%"/>
	   	<van-dialog v-model="show" title="提示" show-cancel-button @confirm="cf" @cancel="ca" confirm-button-text="申报详情">
		<p class="w487">您已提交过申报，如需进行更正、缴退税或作废操作，请进入”申报详情“</p>
	</van-dialog>	
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
				show:false
			}
		},
		 methods: {
		 	gotoretrun(){
		 		this.$router.go(-1);
			 },
			 cf(){
					this.$router.replace({name:'Sblist',params:{}})
			 },
			 ca(){
					this.$router.go(-1);
			 }
		 },
		mounted:function(){
			var _this = this;
			Toast.loading({
				forbidClick: true,
				duration:1000,
				loadingType: 'spinner',
				onClose:function(){
					_this.show = true
				}
			 });
			 	
		}

	}
</script>