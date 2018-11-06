import './showcontext.less'
import showcontext from './showcontext.html'
import {creatElements} from '../../common/js/util'
import tableItem from './tableitem.html'

//主体内容
export const getShowContext = () =>{
    return showcontext;
}

export const setTableData = (data) =>{
    let listTable = document.getElementById(show_list_table);
    data.map((index,element) => {
        creatElements({
            parentId:'show_list_table',
            ele:'div',
            id:'list_item'+index,
            className:'list_item',
            html:tableItem
        });
    });
}