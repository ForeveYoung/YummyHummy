function outNum(n, elem){
    let num = 0;
    let timeout = Math.round(4000 / n);
    const interval = setInterval(() => {
        if (n >= num) {
            elem.innerHTML = num;
        } else {
            clearInterval(interval);
        }
        num++;
    }, timeout)
}

const statics =  document.querySelector('.statics-box');
const num1 = document.querySelector('#foods-num');
const num2 = document.querySelector('#customers-num');
const num3 = document.querySelector('#exp-num');
const num4 = document.querySelector('#last-num');

options = { 
    root: null,
    threshold: 0,
    rootMargin: '-150px'
};

const observer = new IntersectionObserver( function(){
    outNum(250, num1);
    outNum(500, num2);
    outNum(12, num3);
    outNum(30, num4);
}, options);

observer.observe(statics);

