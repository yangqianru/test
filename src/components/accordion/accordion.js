//手风琴模块
export const getAccordion = () =>{
	let accordionHtml = "";
	for(let i=0; i<4; i++){
		accordionHtml+=`<div id='accordion_item${i}' class='accordion_item${i}'>${getAccordionItem("icon","text")}</div>`;
	}
	accordionHtml += `<div id="history" class='history'>History</div>`
	return accordionHtml;
}

//手风琴条目
export const getAccordionItem = (icon,text) =>{
	let accordionHtml = "icon text";
	return accordionHtml;
}