<template>
  <div id="app">
    <Header/>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home,Search显示的，在登录、注册隐藏 -->
    <!-- <Footer v-show="$route.path=='/home'||$route.path=='/search'" /> -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  },
  mounted() {
    //App的根组件挂载完毕,发一次请求即可.
    this.$store.dispatch('categoryList');
    
  }
}
</script>

<style>

</style>
