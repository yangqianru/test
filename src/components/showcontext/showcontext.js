import './showcontext.less';
import showcontext from './showcontext.html';
import { creatElements, parseDom, showDialog } from '../../common/js/util';
import tableItem from './tableitem.html';


//主体内容
export const getShowContext = () => {
    return showcontext;
}

export const setTableData = (data) => {
    //存储数据到localstorage
    localStorage.setItem('tableData', JSON.stringify(data));

    for (const item of data) {
        let html = parseDom(tableItem)[0];
        html.getElementsByClassName('item_info_top_link')[0].innerText = item.link;
        html.getElementsByClassName('item_info_top_badge')[0].innerText = item.badge;
        html.getElementsByClassName('item_info_top_ip')[0].innerText = item.ip;
        html.getElementsByClassName('item_info_top_folder')[0].innerText = item.folder;
        let envs = '';
        for (const env of item.envs) {
            envs += `<p>${env}<span class='icon-trash'></span></p>`;
        }
        html.getElementsByClassName('item_info_operation_envs')[0].innerHTML = envs;
        html.getElementsByClassName('item_info_operation_envs')[0].setAttribute('id', 'envs-' + item.ip);
        html.getElementsByClassName('icon-plus')[0].setAttribute('id', 'plus-' + item.ip);
        if (item.badge.toLowerCase() == 'building') {
            html.getElementsByClassName('icon-deny')[0].classList.add('icon-deny-show');
            html.getElementsByClassName('item_info_top_badge')[0].classList.add('building');
        }
        creatElements({
            parentId: 'show_list_table',
            ele: 'div',
            className: 'list_item',
            id: 'list_item_' + item.ip,
            html: html
        });
    }
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

const deleteEnv = (env, ip) => {
    let tableData = JSON.parse(localStorage.getItem('tableData'));
    for (const item of tableData) {
        let envs = item.envs;
        let index = envs.indexOf(env);
        if (item.ip == ip && index != -1) {
            envs.splice(index, 1);
            console.log(envs, tableData);
            setTableData(tableData);
            break;
        }
    }
}

export const addEnv = (envStr, ip) => {
    let tableData = JSON.parse(localStorage.getItem('tableData')), newEnvs = envStr.split(',');
    for (const OlderItem of tableData) {
        let OlderEnvs = OlderItem.envs;
        if (OlderItem.ip == ip) {
            for (let newEnv of newEnvs) {
                let index = OlderEnvs.indexOf(newEnv);
                if (index == -1) {
                    OlderEnvs.push(newEnv);
                } else {
                    console.log(newEnv + '添加失败，此浏览器已存在！')
                }
            }
            setTableData(tableData);
            break;
        }
    }
}