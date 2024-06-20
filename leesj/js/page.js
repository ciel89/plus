window.onload = function() {
    //페이지 휠 이동
    const wrap = document.getElementById('wrap');
    const content = document.getElementsByClassName('content');
    let page = 0;
    const lastPage = content.length - 1;
    //console.log(content.length)

    window.addEventListener('wheel', function(e){
        e.preventDefault();
        if(e.deltaY > 0){
            page++;
        } else if (e.deltaY < 0) {
            page--;
        } 

        if (page < 0) {
            page = 0;
        } else if (page > lastPage) {
            page = lastPage
        }


    wrap.style.top = page * -100 + 'vh';
    });
}