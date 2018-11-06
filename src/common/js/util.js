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