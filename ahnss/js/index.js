window.onload = function(){

    const wrap = document.getElementById('wrap');
    const content = document.getElementsByClassName('content');
    let page = 0;
    const lastPage = content.length -1;


    window.addEventListener('wheel', function(e){
        e.preventDefault();
        if(e.deltaY > 0) {page++;}
        else if(e.deltaY < 0) {page--;}
        //else{}
        console.log(e.deltaY);


        if(page < 0) {page = 0;}
        else if(page > lastPage) {page = lastPage;}
        //else{}

        wrap.style.top = page * -100 + 'vh';
    });

};