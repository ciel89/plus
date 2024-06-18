$(document).ready(function(){

    // 같은 동네 상품
    var totalNum = $('.usedList > .used1').length
    var currentNum = 1;

    //클릭이벤트
    $('#next1').click(function(){
        currentNum ++;
        if(currentNum > totalNum) {currentNum = 1}
        $('.usedList > .used1:first').insertAfter('.usedList > .used1:last');
    });
    $('#prev1').click(function(){
        currentNum --;
        if(currentNum < 1) {currentNum = totalNum}
        $('.usedList > .used1:last').insertBefore('.usedList > .used1:first');
    });

    

    // 추천 상품
    var totalNum = $('.usedList > .used2').length
    var currentNum = 1;

    //클릭이벤트
    $('#next2').click(function(){
        currentNum ++;
        if(currentNum > totalNum) {currentNum = 1}
        $('.usedList > .used2:first').insertAfter('.usedList > .used2:last');
    });
    $('#prev2').click(function(){
        currentNum --;
        if(currentNum < 1) {currentNum = totalNum}
        $('.usedList > .used2:last').insertBefore('.usedList > .used2:first');
    });


    
    // 내가 찜한 상품
    var totalNum = $('.usedList > .used3').length
    var currentNum = 1;

    //클릭이벤트
    $('#next3').click(function(){
        currentNum ++;
        if(currentNum > totalNum) {currentNum = 1}
        $('.usedList > .used3:first').insertAfter('.usedList > .used3:last');
    });
    $('#prev3').click(function(){
        currentNum --;
        if(currentNum < 1) {currentNum = totalNum}
        $('.usedList > .used3:last').insertBefore('.usedList > .used3:first');
    });



    // 방금 올라온 상품
    var totalNum = $('.usedList > .used4').length
    var currentNum = 1;

    //클릭이벤트
    $('#next4').click(function(){
        currentNum ++;
        if(currentNum > totalNum) {currentNum = 1}
        $('.usedList > .used4:first').insertAfter('.usedList > .used4:last');
    });
    $('#prev4').click(function(){
        currentNum --;
        if(currentNum < 1) {currentNum = totalNum}
        $('.usedList > .used4:last').insertBefore('.usedList > .used4:first');
    });
});