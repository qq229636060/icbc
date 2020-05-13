<template>
	<div class="main" id="gs">
	   <div class="sbtop3">
	   	 <div class="retrun" @click="gotoretrun"></div>
	   </div>
	   <div class="h93"></div>
	   <div class="gs_box" v-for="list in gslist">
		   <p>{{list.name}}</p>
		   <p style="width:6.5rem">统一社会信用代码：{{list.code}}</p>
		   <p>职务：{{list.position == "" ? "-" : list.position}}</p>
		   <p>任职受雇日期：{{list.start == "" ? "-" : list.start}} </p>
		   <p>离职日期：{{list.end == "" ? "-" : list.end}} </p>
	   </div>
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
				gslist:""
			}
		},
		 methods: {
		 	gotoretrun(){
		 		this.$router.go(-1);
		 	}
		 },
		mounted:function(){
			sessionStorage.setItem("bank",1)
			var that = this;
			this.$http({
						method:'post',
						url:"/api/company",
					}).then((res) => {
						console.log(res)
						if(res.data.code == 0){
							this.gslist = res.data.data
						}
				})
		}

	}
</script>