/////////////////////// swiper start ////////////////////////////////////


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 5000,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
// var mySwiper = new Swiper('.swiper-container', {
//     autoplay: {
//         delay: 5000,

// })
// setTimeout(setInterval(()=> {
// var next = document.querySelector(".swiper-button-next");
// window.onload=     
// }, 4000)[
// , 4000);



/////////////////////// swiper end ////////////////////////////////////



/////////////////////// counter start ////////////////////////////////////


let nums = document.querySelectorAll(".nums .num h1");
let section = document.querySelector(".three");
let started = false; // Function Started ? No

window.onscroll = function () {
    if (section.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}
/////////////////////// counter end ////////////////////////////////////



/////////////////////// allow-cookeis start ////////////////////////////////////


const allow = document.querySelector('.allow-cookies');
const button = document.getElementById('allow');
const close = document.getElementById('close');

function show() {
    allow.classList.remove('hide');


};
setTimeout(show, 3000);

button.onclick = () => {
    allow.classList.add('hide');
};
close.onclick = () => {
    allow.classList.add('hide');
};
/////////////////////// allow-cookeis start ////////////////////////////////////
if(localStorage.getItem('firstName')!== null){
    window.alert("Hello "+localStorage.getItem('firstName'));
}
