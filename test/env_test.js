import {addEnvToLocal, deleteEnvFromLocal, init} from '../src/components/showcontext/operation'
import {versionDetail} from '../static/js/constant'

describe('addEnvToLocal unit test.', ()=>{
    console.log('begin test...');
    init(versionDetail);
    it('addEnvToLocal ()', function(done){
        addEnvToLocal("testEnv", "192.168.1.104");
        let envsData = JSON.parse(localStorage.getItem('envsData'));
        let envs = "";
        envsData.forEach(element => {
            if(element.ip == "192.168.1.104"){
                envs =  element.envs;
            }
        }); 
        expect(envs).toContain("testEnv");     
        done();
    });
});

describe('delEnvToLocal unit test.', ()=>{
    console.log('begin test...');
    init(versionDetail);
    it('delEnvToLocal ()', function(done){
        deleteEnvFromLocal("testEnv", "192.168.1.104");
        let envsData = JSON.parse(localStorage.getItem('envsData'));
        let envs = "";
        envsData.forEach(element => {
            if(element.ip == "192.168.1.104"){
                envs =  element.envs;
            }
        });       
        expect(envs).not.toContain("testEnv");     
        done();
    });
});
