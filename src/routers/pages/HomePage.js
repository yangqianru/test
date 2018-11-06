import {creatElements,creatEle} from '../../common/js/util'
import {getAccordion, setItemClickListener} from '../../components/accordion/accordion'
import {getShowContext, setTableData} from '../../components/showcontext/showcontext';
import userImg from '../../assets/logo/logo.svg';
import header from '../../components/header/header.html';

let footerHtml = `<div>© Copyright 2018 <b>Thought</b>Works</div>`;
//let headerHtml = `<div class='showAccordingBtn'></div><div class='logo'></div><div class='user'><img src=${userImg}/></div>`;

export const I_RESOLVE_INIT = (transition) => { 
	creatEle("app", "header",header);

	creatElements("app", "body","body",getBodyHtml());

	creatElements("app", "footer","footer",footerHtml);

	setTableData([1,2,3]);
	
	addEventListeners();
}

const getBodyHtml = () =>{
	return `<div id= 'accordion' class='accordion'>${getAccordion()}</div><div id='show_context' class='show_context'>${getShowContext()}</div>`
}

const addEventListeners = () =>{
	setItemClickListener();
}
