import './common/js/Router.js'
import {PageRouter} from './routers/PageRouter'

PageRouter.forEach(function(element) {
    iRouters.map(element.router, function (transition) {
        iRouters.asyncFun(element.context, transition)
    })  
}, this);

iRouters.init()