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
        creatElements('show_list_table','div','list_item'+index,tableItem, 'list_item');
    });
}