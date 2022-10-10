<template>
    <!-- 商品分类导航 -->
        <div class="type-nav">
            <div class="container">
                <h2 class="all" @mouseenter="changeShow">全部商品分类</h2>
                <!-- 过渡动画 -->
                <transition name="sort">
                                <!-- 三级联动 -->
                <div class="sort"  @mouseleave="leaveHandler" v-show="show">
                    <div class="all-sort-list2" @click="goSearch">
                        <div class="item" v-for="(c1,index) in categoryList" 
                        :key="c1.categoryId" :class="{cur:currentIndex==index}">
                            <h3 @mouseenter="changeIndex(index)">
                                <a 
                                :data-categoryName="c1.categoryName" 
                                :data-category1Id="c1.categoryId"
                                >{{c1.categoryName}}</a>
                                <!-- 下面这种会出现卡顿的现象 -->
                                <!-- <router-link to="/search">{{c1.categoryName}}</router-link> -->
                            </h3>
                            <!-- 二级，三级分类 -->
                            <div class="item-list clearfix" :style="{display:currentIndex==index?'block':'none'}">
                                <div class="subitem" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
                                    <dl class="fore">
                                        <dt>
                                            <a 
                                            :data-categoryName="c2.categoryName" 
                                            :data-category2Id="c2.categoryId"
                                            >{{c2.categoryName}}</a>
                                            <!-- <router-link to="/search">{{c2.categoryName}}</router-link> -->
                                        </dt>
                                        <dd>
                                            <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                                                <a 
                                                :data-categoryName="c3.categoryName" 
                                                :data-category3Id="c3.categoryId"
                                                >{{c3.categoryName}}</a>
                                                <!-- <router-link to="/search">{{c3.categoryName}}</router-link> -->
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </transition>
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>

            </div>
        </div>
</template>

<script>
import {mapState} from 'vuex'
// 是吧lodash全部的功能都引入了
// 最好的是按需加载

import throttle from 'lodash/throttle'
export default {
    name:'TypeNav',
    data() {
        return {
            // 存储用户鼠标移上哪一个上面
            currentIndex:-1,
            show:true
        }
    },
    // 组件挂在完毕，可以向服务器发请求
    mounted() {
        // this.$store.dispatch('categoryList');
        // 如果不是Home组件，将typeNav进行隐藏
        if(this.$route.path != "/home"){
            this.show = false;
        }
        
    },
    computed:{
        ...mapState({
            // 右侧需要的是一个函数，当使用这个计算属性的时候，右侧函数会立即执行
            // 注入一个参数state ,其实即为大仓库的数据
            categoryList:state=>state.home.categoryList
        })
    },
    methods: {
        // 鼠标进入修改响应式数据currentIndex的属性
        // changeIndex(index){
        //     this.currentIndex=index;
        // },
        // throttle回调函数 别使用箭头函数，可能会出现上下文this
        changeIndex:throttle(function(index){
            this.currentIndex=index;
        },50),
        //鼠标移出事件
        leaveHandler() {
        //鼠标移出高亮的效果消失
            this.currentIndex = -1;
            //鼠标离开:在search路由下,在修改数据
            if (this.$route.path != "/home") {
                this.show = false;
            }
        },
        //全部商品分类鼠标进入
        changeShow() {
            //鼠标进入:在search路由下,在修改数据
            if (this.$route.path != "/home") {
            this.show = true;
        }
    },
        goSearch(){
            // 最好的解决方式就是编程式导航+事件的委派
            // 存在的一些问题：是吧全部的子节点【h3,dt...】的事件委派给父亲节点
            // 另一个 怎么区分 第一级 还是第二级 
            let element=event.target;
            let {categoryname,category1id,category2id,category3id}=element.dataset
            if(categoryname){
                // 整理路由跳转的参数
                let location={name:'search'};
                let query={categoryName:categoryname};
                if(category1id){
                    query.category1Id=category1id
                }else if(category2id){
                    query.category2Id=category2id
                }else{
                    query.category3Id=category3id
                }
                // 判断 如果路由有params参数，捎带传递过去
                //点击商品分类按钮的时候,如果路径当中携带params参数,需要合并携带给search模块
                if (this.$route.params) {
                    location.params = this.$route.params;
                    location.query=query
                    this.$router.push(location)
                }
            }

        }
    },
}
</script>

<style scoped lang='less'>
    .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        &:hover {
                            .item-list {
                                display: block;
                            }
                        }
                    }
                    .cur{
                        background-color: skyblue;
                    }
                }
            }

            /*过渡动画:商品分类 进入阶段*/
            .sort-enter {
                height: 0px;
            }

            .sort-enter-active {
                transition: all 0.3s;
            }
            .sort-enter-to {
                height: 461px;
            }
        }
    }
</style>