const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeBtn = document.querySelector('.menu__close'),
    li= document.querySelector('.menu__link');

hamburger.addEventListener('click', ()=>{
    menu.classList.add('active');
});
closeBtn.addEventListener('click', ()=>{
    menu.classList.remove('active');
});

li.addEventListener('click', function close(){
    menu.classList.remove('active');

    setInterval(close, 2000);
});