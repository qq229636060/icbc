<template>
    <div class="so">
        <div class="fixtop">
            <img src="../assets/img/sotop.jpg" v-if="showtj == false"/>
             <img src="../assets/img/sotop1.jpg" v-else/>
            <div class="goback" @click="goback"></div>
            <div class="saixuan" @click="saixuan"></div>
        </div>
        <div class="bg" v-if="showtj"></div>
        <div class="tiaojian" v-if="showtj">
            <div class="po">
            <div class="gz" v-if="showgz"><img src="../assets/img/gz.jpg"/></div>
            <div class="gzbtn" @click="gzbtn"></div>
            <img src="../assets/img/tj.jpg"/>
            <div class="xz" @click="x"></div>
            <div class="xuanzhong" v-if="showbtn"><img src="../assets/img/m.jpg"/></div>
            <div class="ks_time">{{s}}</div>
            <div class="end_time">{{e}}</div>
            </div>
            <img src="../assets/img/buttoms.jpg" class="fixbottom" @click="ok"/>
        </div>
        <div class="solist" v-if="soso">
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
                    <div class="eday_r" style="margin-right:0">
                        <div class="jiaoyi">
                        <div class="eday_r_l" style="width:3rem">
                            <p>{{last.title}}<span>({{c1}}{{c2|formatlast}})</span></p>
                            <p style="margin-left:0.2rem">{{last.title2}}</p>
                        </div>
                        <div :class="parseFloat(last.money) > 0 ? 'eday_r_r':'eday_r_r grenn'" style="margin-right:0.2rem">
                            <span v-if="parseFloat(last.money) > 0">+</span>{{last.money}}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
          
          </div>
        </div>


        <div class="infolist" v-if="!soso" style="margin-top:1.6rem">
            <div class="cc">
                <span style="margin-left:0.3rem; color:#000">当前汇总笔数:{{num}}</span>
                <span class="c1">收:+{{g1}}</span>
                <span class="c2">支:{{g2}}</span>
            </div>
            <div class="yy" v-for="(y,key,i) in ldata" :key="key" >
            <div class="infobox" v-for="(mouth,keys,i1) in y" :key="keys" v-if="mouth.day.length !=0">
                <div class="month">{{key|format_year}}年{{keys|format_year}}月</div>
                  <div class="fuck" v-if="i1 == 1 && i==0 "><img src="../assets/img/fuck.jpg"/></div>
                <div class="everyday" v-for="(day,keyday) in mouth.day" :key="keyday">
                <div class="happday" v-for="last in day" :key="last.id">
                    <div class="eday_l">
                        <p>{{keyday|format_year}}</p>
                        <p>{{last.week}}</p>
                    </div>
                    <div class="eday_r" >
                        <div class="jiaoyi">
                        <div class="eday_r_l">
                            <p style="font-size:0.3rem">{{last.title}}<span style="font-size:.24rem">({{c1}}{{c2|formatlast}})</span></p>
                            <p style="font-size:.24rem">{{last.title2}}</p>
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
            showbtn:false,
            showtj:false,
            showgz:false,
            s:"起始时间",
            e:"结束时间",
            cardid:"",
            k:"",
            soso:true,
            num:"",
            g1:"",
            g2:""
        }
    },
    methods:{
        gzbtn(){
             if(this.showgz){
                 this.showgz = false
                 this.k = ""
             }else{
                  this.showgz = true
                  this.k = "工资"
             }
        },
        ok(){
            this.getdata();
             this.showtj = false;
             this.soso = false
        },
        x(){
            if(this.showbtn){
                this.showbtn = false;
                this.s = "起始时间"
                this.e = "结束时间"
            }else{
                this.showbtn = true;
                this.s = this.getMonths()[11]
                this.e = this.getMonths()[0];
            }
        },
        getMonths() {
            var dataArr = [];
            var data = new Date();
            var year = data.getFullYear();
            data.setMonth(data.getMonth() + 1, 1); //获取到当前月份,设置月份
            for (var i = 0; i < 12; i++) {
                data.setMonth(data.getMonth() - 1); //每次循环一次 月份值减1
                var m = data.getMonth() + 1;
                m = m < 10 ? "0" + m : m;
                dataArr.push(data.getFullYear() + "-" + m + "-" + "1");
            }
            console.log(dataArr);
            return dataArr;
            },
        saixuan(){
            if(this.showtj){
                this.showtj = false
            }else{
                this.showtj = true
            }
        },
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
             this.cardid = this.$route.query.cardid
             this.$http({
						method:'post',
                        url:"/api/list",
                        data: {
                            b: this.cardid,
                            s: this.s == "起始时间" ? '':this.s,
                            e: this.e == "结束时间" ? '':this.e,
                            k: this.k
                        },
					}).then((res)=>{
                         if(res){
                             this.infodata = res.data.data;
                             this.ldata = res.data.data.list;
                             this.num = res.data.data.num
                             this.g1 = res.data.data.income
                             this.g2 = res.data.data.expend
                         }
                    })
         }
    },
    mounted:function(){
        this.getdata()
    }
}
</script>