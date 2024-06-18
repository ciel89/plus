window.onload = function() {

const wrap = document.getElementsByClassName('wrap')[0]; // 보일 영역
const container = document.getElementsByClassName('container');
let page = 0; // 영역 포지션 초기값
const lastPage = container.length - 1; // 마지막 페이지

window.addEventListener('wheel',function(e) {
e.preventDefault();
if(e.deltaY > 0){
page++;
}
else if(e.deltaY < 0){
page--;
}

if(page < 0){
page=0;
}
else if(page > lastPage){
page = lastPage;
}
//console.log(e.deltaY)
wrap.style.top = page * -100 + 'vh';
},{passive:false}); // 디폴트 기능 제거 - 스크롤


}
        

        $(document).ready(function() {
            $(".txt1").delay(500).animate({opacity: 0.8, top: 80}, 800, "swing");
            $(".txt2").delay(1000).animate({opacity : 0.8, TOP: 150}, 800, "swing");


            
            
            $("#menu .m").on("mouseenter", function(){
                $("ul", this).show();
                $(this).siblings("li").find("ul").hide();
                //$(this).addClass("on").siblings("li").removeClass("on");
            });

 
            $("#menu .m").on("mouseleave", function(){
                $("#menu ul").hide()//.add("#gnb m").removeClass("on");
            });





           
            /*document.addEventListener('DOMContentLoaded', function () {
            const imageWrappers = document.querySelectorAll('.image-wrapper');
        
            imageWrappers.forEach(wrapper => {
                const video = wrapper.querySelector('.hover-video');
        
                wrapper.addEventListener('mouseover', function () {
                    video.style.display = 'block';
                    video.play();
                });
        
                wrapper.addEventListener('mouseout', function () {
                    video.style.display = 'none';
                    video.pause();
                    video.currentTime = 0;
                });
            });*/
            
            
});


           
    