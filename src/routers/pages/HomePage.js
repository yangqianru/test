import {creatElements} from '../../common/js/util'
import {getAccordion, setItemClickListener,getHistory} from '../../components/accordion/accordion'
import {getShowContext, setTableData} from '../../components/showcontext/showcontext';
import header from '../../components/header/header.html';

let footerHtml = `<div>© Copyright 2018 <b>Thought</b>Works</div>`;

export const I_RESOLVE_INIT = (transition) => { 
	creatElements({
		parentId:'app',
		html:header
	});

	creatElements({
		parentId:'app',
		ele:'body',
		id:'body',
		className:'body',
		html:getBodyHtml()
	});

	creatElements({
		parentId:'app',
		ele:'footer',
		id:'footer',
		className:'footer',
		html:footerHtml
	});

	setTableData([1,2,3,4,5,6]);
	getHistory();
	addEventListeners();
}

const getBodyHtml = () =>{
	return `<div id= 'accordion' class='accordion'>${getAccordion()}</div><div class='context'><div><div id='show_context' class='show_context'>${getShowContext()}</div></div></div>`
}

const addEventListeners = () =>{
	setItemClickListener();
}
