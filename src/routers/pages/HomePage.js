let footerHtml = `<div class='footer'>© Copyright 2017 <b>Thought</b>Works</div>`;
let headerHtml = `<div>顶部</div>`;

export const I_RESOLVE_INIT = (transition) => { 
	creatElements("header","header",headerHtml);

	creatElements("body","body",getBodyHtml());

	creatElements("footer","footer",footerHtml);
}

const getBodyHtml = () =>{
	return "<p>我和他也</p>"
}

const creatElements=(ele,id,html)=>{
	let app = document.getElementById('app');
	let element;
	if(!document.getElementById(id)){
		element = document.createElement(ele);
		element.setAttribute("id",id);
	}else{
		element = document.getElementById(id);
		element.innerHTML = '';
	}
	element.insertAdjacentHTML('beforeend',html)
	app.append(element);
	return element;
}