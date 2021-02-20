const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeBtn = document.querySelector('.menu__close'),
    lis= document.querySelectorAll('.menu__link');

    hamburger.addEventListener('click', ()=>{
        menu.classList.add('active');
    });
    closeBtn.addEventListener('click', ()=>{
        menu.classList.remove('active');
    });
    const fadeMenu=() => {
        menu.classList.remove('active');
    };


    lis.forEach(item =>{
        item.addEventListener('click', fadeMenu);
    });
