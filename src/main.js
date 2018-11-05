import './common/js/Router.js';
import {PageRouter} from './routers/PageRouter';
import '../static/css/common.less';

PageRouter.forEach(function(element) {
    iRouters.map(element.router, function (transition) {
        iRouters.asyncFun(element.context, transition)
    })  
}, this);

iRouters.init()