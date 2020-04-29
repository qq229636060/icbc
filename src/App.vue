<template>
  <div id="app">
  	<transition :name="transitionName">
  	<router-view class="child-view"></router-view>
  	</transition>
  </div>
</template>
<script type="text/javascript">
export default { 
　　data() {
　　　　return {
　　　　　　transitionName: 'slide-right'// 默认动态路由变化为slide-right
　　　　}
　　},
	mounted () {
      //this.selected = this.$route.name
    },
　　watch: {
		'$route' (to, from) {
		    const toDepth = to.path.split('/').length;
		    const fromDepth = from.path.split('/').length;
		    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
		  }
	
　  }
　}
</script>


