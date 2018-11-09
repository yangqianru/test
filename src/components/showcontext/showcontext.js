import './showcontext.less';
import showcontext from './showcontext.html';
import { creatElements, parseDom, showDialog } from '../../common/js/util';
import tableItem from './tableitem.html';
import {addEnvToLocal, deleteEnvFromLocal} from './operation'

//主体内容
export const getShowContext = (data) => {
    return showcontext;
}

export const setTableData = (data) => {

    let buildingNum=0,idleNum=0,physcalNum=0,virtualNum=0,sumNum=data.length;

    for (const item of data) {
         //type:0--physical,1-virtual;
         item.type == 0?physcalNum++:virtualNum++;
 
         //badge:idle/building
         item.badge == 'idle'?buildingNum++:idleNum++;
 
        let tableEle = parseDom(tableItem)[0];
        tableEle.getElementsByClassName('item_info_top_link')[0].innerText = item.link;
        tableEle.getElementsByClassName('item_info_top_badge')[0].innerText = item.badge;
        tableEle.getElementsByClassName('item_info_top_ip')[0].innerText = item.ip;
        tableEle.getElementsByClassName('item_info_top_folder')[0].innerText = item.folder;
        tableEle.getElementsByClassName('item_type_icon')[0].src = item.img;
        let envs = '';
        for (const env of item.envs) {
            envs += `<p>${env}<span class='icon-trash'></span></p>`;
        }
        tableEle.getElementsByClassName('item_info_operation_envs')[0].innerHTML = envs;
        tableEle.getElementsByClassName('item_info_operation_envs')[0].setAttribute('id', 'envs-' + item.ip);
        tableEle.getElementsByClassName('icon-plus')[0].setAttribute('id', 'plus-' + item.ip);
        if (item.badge.toLowerCase() == 'building') {
            tableEle.getElementsByClassName('icon-deny')[0].classList.add('icon-deny-show');
            tableEle.getElementsByClassName('item_info_top_badge')[0].classList.add('building');
        }
        creatElements({
            parentId: 'show_list_table',
            ele: 'div',
            className: 'list_item',
            id: 'list_item_' + item.ip,
            html: tableEle
        });
    }

    document.getElementById('buiding_num').innerText = buildingNum;
    document.getElementById('idle_num').innerText = idleNum;
    let cardStaticEle = document.getElementsByClassName('stat_card_stat')[0].querySelectorAll('p');
    cardStaticEle[0].innerText = sumNum;
    cardStaticEle[1].innerText = physcalNum;
    cardStaticEle[2].innerText = virtualNum;
}

// 通过事件委托，监听项目构建中的增加、删除、禁止事件
export const setOperEleClickListener = () => {
    let operEle = document.getElementById('show_list_table');
    operEle.addEventListener('click', (ev) => {
        let target = ev.target;
        while (target != operEle) {
            if (target.classList.contains('icon-plus')) {
                let ip = target.id.replace('plus-', '');
                showDialog('addDialog', ev.pageX, ev.pageY, ip);
                break;
            }
            if (target.classList.contains('icon-trash')) {
                console.log(ev);
                let env = target.parentNode.innerText,
                    ip = target.parentElement.parentElement.id.replace('envs-', '');
                deleteEnv(env, ip);
                break;
            }
            if (target.classList.contains('icon-deny')) {
                console.log('点击禁止！');
                break;
            }
            target = target.parentNode;
        }
    })
}

export const deleteEnv = (env, ip) => {
    let envsData = deleteEnvFromLocal(env, ip);
    setTableData(envsData);
}

export const addEnv = (envStr, ip) => {
    let envsData = addEnvToLocal(envStr, ip);
    setTableData(envsData);
}

export const initEnv = (versionDetail) => {
    localStorage.setItem('envsData', JSON.stringify(versionDetail));
    setTableData(versionDetail);
}