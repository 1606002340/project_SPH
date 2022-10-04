//home模块专享的小仓库
import {reqCategory} from '@/api'

//仓库存储数据的地方
let state = {
    // state中默认的初始值不要瞎写，服务器返回的对象，服务器返回数字【根据接口的返回值进行初始化】
    categoryList:[]
};
//唯一可以修改仓库数据地方【工人】
let mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList;

    }
};
//可以处理业务逻辑【if、异步语句等等】
let actions = {
    async categoryList({commit}){
        let result = await reqCategory();
        if(result.code==200){
            commit("CATEGORYLIST",result.data);
        }
    }

};  
//仓库计算属性
let getters = {};

//对外暴露小仓库
export default {
    state,
    mutations,
    actions,
    getters
}
