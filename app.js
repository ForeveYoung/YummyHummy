// const time = 3000;
// const step = 1;
   
// function outNum(num, elem){
//  let l = document.querySelector('#' + elem);
//     n = 0;
//    let timeout = Math.round(time / (num / step));
//     let interval = setInterval( () => {
//         if (n <= num){
//             l.innerHTML = n;
//         }else{
//             clearInterval(interval);
//         }

//         n = n + step;
//     }, timeout);
// }



// //-------------------------------------------------------------

// outNum(550, 'num1')
// outNum(800, 'num2')
// outNum(13, 'num3')
// outNum(40, 'num3')


// ------------------------------ JQUERY------------------

// $('.number').each( function(){
//     $(this).prop('Counter', 0).animate({
//         Counter: $(this).text()
//     },{
//         duration: 3000,
//         easing: 'swing',
//         step: function(now){
//             $(this).text(Math.ceil(now));
//         }
//     });
// })


//-----------------------------------------------------






//-------------------------------------------------------


// const section = document.querySelector('.number');

// const num1 = document.querySelector('#num1');
// const num2 = document.querySelector('#num2');
// const num3 = document.querySelector('#num3');
// const num4 = document.querySelector('#num4');

// options = { 
//     root: null,
//     threshold: 0,
//     rootMargin: '-150px'
// };

// const observer = new IntersectionObserver( function(){
    

// }, options);

// observer.observe(section);


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

const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const num3 = document.querySelector('#num3');
const num4 = document.querySelector('#num4');

options = { 
    root: null,
    threshold: 0,
    rootMargin: '-150px'
};

const observer = new IntersectionObserver( function(){
    outNum(250, num1);
}, options);

observer.observe(num1);


const observer2 = new IntersectionObserver( function(){
    outNum(500, num2);
}, options);

observer2.observe(num2);


const observer3 = new IntersectionObserver( function(){
    outNum(12, num3);
}, options);

observer3.observe(num3);


const observer4 = new IntersectionObserver( function(){
    outNum(30, num4);
}, options);

observer4.observe(num4);