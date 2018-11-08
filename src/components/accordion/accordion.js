import {accordionItem,historyItem}  from '../../../static/js/constant';
import {creatElements,parseDom} from '../../common/js/util';
import './accordion.less'

//手风琴模块
export const getAccordion = () =>{
    let accordionHtml = "";
    for(let item of accordionItem){
        accordionHtml += `<div class ='accordion_item ${item.iconClass}'>${item.text}</div>`;
    }
    accordionHtml += `<span id='hideAccordingBtn' class='hideAccordingBtn icon-close'></span>`
	return accordionHtml;
}

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

// 通过事件委托，监听手风琴点击事件
export const setItemClickListener = () =>{
    let according = document.getElementById('accordion');
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