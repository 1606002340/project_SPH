import Vue from 'vue'
import App from './App.vue'
import router from "@/router";

//注册仓库功能
import store from './store';
Vue.config.productionTip = false

// 三级联动的组件
import TypeNav from "@/components/TypeNav";
// 第一个参数:全局组件的名字  第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)


new Vue({
  render: h => h(App),
  //注册路由：底下的写法KV一致省略V【router小写的】
  // 注册路由信息：当这里书写router的时候，
  router,
   //下面的代码作用:给项目添加仓库功能,主要的作用是给全部VC拥有一个$store属性
  store,
}).$mount('#app')
