
<template>
  <div id="3333">
    <router-view></router-view>
    <FooterGuide/>
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

