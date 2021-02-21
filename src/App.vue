
<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue';
export default {
  name: 'app',
  components : {FooterGuide}//注册组件，不然不能使用
}
</script>

<style lang="stylus">
  
</style>

