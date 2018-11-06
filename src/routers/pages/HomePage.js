import {creatElements} from '../../common/js/util'
import {getAccordion, setItemClickListener} from '../../components/accordion/accordion'
import userImg from '../../assets/logo/logo.svg';

let footerHtml = `<div>© Copyright 2018 <b>Thought</b>Works</div>`;
let headerHtml = `<div class='logo'></div><div class='user'><img src=${userImg}/></div>`;

export const I_RESOLVE_INIT = (transition) => { 
	creatElements("app", "header","header",headerHtml);

	creatElements("app", "body","body",getBodyHtml());

	creatElements("app", "footer","footer",footerHtml);

	addEventListeners();
}

const getBodyHtml = () =>{
	return `<div id= 'accordion' class='accordion'>${getAccordion()}</div><div class='show_context'>展示控件</div>`
}

const addEventListeners = () =>{
	setItemClickListener();
}
