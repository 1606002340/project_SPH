<template>
    <div>
        <!-- 三级联动全局组件 ：已经注册为全局组件，直接使用-->
        <TypeNav></TypeNav>


        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <Floor></Floor>
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
    computed:{
        ...mapState(['count'])
    }
}
</script>

<style>

</style>