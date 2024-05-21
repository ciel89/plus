$(document).ready(function(){
    $(".sub").hide();

    $('.menu_s').hover( function(){
     $('.sub',this).slideToggle()
    })
})