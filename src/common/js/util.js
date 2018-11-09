/**
 * 在页面插入html标签
 * @method creatElements
 * @parentId 所属父节点Id
 * @ele 插入的html标签
 * @id 插入的html标签的id
 * @className 插入的html标签的className
 * @html 插入创建的html内部的子html字符串或者html
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

		if(html&&element){
			!isHTMLElement(html) && element.insertAdjacentHTML('beforeend', html);
			isHTMLElement(html) && element.appendChild(html);
			parent.appendChild(element);
		}
		if(html&&!element){
			!isHTMLElement(html) && parent.appendChild(parseDom(html)[0]);
			isHTMLElement(html) && parent.appendChild(html);
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

/**
 * 判断是否为htmlElement元素 */
export const isHTMLElement=(obj)=>{
	let ele = document.createElement("div");
	try {
		ele.appendChild(obj.cloneNode(true));
		return obj.nodeType == 1;
	} catch (error) {
		return false;
	}
}

/**
 * 显示/隐藏弹框
 * @method showDialog hideDialog
 * @parentId 所属父节点Id
 * @left pageX
 * @top pageY
 * #ip 元素ip
 *  */
export const showDialog=(dialogId,left,top,ip)=>{
	let dialogEle = document.getElementById(dialogId),
		coverEle = document.getElementById('cover'),
		clientWidth = document.body.clientWidth;
		if(clientWidth>=1024){
			dialogEle.style.left=left-15+'px';
			dialogEle.style.top=top+42+'px';
		}
		document.getElementById('input').value = '';
		coverEle.classList.add('display');
		dialogEle.setAttribute('open',open);
		dialogEle.setAttribute('ip',ip);
	}
	
export const hideDialog=(dialogId)=>{
	let dialogEle = document.getElementById(dialogId),
		coverEle = document.getElementById('cover');
	coverEle.classList.remove('display');
    dialogEle.removeAttribute('open');
    dialogEle.removeAttribute('ip');
}
