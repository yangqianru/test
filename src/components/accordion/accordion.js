import {accordionItem,historyItem}  from '../../../static/js/constant';
import {creatElements,parseDom} from '../../common/js/util';
import './accordion.less'

//手风琴模块
export const getAccordion = () =>{
    let accordionHtml = ""; 
    let route = location.hash;
    for(let item of accordionItem){
        if(route.toLowerCase().indexOf(item.text.toLowerCase())>=0){
            accordionHtml += `<div class ='accordion_item ${item.iconClass} accordion_item_active'>${item.text}</div>`;
        }else{
            accordionHtml += `<div class ='accordion_item ${item.iconClass}'>${item.text}</div>`;
        }
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
                let allNodes = target.parentNode.childNodes;
                for(let item of allNodes){
                    let classLists = item.classList;
                    classLists.contains('accordion_item_active')&&classLists.remove('accordion_item_active');
                }
                target.classList.add('accordion_item_active');
                break;
            }
            target = target.parentNode;
        }
    })
}