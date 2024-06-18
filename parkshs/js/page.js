window.onload = function() {
    //페이지이동
    const wrap = document.getElementById('wrap');
    const content = document.getElementsByClassName('content');
    let page = 0;
    const lastPage = content.length -1;

    window.addEventListener('wheel',function(e){
        e.preventDefault();
        if (e.deltaY > 0) {page++;}
        else if(e.deltaY <0) {page--;}

        console.log(e.deltaY);

        if (page < 0) {page =0;}
        else if (page > lastPage) {page = lastPage;}

        wrap.style.top = page * -100 + 'vh';
        });

   
    } 

    //이미지 확대창 만들기
    /*모달1*/
    document.addEventListener("DOMContentLoaded", function() {
        // 버튼 요소를 가져옵니다.
        var button = document.getElementById("detailButton");

        // 모달 요소를 가져옵니다.
        var modal = document.getElementById("myModal");
    
        // 닫기 버튼을 가져옵니다.
        var closeBtn = document.getElementsByClassName("close")[0];
    
        // 버튼에 클릭 이벤트를 추가합니다.
        button.addEventListener("click", function() {
            modal.style.display = "block"; // 모달 보이기
        });
    
        // 닫기 버튼에 클릭 이벤트를 추가합니다.
        closeBtn.addEventListener("click", function() {
            modal.style.display = "none"; // 모달 숨기기
        });
    
        // 모달 외부를 클릭하면 모달을 닫습니다.
        window.addEventListener("click", function(event) {
            if (event.target == modal) {
                modal.style.display = "none"; // 모달 숨기기
            }
        });
    });

    