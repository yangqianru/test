import {creatElements} from '../../common/js/util'
import {getAccordion, setItemClickListener,getHistory} from '../../components/accordion/accordion'
import {getShowContext,setTableData,setOperEleClickListener} from '../../components/showcontext/showcontext';
import header from '../../components/header/header.html';
import {setAccordingListener} from '../../components/header/header.js';
import {versionDetail} from '../../../static/js/constant';
import dialog from '../../components/dialog/dialog.html';
import {setBtnListener} from '../../components/dialog/dialog.js';



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
	
	setTableData(versionDetail);
	getHistory();

	creatElements({
        parentId:'app',
        html:dialog
	});

	addEventListeners();
}

const getBodyHtml = () =>{
	return `<div id= 'accordion' class='accordion'>${getAccordion()}</div><div id='context' class='context'><div>${getShowContext(versionDetail)}</div></div>`
}

const addEventListeners = () =>{
	setItemClickListener();
	setOperEleClickListener();
	setBtnListener();
	setAccordingListener();
}
