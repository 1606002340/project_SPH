//引入路由组件
// import Home from '@/pages/Home'
// import Login from '@/pages/Login'
// import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/detail';
import AddCartSuccess from '@/pages/addCartSuccess'
import ShopCart from '@/pages/shopCart'
import Trade from '@/pages/trade';
import Pay from '@/pages/pay'
import PaySuccess from '@/pages/paySuccess';
import Center from '@/pages/center'

//个人中心的二级路由组件
import MyOrder from '@/pages/center/myOrder';
import TeamOrder from '@/pages/center/teamOrder'
// 路由懒加载
// 当打包构建应用的时候，js包会非常的大，影响页面的加载速度
// 如果我们 能把不同的路由对应的组件分割成不同代码块，然后当路由访问的时候才去加载他们，这样就更加的高效了

export default [
    {
        path:"/home",
        component:()=>import('@/pages/Home'),
        meta:{show:true}
    },
    {
        path:"/login",
        component:()=>import('@/pages/Login'),
        meta:{show:false}
    },
    {
        path:"/register",
        component:()=>import('@/pages/Register'),
        meta:{show:false}
    },
    {
        path:"/search/:keyword?",
        component:Search,
        meta:{show:true},
        name:"search",
        // props:($route)=>({
        //     keyword:$route.params.keyword,
        //     k:$route.query.k
        // })
    },
    // 重定向 在项目跑起来的时候，访问/，立马让他定向在首页
    //重定向到首页
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/detail/:skuId?',
        component: Detail,
        //路由元信息,控制当前路由是否需要Footer组件
        meta: { show: true },
    },
    {
        path: '/addcartsuccess',
        component: AddCartSuccess,
        //路由元信息,控制当前路由是否需要Footer组件
        meta: { show: true },
    },
    {
        path: '/shopcart',
        component: ShopCart,
        meta: { show: true }
    },
    {
        path: '/trade',
        component: Trade,
        meta: { show: true }
    },
    {
        path: '/pay',
        component: Pay,
        meta: { show: true }
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        meta: { show: true }
    }
    ,
    {
        path: '/center',
        component: Center,
        meta: { show: true },
        //二级路由配置的地方
        children:[
             //我的订单
            {
                path:'myorder',
                component:MyOrder
            }
            ,
            {
                path:'teamorder',
                component:TeamOrder
            }
            ,
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },


    {
        path: '/communication',
        component: () => import('@/pages/Communication/Communication'),
        children: [
        {
            path: 'event',
            component: () => import('@/pages/Communication/EventTest/EventTest'),
            meta: {
            show: false
            },
        },
        {
            path: 'model',
            component: () => import('@/pages/Communication/ModelTest/ModelTest'),
            meta: {
                show: false
            },
        },
        {
            path: 'sync',
            component: () => import('@/pages/Communication/SyncTest/SyncTest'),
            meta: {
                show: false
            },
        },
        {
            path: 'attrs-listeners',
            component: () => import('@/pages/Communication/AttrsListenersTest/AttrsListenersTest'),
            meta: {
                show: false
            },
        },
        {
            path: 'children-parent',
            component: () => import('@/pages/Communication/ChildrenParentTest/ChildrenParentTest'),
            meta: {
                show: false
            },
        },
        {
            path: 'scope-slot',
            component: () => import('@/pages/Communication/ScopeSlotTest/ScopeSlotTest'),
            meta: {
                show: false
            },
        }
        ],
    },
]