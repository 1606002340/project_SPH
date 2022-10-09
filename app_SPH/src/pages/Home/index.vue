<template>
    <div>
        <!-- 三级联动全局组件 ：已经注册为全局组件，直接使用-->
        <TypeNav></TypeNav>


        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <!-- <Floor v-for="(floor,index) in floorList" :key="floor.id" :floor="floor"></Floor> -->
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