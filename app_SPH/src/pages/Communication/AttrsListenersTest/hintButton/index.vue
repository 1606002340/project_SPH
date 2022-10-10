<template>
  <div>
      <!-- 将父组件传递过来的属性一次性全部绑定,就不用一个一个绑定了,不能简写冒号 -->
      <!-- 可以巧妙的使用a标签，实现按钮的提示功能 -->
      <a :title="tip">
        <!-- 不能用冒号代替    v-on也不能用@字符代替 -->
          <el-button  v-bind="$attrs" v-on="$listeners"></el-button>
      </a>
  </div>
</template>

<script>
export default {
  name: 'hintButton',
  props:['tip'],
  mounted(){
    //$attrs,是VC的一个属性,可以接受父组件传递过来的数据【props】，
    //如果子组件利用props接受,$attrs就不能获取相应的数据了。
    console.log(this.$attrs);
    // 他也是组件实例自身的属性，它可以获取到子组件传递自定义事件
    console.log(this.$listeners);
  }

}
</script>

<style scoped>

</style>
