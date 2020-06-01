<template>
    <div class="so">
        <div class="fixtop">
            <img src="../assets/img/sotop.jpg"/><div class="goback" @click="goback"></div>
            <div class="saixuan"></div>
        </div>
        <div class="tiaojian" v-if="showtj">
            <div class="po">
            <img src="../assets/img/tj.jpg"/>
            </div>
            <img src="../assets/img/buttoms.jpg" class="fixbottom"/>
        </div>
        <div class="solist">
          <div class="yearbox" v-for="(y,key,index) in ldata" :key="key">
                <div class="yearname">
                    <span>{{key|format_year}}年</span>
                    <span v-if="index == 0"><img src="../assets/img/sotext.jpg" style="width:5.3rem"/></span>
                </div>
                <div class="ones" v-if="index == 0"><img src="../assets/img/sones.jpg"/></div>
                <div class="monthbox" v-for="(months,keys) in y" :key="keys" @click=select(key+keys,months)>
                    <div class="month_li">
                        <div :class="op == key+keys? 'm_iconz1':'m_iconz'"></div>
                        <div class="m_month">{{keys|format_year}}月</div>
                        <div class="m_shouru"><span v-if="months.income !=0">+</span>{{months.income}}</div>
                        <div class="m_zhichu">{{months.expend}}</div>
                    </div>
                    <div :class="op == key+keys ? 'everyday':'everyday hide'" v-for="(day,keyday) in months.day" :key="keyday">
                    <div class="happday" v-for="last in day" :key="last.id">
                    <div class="eday_l">
                        <p>{{keyday|format_year}}</p>
                        <p>{{last.week}}</p>
                    </div>
                    <div class="eday_r" >
                        <div class="jiaoyi">
                        <div class="eday_r_l" style="width:3rem">
                            <p>{{last.title}}<span>({{c1}}{{c2|formatlast}})</span></p>
                            <p style="margin-left:0.2rem">{{last.title2}}</p>
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
        </div>
    </div>
</template>
<script>
import f from './../assets/js/filter.js'
import { Toast } from 'vant';
export default {
    data(){
        return{
            ldata:"",
            infodata:"",
            op:"",
            c1:"",
            c2:"",
            showtj:false
        }
    },
    methods:{
        goback(){
             this.$router.go(-1)
         },
         select(e,q){
             if(q.day.length != 0){
                if(e == this.op){
                    this.op =""
                }else{
                    this.op = e
                }
             }else{
                 Toast({
                message: '本月无记录',
                forbidClick: true,
                position:"bottom"
                });
                
             }
             
         },
         getdata(){
             this.c1 = this.$route.query.tit
             this.c2 = this.$route.query.cardno
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