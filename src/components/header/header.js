export const setAccordingListener=()=>{
    let btnEle = document.getElementById('showAccordingBtn');
    btnEle.addEventListener('click', (ev) => {
        let target = ev.target;
        if (target.classList.contains('icon-navicon')) {
            setAccordingLeft();
        }
    });

    let colseBtn =  document.getElementById('hideAccordingBtn');
    colseBtn.addEventListener('click', (ev) => {
        let target = ev.target;
        if (target.classList.contains('icon-close')) {
            setAccordingLeft();
        }
    });
}

const setAccordingLeft =()=>{
    let accordionEle = document.getElementById('accordion');
    let offsetLeft = accordionEle.offsetLeft,left;
    if(offsetLeft<0 ){
        accordionEle.style.cssText = 'left: 0';
    }else{
        accordionEle.style.cssText = '';
    }
}