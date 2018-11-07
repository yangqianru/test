import {hideDialog} from '../../common/js/util';
import {addEnv} from '../../components/showcontext/showcontext.js';

//cancle
const handleCancel=(dialogId)=>{
    hideDialog(dialogId);
}

//confirm
const handleConfirm=(dialogId,...params)=>{
    addEnv(params[0],params[1]);
    hideDialog(dialogId);
}

// 通过事件委托，监听弹框内的确认、取消事件
export const setBtnListener = () =>{
    let btnEle = document.getElementById('addDialog');
    btnEle.addEventListener('click',(ev)=>{
        let ip = btnEle.getAttribute('ip');
        let target = ev.target;
        console.log(ip)
        while(target != btnEle){
            if(target.id == 'close' ||target.id == 'cancel'){
                handleCancel('addDialog');
                break;
            }
            if(target.id == 'confirm'){
                let envStr = document.getElementById('input').value;
                handleConfirm('addDialog',envStr,ip);
                break;
            }
            target = target.parentNode;
        }
    })
}