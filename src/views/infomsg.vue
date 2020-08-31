<template>
  <div class="infomsg">
      <div class="fixtop"><img src="../assets/img/msgfix.jpg"/><div class="goback" @click="goback"></div></div>
      <div v-if="green" class="green">{{msg.money}}</div>
      <div v-else class="moneyz">+{{msg.money}}</div>
      <div class="p"><img src="../assets/img/yy.jpg"/></div>
      <div class="msglist">
          <ul>
              <li>
                  <div>交易时间</div><div>{{msg.pushed}}</div>
              </li>
              <li> <div>交易卡号</div><div>{{msg.card_no | formatcard1}}</div></li>
              <li><div>交易账户</div><div>{{msg.acc | formatcard1}}</div></li>
                <li><div>交易户名</div><div>{{msg.user_name}}</div></li>
                 <li><div>业务摘要</div><div class="ss">{{msg.title}}<i></i></div></li>
                  <li><div>交易国家或地区简称</div><div>CHN</div></li>
                   <!-- <li><div>交易场所</div><div>{{msg.title2}}</div></li> -->
                    <li> <div>交易金额</div><div>{{msg.money}}</div></li>
                     <li><div>记账金额</div><div>{{msg.record}}</div></li>
                      <li> <div>记账币种</div><div>人民币</div></li>
                       <li :class="msg.other_bank == ''? 'btt':''"><div>交易卡余额</div><div>{{msg.balance}}</div></li>
                        <li class="tt" v-if="msg.opposing_acc !=''"><div>对方账户</div><div class="bold">{{msg.opposing_acc}}</div></li>
                        <li class="" v-if="msg.opposing_name !=''"><div>对方户名</div><div class="bold">{{msg.opposing_name}}</div></li>
                        <li class="btt" v-if="msg.other_bank !=''"><div>对方账户行别</div><div class="bold">{{msg.other_bank}}</div></li>
          </ul>
      </div>
  </div>
</template>

<script>
//import f from './../assets/js/filter.js'
export default {
     data(){
         return{
             cardid:'',
             msg:"",
             green:false
         }
     },
    mounted:function(){
        this.cardid = this.$route.query.cardid;
        this.getdata()
    },
     methods:{
         goback(){
             this.$router.go(-1)
         },
         getdata(){
                    this.$http({
						method:'post',
                        url:"/api/info",
                        data:{
                            id:this.cardid
                        }
					}).then((res)=>{
                        console.log(res)
                        if(res){
                            this.msg = res.data.data;
                            if(Number(this.msg.money)<0){
                                this.green = true
                            }else{
                                 this.green = false
                            }
                        }
                    })
         }
    }
}
</script>

<style scoped>
    .ss{ color: #3399ff; display: flex; align-items: center;}
    .ss i{ width:.14rem ; height: .16rem; display:inline-block; background: url(../assets/img/jjt.jpg) no-repeat 0 0; background-size:100% ;  margin-left: 0.1rem;}
    .infomsg{ background: #eee;}
    .moneyz{width: 100%; padding: 0.5rem 0 0.2rem 0; text-align: center; font-size: .56rem; margin-top: 1rem; color: #f39699; background: #fff;}
    .green{width: 100%; padding: 0.5rem 0 0.2rem 0; text-align: center; font-size: .56rem; margin-top: 1rem; color: #59ca94;background: #fff;}
    .msglist {  background: #fff;}
    .msglist ul{ width: 6.6rem; margin: 0 auto;border-top:solid 0.01rem #d8d8d8; padding-top:0.3rem ; margin-bottom: 0.5rem;}
    .msglist li { display:flex; justify-content: space-between; align-items: center;  margin-bottom: 0.4rem; }
    .msglist li:last-child{margin: 0;}
    .msglist li div:first-child{ width: 2.2rem;}
    .msglist li div { font-size: .31rem;}
    .msglist .tt{ border-top:solid 0.01rem #d8d8d8; padding-top:0.4rem;}
    .bold{ font-weight: bold;}
    .p{ width: 100%; height: 0.74rem;}
    .p img{ width: 100%; height: 0.74rem;}
    .btt{ border-bottom:solid 0.01rem #d8d8d8; padding-bottom:0.3rem ;}
</style>