import './common/js/Router.js'
import {PageRouter} from './routers/PageRouter'

PageRouter.forEach(function(element) {
    spaRouters.map(element.router, function (transition) {
        spaRouters.asyncFun(element.context, transition)
    })  
}, this);

spaRouters.beforeEach(function (transition) {
    console.log('切换之前dosomething')
    setTimeout(function () {
        //模拟切换之前延迟，比如说做个异步登录信息验证
        transition.next()
    }, 100)
})

spaRouters.afterEach(function (transition) {
    console.log("切换之后dosomething")
})

spaRouters.init()