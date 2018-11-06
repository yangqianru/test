import './common/js/Router.js';
import {PageRouter} from './routers/PageRouter';
import '../static/css/common.less';
import './assets/font icons/fonts.css';

PageRouter.forEach(function(element) {
    iRouters.map(element.router, function (transition) {
        iRouters.asyncFun(element.context, transition)
    })  
}, this);

iRouters.init()