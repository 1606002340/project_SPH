<template>
    <div>
        <!-- 三级联动全局组件 ：已经注册为全局组件，直接使用-->
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like  ref="like"></Like>
        <!-- 
        Floor标签,通过v-for动态生成
        父子组件通信:props
        问题:VC[Home]身上的floorList这个属性的属性值有几种情况?
        仓库floorList:起始值 空数组
        仓库floorList:不是空数组,代表服务器数据回来了。v-for渲染子组件完毕。给组件的props,就是两个对象
    -->
        <Floor v-for="(floor,index) in floorList" :key="floor.id" :floor="floor"></Floor>
        <Brand></Brand>
    </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "./Brand";

import { mapState } from "vuex";
export default {
    // 引用其他的组件
    components:{
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand
    },
      //组件挂载完毕钩子
    mounted() {
        this.$store.dispatch("getFloorList");
        this.$store.dispatch("getUserInfo");
    },
    computed:{
        ...mapState({
            floorList: (state) => state.home.floorList,
    }),
    }
}
</script>

<style>

</style>