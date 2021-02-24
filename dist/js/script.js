const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeBtn = document.querySelector('.menu__close'),
    lis= document.querySelectorAll('.menu__link');
let timerId ;

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
        item.addEventListener('click', ()=>{
            timerId=setTimeout(fadeMenu, 1000);
        });
    });


//mail
$(function(){
    $('form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'smart.php',
            data:$(this).serialize()
        }).done(function (){
            $(this).find('input').val('');

            $('form').trigger('reset');
        });
        return  false;
    });

//totop
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('.totop').fadeIn();
        } else {
            $('.totop').fadeOut();
        }
    });
   $('.totop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});