import {creatElements} from '../../common/js/util'
import {getAccordion} from '../../components/accordion/accordion'

let footerHtml = `<div>© Copyright 2018 <b>Thought</b>Works</div>`;
let headerHtml = `<div>顶部</div>`;

export const I_RESOLVE_INIT = (transition) => { 
	creatElements("app", "header","header",headerHtml);

	creatElements("app", "body","body",getBodyHtml());

	creatElements("app", "footer","footer",footerHtml);
}

const getBodyHtml = () =>{
	return `<div id= 'accordion' class='accordion'>${getAccordion()}</div><div class='showlist'>展示控件</div>`
}

