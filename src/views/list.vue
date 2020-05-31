<template>
	<div class="banklist">
        <div class="fixtop"><img src="../assets/img/listtop.jpg"/><div class="goback" @click="goback"></div></div>
        <div class="list">
            <div :class="index == nowindex ? 'listbox op':'listbox'" v-for="(box,index) in list" :key="box.id" @click="selectbank(index)"> 
                <div class="card">
                    <p>{{box.title}}</p>
                    <p v-if="index != nowindex">{{box.card_no | formatcard}}&nbsp;&nbsp;自助注册</p>
                    <p v-if="index == nowindex">{{box.card_no}}&nbsp;&nbsp;自助注册</p>
                </div>
                <div class="yuer" v-if="index == nowindex">{{box.balance}}</div>
                <div class="gotoinfo" v-if="index == nowindex" @click="gotoinfos(box.id)"></div>
            </div>
            
            <div class="listbottom"><img src="./../assets/img/listbottom.jpg"/></div>
        </div>
    </div>
</template>
<script>
import f from './../assets/js/filter.js'
export default {
     data(){
         return{
             list:"",
             nowindex:0
         }
     },
     methods:{
         goback(){
             this.$router.go(-1)
         },
         selectbank(e){
             this.nowindex = e
         },
         gotoinfos(e){
             this.$router.push({name:"Info",query: { cardid:e}})
         },
         getdata(){
              this.$http({
						method:'post',
						url:"/api/bank"
					}).then((res)=>{
                        if(res){
                            this.list = res.data.data
                        }
                    })
         }
     },
     mounted:function(){
         this.getdata()
     }
}
</script>