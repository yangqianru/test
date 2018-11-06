/**
 * 在页面插入html标签
 * @method creatElements
 * @parentId 所属父节点Id
 * @ele 插入的html标签
 * @id 插入的html标签的id
 * @className 插入的html标签的className
 * @html 插入创建的html内部的子html字符串
 * 
 * 如果只想插入一段html元素，不涉及创建元素，可以只传：@parentId,@html
 *  */

export const creatElements = ({parentId,ele,id,className,html}) => {
	try {
		let parent = document.getElementById(parentId),element;
		
		if (!document.getElementById(id)){
			if(ele){
				element = document.createElement(ele);
				id && element.setAttribute("id", id);				
				className && element.setAttribute("class", className);
			}
		} else {
			element = document.getElementById(id);
			element.innerHTML = '';
		}
		
		if (html&&element) {
			element.insertAdjacentHTML('beforeend', html)
			parent.append(element);
		}else{
			parent.append(parseDom(html)[0]);
		}
	} catch (error) {
		console.log(error);
	}
}

/**
 * string字符串转DOM
 * @method parseDom
 * @htmlStr html字符串
 * */
export const parseDom=(htmlStr)=>{
	let objElement = document.createElement("div");
	objElement.innerHTML = htmlStr;
	return objElement.childNodes;
}