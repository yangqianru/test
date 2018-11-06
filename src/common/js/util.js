//通用方法
export const creatElements=(parentId, ele,id,html,className)=>{
	let parent = document.getElementById(parentId);
	let element;
	if(!document.getElementById(id)){
		element = document.createElement(ele);
		element.setAttribute("id",id);
		if(className){
			element.setAttribute("class",className);
		}else{
			element.setAttribute("class",id);
		}
	}else{
		element = document.getElementById(id);
		element.innerHTML = '';
	}
	element.insertAdjacentHTML('beforeend',html)
	parent.append(element);
	return element;
}

export const creatEle=(parentId,id,html)=>{
	let parent = document.getElementById(parentId);
	let element = document.getElementById(id);
	if(element){
		element.innerHTML = '';
	}
	parent.insertAdjacentHTML('beforeend',html)
	return element;
}