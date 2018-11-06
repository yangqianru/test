import {accordionItem}  from '../../../static/js/constant'
import './accordion.less'

//手风琴模块
export const getAccordion = () =>{
	let accordionHtml = "";
	for(let i=0; i<4; i++){
		accordionHtml+=`<div id='accordion_item${i}' class='accordion_item_div'>${getAccordionItem(accordionItem[i].iconClass,accordionItem[i].text)}</div>`;
	}
	accordionHtml += `<div id="history" class='history'>History</div>`
	return accordionHtml;
}

//手风琴条目
export const getAccordionItem = (iconClass,text) =>{
	let accordionHtml = `<div id='${iconClass}' class = 'accordion_item ${iconClass}'"}> ${text}</div>`;
	return accordionHtml;
}

//设置点击事件监听
export const setItemClickListener = () =>{
    for(let i=0; i<4; i++){
        document.getElementById(accordionItem[i].iconClass).onclick = onItemClick;
	}
}

//点击事件处理
export const onItemClick = (e) =>{
    switch (e.target.id){
        case accordionItem[0].iconClass:
           alert('click the button dashboard');
           break;
        case accordionItem[1].iconClass:
           alert('click the button dashboard');
           break;
        default:
            alert('no para');
            break;
    }
}