import Vue from 'vue'
import App from './App.vue'
import router from "@/router";

//注册仓库功能
import store from './store';
Vue.config.productionTip = false

// 三级联动的组件
import TypeNav from "@/components/TypeNav";

import Pagination from '@/components/pagination';
// 第一个参数:全局组件的名字  第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)

Vue.component(Pagination.name, Pagination)
//引入mockServe文件,让咱们模拟接口跑起来
import "@/mock/mockServe.js";




//按需引入
import { Button, Row, Col, MessageBox,Message,Input} from 'element-ui';
//element-ui大多数组件，注册为全局组件Vue.component|Vue.use
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Input)
//按需引入写法不同的:MessageBox、Message、Loading、Notification
Vue.prototype.$msgbox = MessageBox;
//消息提示框
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;


// import VueLazyload from 'vue-lazyload'

//将项目全部请求函数引入进来[分别暴露]
// 统一引入
import  * as http from '@/api';
console.log(http);
new Vue({
  //配置全局事件总线
  beforeCreate() {
    //配置全局事件总线
    Vue.prototype.$bus = this;
    //通过Vue.prototype原型对象,将全部请求函数挂载到原型对象身上[VC:就可以使用请求函数]
    Vue.prototype.$http = http;
  },
  render: h => h(App),
  //注册路由：底下的写法KV一致省略V【router小写的】
  // 注册路由信息：当这里书写router的时候，
  router,
   //下面的代码作用:给项目添加仓库功能,主要的作用是给全部VC拥有一个$store属性
  store,
}).$mount('#app')
