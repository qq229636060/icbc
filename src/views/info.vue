<template>
    <div class="infos">
         <div class="fixtop"><img src="../assets/img/infotop.jpg"/><div class="goback" @click="goback"></div></div>
    <div class="infoz">
        <img src="../assets/img/infoz.jpg"/>
        <div class="ztext">
            <p><span>{{infoobj.title}}</span><span>尾号{{infoobj.card_no | formatlast}}</span></p>
            <p>{{infoobj.balance}}</p>
        </div>
        <div class="shouru">
            <span>收:+{{infodata.income}}</span>
            <span>支:{{infodata.expend}}</span>
        </div>
    </div>
    <div class="infolist">
        <div class="infobox">
            <div class="month">2020年5月</div>
            <div class="everyday">
                <div class="eday_l">
                    <p>21</p>
                    <p>周四</p>
                </div>
                <div class="eday_r">
                    <div class="jiaoyi">
                    <div class="eday_r_l">
                        <p>贷款还本</p>
                        <p>批量业务</p>
                    </div>
                     <div class="eday_r_r">
                        +2002.00
                     </div>
                    </div>
                      <div class="jiaoyi">
                    <div class="eday_r_l">
                        <p>贷款还本</p>
                        <p>批量业务</p>
                    </div>
                     <div class="eday_r_r">
                        +2002.00
                     </div>
                    </div>
                </div>
            </div>
             <div class="everyday">
                <div class="eday_l">
                    <p>21</p>
                    <p>周四</p>
                </div>
                <div class="eday_r">
                    <div class="jiaoyi">
                    <div class="eday_r_l">
                        <p>贷款还本</p>
                        <p>批量业务</p>
                    </div>
                     <div class="eday_r_r">
                        +2002.00
                     </div>
                    </div>
                      <div class="jiaoyi">
                    <div class="eday_r_l">
                        <p>贷款还本</p>
                        <p>批量业务</p>
                    </div>
                     <div class="eday_r_r">
                        +2002.00
                     </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import f from './../assets/js/filter.js'
export default {
    data(){
        return{
            infodata:"",
            infoobj:""
        }
    },
     methods:{
         goback(){
             this.$router.go(-1)
         },
         getdata(){
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
                         }
                    })
         }
    },
    mounted:function(){
        this.getdata()
    }
}
</script>