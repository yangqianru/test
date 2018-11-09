export const addEnvToLocal = (envStr, ip) =>{
    let envsData = JSON.parse(localStorage.getItem('envsData')), newEnvs = envStr.split(',');
    for (const OlderItem of envsData) {
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
            break;
        }
    }
    //存储数据到localstorage
    localStorage.setItem('envsData', JSON.stringify(envsData));
    return envsData;
}

export const deleteEnvFromLocal = (env, ip) =>{
    let envsData = JSON.parse(localStorage.getItem('envsData'));
    for (const item of envsData) {
        let envs = item.envs;
        let index = envs.indexOf(env);
        if (item.ip == ip && index != -1) {
            envs.splice(index, 1);
            break;
        }
    }
    localStorage.setItem('envsData', JSON.stringify(envsData));
    return envsData;
}

export const init = (versionDetail)=>{
    localStorage.setItem('envsData', JSON.stringify(versionDetail));
}