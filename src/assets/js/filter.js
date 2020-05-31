import Vue from 'vue'
Vue.filter('formatitme', function(val) {
    console.log(val)
    var date = new Date(val * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate()<10 ? '0'+ date.getDate(): date.getDate();
    // var h = date.getHours() + ':';
    // var m = date.getMinutes() + ':';
    // var s = date.getSeconds();
    return Y+M+D;
})

Vue.filter('formatname', function(vals) {
    console.log(vals)
    var arrys = vals.split('');
    console.log(arrys)
    arrys[0]="*"
    return arrys.join('')
})

Vue.filter('formatnumber', function(vals) {
    var arrys = vals.split('');
    console.log(arrys)
    if(arrys.length > 5){
        arrys[3]=" *"
        arrys[4]="*"
        arrys[5]="*"
        arrys[6]="* "
    }
    
    return arrys.join('')
})
Vue.filter('formatcard', function(vals) {
    var q = vals.substring(0,3);
    var h = vals.substring(vals.length-4);
    return q+'****'+h
})
Vue.filter('formatlast', function(vals) {
    if(vals){
        var h = vals.substring(vals.length-4);
    }
    return h
})