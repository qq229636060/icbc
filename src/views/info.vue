<template>
	<div class="main" id="info">
	    <div class="sbtop1">
	   	 <div class="retrun" @click="gotoretrun"></div>
	   </div>
	   <div class="h100"></div>
	   <van-tabs v-model="active" title-active-color="#4286f5" color="#4286f5" line-width="30%" scroll="40px" sticky>
			  <van-tab title="申报记录">
			  	  <div class="formbox" style="margin-top:0.8rem">
			  	  <div class="h22"></div>
			  	  	 <div class="fbox rhui" style="margin-top:0">
			  	  	 	<div class="tt"><img src="../assets/img/info0.jpg"></div>
			  	  	 	<div class="rowbox">
			  	  	 	    <img src="../assets/img/ll.png" class="icons">
			  	  	 		<div class="rowbox_l">应退税额：</div>
			  	  	 		<div class="rowbox_r">{{infodata.refund_fee}}元</div>
			  	  	 	</div>
			  	  	 	<div class="rowbox">
			  	  	 		<div class="rowbox_l">滞纳金：</div>
			  	  	 		<div class="rowbox_r">{{infodata.late_fee}}元</div>
			  	  	 	</div>
			  	  	 	<div class="rowbox">
			  	  	 		<div class="rowbox_l">本次申报已缴税额：</div>
			  	  	 		<div class="rowbox_r">{{infodata.paid_fee}}元</div>
			  	  	 	</div>
			  	  	 	<div class="rowbox">
			  	  	 		<div class="rowbox_l">本次申报已退税额：</div>
			  	  	 		<div class="rowbox_r">{{infodata.refund_fee2}}元</div>
			  	  	 	</div>
			  	  	 </div>
			  	  	  <div class="fbox rhui">
			  	  	 	<div class="rowbox">
			  	  	 		<div class="rowbox_l">税款所属年度：</div>
			  	  	 		<div class="rowbox_r">{{infodata.year}}</div>
			  	  	 	</div>
			  	  	 	<div class="rowbox">
			  	  	 		<div class="rowbox_l">税款所属期起：</div>
			  	  	 		<div class="rowbox_r">{{infodata.year_s}}</div>
			  	  	 	</div>
			  	  	 	<div class="rowbox">
			  	  	 		<div class="rowbox_l">税款所属期止：</div>
			  	  	 		<div class="rowbox_r">{{infodata.year_e}}</div>
			  	  	 	</div>
			  	  	 	<div class="rowbox">
			  	  	 		<div class="rowbox_l">汇缴地主管税务机关：</div>
			  	  	 		<div class="rowbox_r">{{infodata.government}}</div>
			  	  	 	</div>
			  	  	 	<div class="rowbox" v-if="infodata.company != ''">
			  	  	 		<div class="rowbox_l">任职受雇单位：</div>
			  	  	 		<div class="rowbox_r">{{infodata.company}}</div>
			  	  	 	</div>
						<div class="rowbox" v-else>
			  	  	 		<div class="rowbox_l">户籍所在地：</div>
			  	  	 		<div class="rowbox_r">{{infodata.domicile}}</div>
			  	  	 	</div>
			  	  	 </div>
			  	  	 <div class="fbox">
			  	  	 	<div class="tt"><img src="../assets/img/info1.jpg"></div>
			  	  	 	<div class="rowbox">
			  	  	 		<div class="rowbox_l">收入合计：</div>
			  	  	 		<div class="rowbox_r sp"><div class="w350z">{{infodata.user_income_fee}}元</div><i></i></div>
			  	  	 	</div>
			  	  	 	<div class="rowbox">
			  	  	 		<div class="rowbox_l">费用合计：</div>
			  	  	 		<div class="rowbox_r">{{infodata.user_cost_fee}}元</div>
			  	  	 	</div>
			  	  	 	<div class="rowbox">
			  	  	 		<div class="rowbox_l">免税收入：</div>
			  	  	 		<div class="rowbox_r sp"><div class="w350z" style="color:#000">{{infodata.user_free_fee}}元</div><em></em></div>
			  	  	 	</div>
			  	  	 	<div class="rowbox">
			  	  	 		<div class="rowbox_l">减除费用：</div>
			  	  	 		<div class="rowbox_r">{{infodata.user_cut_fee}}元</div>
			  	  	 	</div>
			  	  	 	<div class="rowbox">
			  	  	 		<div class="rowbox_l">专项扣除合计：</div>
			  	  	 		<div class="rowbox_r sp"><div class="w350z">{{infodata.user_deduct_fee}}元</div><i></i></div>
			  	  	 	</div>
			  	  	 	<div class="rowbox">
			  	  	 		<div class="rowbox_l">专项附加扣除合计：</div>
			  	  	 		<div class="rowbox_r sp"><div class="w350z">{{infodata.user_deduct_add_fee}}元</div><i></i></div>
			  	  	 	</div>
			  	  	 	<div class="rowbox">
			  	  	 		<div class="rowbox_l">其他扣除合计：</div>
			  	  	 		<div class="rowbox_r sp"><div class="w350z">{{infodata.user_deduct_other_fee}}元</div><i></i></div>
			  	  	 	</div>
			  	  	 	<div class="rowbox">
			  	  	 		<div class="rowbox_l">准予扣除的捐款额：</div>
			  	  	 		<div class="rowbox_r sp"><div class="w350z">{{infodata.user_donation_fee}}元</div><i></i></div>
			  	  	 	</div>
			  	  	 	<div class="rowbox">
			  	  	 		<div class="rowbox_l">应纳税所得额：</div>
			  	  	 		<div class="rowbox_r">{{infodata.user_pay_tax_fee}}元</div>
			  	  	 	</div>
			  	  	 	<div class="rowbox">
			  	  	 		<div class="rowbox_l">应纳税额：</div>
			  	  	 		<div class="rowbox_r">{{infodata.user_pay_fee}}元</div>
			  	  	 	</div>
			  	  	 	<div class="rowbox">
			  	  	 		<div class="rowbox_l">减免税额：</div>
			  	  	 		<div class="rowbox_r sp"><div class="w350z">{{infodata.user_reduce_fee}}元</div><i></i></div>
			  	  	 	</div>
			  	  	 	<div class="rowbox">
			  	  	 		<div class="rowbox_l">已缴税额：</div>
			  	  	 		<div class="rowbox_r">{{infodata.user_paid_fee}}元</div>
			  	  	 	</div>
			  	  	 </div>
			  	  </div>
					<div class="h110"></div>
					<div class="fixbtnbottom">更正</div>
			  </van-tab>
			  <van-tab title="缴税记录">
			  	<div class="nonetxt">暂无数据</div>
			  </van-tab>
			  <van-tab title="退税记录">
			  	<div class="nonetxt">暂无数据</div>
			  </van-tab>
		</van-tabs>
	</div>	
</template>
<script type="text/javascript">

	import $ from 'jquery';
	import Swiper from 'swiper';
	import { Dialog,Toast } from 'vant';
	import { Tab, Tabs } from 'vant';
	import 'swiper/dist/css/swiper.css';
	export default { 
		data(){
			return{
				active:0,
				id:"",
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
			console.log(this.$route.query)
			this.id = this.$route.query.id
			this.$http({
					method:'post',
					url:"/api/info",
					data: {
						id:this.id
					}
				}).then((res) => {
					if(res.data.code == 0){
						this.infodata = res.data.data
					}
			})
		}

	}
</script>