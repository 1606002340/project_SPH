//统一管理项目前部的API接口
// 三级联动的接口
import requests from "@/api/request";

//封装函数:复用
//将来这个函数可以在别的地方使用,需要对外暴露【分别暴露】
//获取商品分类的数据
export const reqCategory = () => {
    //箭头函数可以在程序任意地方使用,箭头函数返回即为服务器的数据
    //下面箭头函数返回值：返回的是什么? promise,即为返回服务器的数据
    //return关键字，千万别忘记书写，如果忘记书写，你在任意地方获取的都是undeinfed
    //返回的是primise对象
    return requests({ method: 'get', url: '/product/getBaseCategoryList' });
}