import {hideDialog} from '../../common/js/util';

//cancle
const handleCancel=(dialogId)=>{
    hideDialog(dialogId);
}

//confirm
const handleConfirm=(dialogId,...params)=>{
    hideDialog(dialogId);
}

// 通过事件委托，监听弹框内的确认、取消事件
export const setBtnListener = () =>{
    let btnEle = document.getElementById('addDialog');
    btnEle.addEventListener('click',(ev)=>{
        let target = ev.target;
        while(target != btnEle){
            if(target.id == 'close' ||target.id == 'cancel'){
                handleCancel('addDialog');
                break;
            }
            if(target.id == 'confirm'){
                handleCancel('addDialog');
                break;
            }
            target = target.parentNode;
        }
    })
}