$(document).ready(function(){

    // 상품 설명
    var totalNum = $('item > img').length
    var currentNum = 1;

    //클릭이벤트
    $('#next1').click(function(){
        currentNum ++;
        if(currentNum > totalNum) {currentNum = 1}
        $('.item > img:first').insertAfter('.item > img:last');
    });
    $('#prev1').click(function(){
        currentNum --;
        if(currentNum < 1) {currentNum = totalNum}
        $('.item > img:last').insertBefore('.item > img:first');
    });

});