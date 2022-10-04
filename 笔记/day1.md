1:vue-cli脚手架初始化项目
node + webpack + 淘宝镜像

node_modules文件夹：项目依赖文件夹
public文件夹：一般放置一些静态资源（图片），需要注意，放在public文件夹中的静态资源，webpack进行打包的时候
会原封不动打包到disk文件夹中

src文件夹（程序源代码文件夹）：
    assets:一般放置的是静态资源（一般放置的是组件共用的静态资源），需要注意，放置在assets文件夹里面的静态资源
        ，在webpack打包的时候，webpack会把静态资源当做一个模块，打包在js文件中
    components文件夹:一般放置的是非路由组件（全局组件）
    App.vue:唯一的根组件，Vue当中的组件（.vue）
    main.js:程序的入口文件，也是整个程序中最先执行的文件

babel.config,js:配置文件（babel相关）
package.json文件:认为项目的“身份证”，记录项目叫什么，项目中有哪些依赖，项目怎么运行
package-lock.json:缓存性文件

README.md:说明性文件
2：项目的其他配置
2.1：项目运行起来的时候，让浏览器自动打开
---在package.json文件中
​        "scripts": {
​         "serve": "vue-cli-service serve --open",
​          "build": "vue-cli-service build",
​          "lint": "vue-cli-service lint"
​        },


2.2 eslint检验工具的关闭
---在根目录下，
创建vue.config.js文件：需要对外暴露
module.exports = {
   lintOnSave:false,
}

2.3 src文件夹简写方法，配置别名
因为项目大的时候src（源代码文件夹）：里面目录会很多，找文件不方便，设置src文件夹的别名的好处，找文件会方便一些
创建jsconfig.json文件
{
    "compilerOptions": {
        "baseUrl": "./",
        "paths": {
            "@/*": [
                "src/*"
            ]
        }
    },
    "exclude": [
        "node_modules",
        "dist"
    ]
}

3.项目路由的分析
vue-router
前端所谓的路由：kv键值对
key:URL（地址栏中的路径）
value:相应的路由组件
注意：项目为上中下结构

路由组件：
Home首页路由组件，Search路由组件、login登录路由、Refidter注册路由
非路由组件：
Header、【首页、搜索页】
Footer【在首页、搜索页】。但是在登录页是没有的

4.创建非路由组件header和footer
主要写业务和逻辑
在项目的开发过程中：
1.书写静态页面（html+css）
2.拆分组件
3.获取服务器相应的数据动态显示
4.完成相应的动态业务逻辑

注意1：创建组件的时候，组件结构+组件的样式+图片资源
注意2：安装less 5 版本（有问题再安装）

4.1使用组件的步骤（非路由组件）
-创建或者定义组件
-引入
-注册
-使用

5.路由组件的搭建
vue-router
在上面的分析的时候，路由组件应该有四个：Home,Search,Login,Register
-components文件夹：经常放置的非路由组件（共用的路由组件）
-pages|views文件夹：经常放置路由组件
5.1配置路由 
项目中配置的路由一般放在router文件夹中

5.2
总结
路由组件与非路由组件的区别？
1.路由组件一般放在pages|views文件夹中，非路由组件一般放置在compoents文件夹中

2.路由组件一般需要router文件夹中进行注册（使用的即为组件的名字）。非路由组件在使用的时候，一般都是以标签的形式使用

3.注册玩路由，不管路由路由组件。还是非路由组件身上都有$route，$router属性


$route:一般是获取路由信息【路径，query,params等等】
$router:一般进行编程式导航进行路由跳转【push|replace(区别能不能进入历史记录)】

5.3路由的跳转
路由的跳转有两种形式：
声明式导航router-link,可以进行路由的跳转
编程式导航push|replace，可以进行路由跳转

编程式导航：声明式导航能做的，编程式导航都能做
但是编程式导航除了可以进行路由跳转，还可以做一些其他的业务逻辑

6.Footer组件的显示和隐藏
显示和隐藏组件：v-if|v-show
Footer组件：在Home,Search显示Footer组件
Footer组件：在登录，注册时候是隐藏的

6.1我们可以根据组件身上的$route获取当前路由的信息，通过路由的路径判断Footer显示和隐藏。
6.2配置的路由的时候，可以给路由添加路由元信息【mate】，路由需要配置对象，它的key不能乱写

7)路由的跳转
路由的跳转就两种形式：声明式导航（router-link：务必要有to属性）
                    编程式导航push||replace
编程式导航更好用：因为可以书写自己的业务逻辑

8.路由传参


9.路由传参的相关面试题
    1：路由传递参数（对象写法）path是否可以结合params参数一起使用？
        路由跳转传参的时候，对象的写法可以是name,path形式，但是需要注意的是，path这种写法不能与params参数一起使用的
        （不可以：不能这样书写，程序会崩掉）
    2：如何指定params参数可传可不传? 
        如果路由要求传递params参数，但是不传的话，URL会有问题
        如何指定params参数，或者不传递，在配置路由的时候，在指定路由路径的时候要在后面加上一个？
        路径会出现问题
        http://127.0.0.1:8080/#/?k=ASDAS
        http://127.0.0.1:8080/#/search/asdas?k=ASDAS
    3：params参数可以传递也可以不传递，但是如果传递是空串，如何解决？
        使用undifined解决，params参数可以传递，也可以不传递（空字符串）
        如果指定name与params配置, 但params中数据是一个"", 无法跳转，路径会出问题
    4：路由组件能不能传递props数据?
        是可以的
        布尔值写法：params
        对象写法：props:{a:1,b:2}

        函数写法：可以params参数，query参数，通过props传递给路由组件

