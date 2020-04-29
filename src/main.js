import Vue from 'vue'
import App from './App.vue'
import router from './router'
import rem from './assets/js/rem'
import axios from 'axios'
import $ from 'jquery';
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/css/g.css'
import Swiper from 'swiper'
Vue.use(Vant);
import { Dialog,Toast } from 'vant';
var env = process.env.NODE_ENV;
if(env == "production"){
  axios.defaults.baseURL ='http://43.242.75.65';
}else{
  axios.defaults.baseURL ='http://43.242.75.65';
}

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.common['clientid'] = 'testclient';
axios.defaults.transformRequest = [function (data) {
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
}]
// axios.interceptors.request.use(
//       config => {
//         let token = localStorage.getItem("token");
//         if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
//           config.headers.token = token;
//         }
//         return config;
//       },
//       err => {
//         console.log(err)
//         return Promise.reject(err);
//       });
 axios.interceptors.response.use(
   response => {
     if (response.data.code=="-1"){
      if(response.data.msg == "账号已被锁定，请联系管理员！"){
          Dialog.alert({
                      title: '',
                      message: "登录失败！请联系管理员！"
          })
          return 1
      }
      return false
     }else if(response.data.code == "-301"){
        
        
     }else if(response.data.code == "-100"){
        return 2
     }else if(response.data.code == "-44"){
        return 44
     }else{
         return response;
     }
   },
   error => {
   	 console.log(error.response)
     return Promise.reject(error.response)   // 返回接口返回的错误信息
   });


Vue.prototype.$http = axios
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app') 
document.addEventListener("plusready",plusReady,false); 
function plusReady(){
	plus.navigator.setStatusBarBackground("#09b6f2");
} 
