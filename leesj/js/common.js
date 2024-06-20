$(document).ready(function(){

    //메인헤더 메뉴 드롭다운
        var trigger = $('#hamburger');
        var menu = $('#top_menu');

        $(trigger).on('click', function(e){
            e.preventDefault();
            menu.slideToggle();
        });

        $(window).resize(function(){
            var w = $(window).width();
            if (w > 767 && menu.is(':hidden')) {
                menu.css('display','flex');
            } else if (w < 768) {
                menu.css('display','none')
            }
        });

    //푸터 사이트맵
        $('form[name=rel_f]').on('submit',function(){
            var url = $('select',this).val();
            window.open(url);
        });

    //푸터 아이콘 슬라이드

        $('.slide_footer').on('click',function(e){

            var w = $(window).width();
            var h = $(window).height();
            e.preventDefault();

            if (w > 767 && h < 661) {
                $('footer').addClass('footer_wide').slideToggle();
            } else if (w < 768 && h < 661) {
                $('footer').addClass('footer_narrow').slideToggle();
            };
        });
        
        $(window).resize(function(){
            var h = $(window).height();
            if (h > 660 && $('footer').is(':hidden')) {
                $('footer').removeClass('footer_wide footer_narrow').css('display','block');
            } else if (h < 661) {
                $('footer').css('display','none')
            };
        });
       
});