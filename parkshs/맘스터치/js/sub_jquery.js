$(document).ready(function(){
    $('.sub').hide();
    
    $('.menu_s').mouseenter(function(){
        $('.sub',this).slideDown('slow');
        /*$('.sub').css('height','220px')*/
    });
    $('.menu_s').mouseleave(function(){
        $('.sub').hide();
    });


//서브메뉴
    $('.mnu_s').hide();
    
    $('.sub_m').hover(function(){
        $('.mnu_s',this).slideToggle();
    });



//배너 - slide banner
var swiper = new Swiper('.swiper-container',{
    autoplay : {delay:4000,  disableOnInteraction: false},
    slidesPerView :1,
    loop: true,
    pagination : {
        el:'.swiper-pagination',
        clickable:true,
    },
    navigation : {
        nextEl:'#next',
        prevEl:'#prev',
    }
})

});