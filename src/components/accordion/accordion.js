import {accordionItem,historyItem}  from '../../../static/js/constant';
import {creatElements,parseDom} from '../../common/js/util';
import './accordion.less'

//手风琴模块
export const getAccordion = () =>{
    let accordionHtml = "";
    for(let item of accordionItem){
        console.log(item);
        accordionHtml += `<div class ='accordion_item ${item.iconClass}'>${item.text}</div>`;
    }
	return accordionHtml;
}

//history

//history
export const getHistory = () =>{
    let historyHtml = `<p>History</p>`;
    for(let item of historyItem){
        historyHtml += `<li title=${item}>${item}</li>`;
    }
	creatElements({
        parentId:'accordion',
        ele:'ul',
        id:'history',
        className:'history',
        html:historyHtml
    });
}

//手风琴条目
// export const getAccordionItem = (iconClass,text) =>{
// 	let accordionHtml = `<div id='${iconClass}' class = 'accordion_item ${iconClass}'"}> ${text}</div>`;
// 	return accordionHtml;
// }

// 通过事件委托，监听手风琴点击事件
export const setItemClickListener = () =>{
    var according = document.getElementById('accordion');
    according.addEventListener('click',(ev)=>{
        let target = ev.target;
        while(target != according){
            if(target.classList.contains('accordion_item')){
                console.log(target.classList);
                break;
            }
            target = target.parentNode;
        }
    })
}

//点击事件处理
// export const onItemClick = (e) =>{
//     switch (e.target.id){
//         case accordionItem[0].iconClass:
//            alert('click the button dashboard');
//            break;
//         case accordionItem[1].iconClass:
//            alert('click the button dashboard');
//            break;
//         default:
//             alert('no para');
//             break;
//     }
// }