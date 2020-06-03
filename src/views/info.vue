<template>
    <div class="infos">
         <div class="fixtop"><img src="../assets/img/infotop.jpg"/><div class="goback" @click="goback"></div></div>
    <div class="infoz">
        <img src="../assets/img/infoz.jpg"/>
        <div class="gotoso" @click="gotoso"></div>
        <div class="ztext">
            <p><span>{{infoobj.title2}}</span><span>尾号{{infoobj.card_no | formatlast}}</span></p>
            <p>{{infoobj.balance}}</p>
        </div>
        <div class="shouru">
            <span>收:+{{infodata.income}}</span>
            <span>支:{{infodata.expend}}</span>
        </div>
    </div>
    <div class="infolist">
        <div class="yy" v-if="i==0" v-for="(y,key,i) in ldata" :key="key" >
        <div class="infobox" v-for="(mouth,keys,i1) in y" :key="keys" v-if="i1==1 && mouth.day.length != 0">
            <div class="month">{{key|format_year}}年{{keys|format_year}}月</div>
            <div class="everyday" v-for="(day,keyday) in mouth.day" :key="keyday">
            <div class="happday" v-for="last in day" :key="last.id">
                <div class="eday_l">
                    <p>{{keyday|format_year}}</p>
                    <p>{{last.week}}</p>
                </div>
                <div class="eday_r" >
                    <div class="jiaoyi">
                    <div class="eday_r_l">
                        <p>{{last.title}}</p>
                        <p>{{last.title2}}</p>
                    </div>
                     <div :class="parseFloat(last.money) > 0 ? 'eday_r_r':'eday_r_r grenn'">
                        <span v-if="parseFloat(last.money) > 0">+</span>{{last.money}}
                     </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="infotxt"><img src="../assets/img/infotxt.jpg"/></div>
    </div>
    </div>
</template>
<script>
import f from './../assets/js/filter.js'
import { Toast } from 'vant';
export default {
    data(){
        return{
            infodata:"",
            infoobj:"",
            ldata:"",
            cardid:""
        }
    },
     methods:{
         goback(){
             this.$router.go(-1)
         },
         gotoso(){
             this.$router.push({name:"So",query: { tit:this.infoobj.title3,cardno:this.infoobj.card_no,cardid:this.cardid}})
         },
         getdata(){
                this.cardid = this.$route.query.cardid
                this.$http({
						method:'post',
                        url:"/api/list",
                        data: {
                            b: this.$route.query.cardid,
                            s: '',
                            e: ''
                        },
					}).then((res)=>{
                         if(res){
                             this.infodata = res.data.data;
                             for(var i in res.data.data.bank){
                                 if(this.$route.query.cardid == res.data.data.bank[i].id){
                                     this.infoobj = res.data.data.bank[i]
                                 }
                             }
                            //  var arr = []
                            //  for(var i in res.data.data.list){
                            //       arr.push(res.data.data.list[i]);
                            //       console.log(arr)
                            //  }
                             this.ldata = res.data.data.list
                         }
                    })
         }
    },
    mounted:function(){
        this.getdata()
    }
}
</script>