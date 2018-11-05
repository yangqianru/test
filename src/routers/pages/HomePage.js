
export const I_RESOLVE_INIT = (transition) => { 
	document.getElementById("appContext").innerHTML = getJsContext();
	console.log("首页回调" + JSON.stringify(transition))

	let footerHtml = `<footer class='footer'>© Copyright 2017 <b>Thought</b>Works</footer>`;
	getFooter("appContext",footerHtml);
}

const getJsContext = () =>{
	return "<p>我和他也</p>"
}

const getFooter = (id , footerHtml) =>{
    document.getElementById(id).insertAdjacentHTML('beforeend', footerHtml);
}