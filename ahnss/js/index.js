window.onload = function(){

let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll("#gnb li a"); //메뉴 링크
//window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);
//커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
function cursor(e) {
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY - scrollY + "px";
}

navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      mouseCursor.classList.add("link-grow");
      mouseCursor.style.zIndex = "-1";
      link.classList.add("hovered-link");
    });
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("link-grow");
      mouseCursor.style.zIndex = "1000";
      link.classList.remove("hovered-link");
    });
  });



// 3d card effect
    const frames = document.querySelectorAll('.frame');

    frames.forEach(frame => {
    const card = frame.querySelector('.card');
    const light = frame.querySelector('.light');
    
    let { x, y, width, height } = frame.getBoundingClientRect();
    
    function mouseMove(e) {
    const left = e.clientX - x;
    const top = e.clientY - y;
    const centerX = left - width / 2;
    const centerY = top - height / 2;
    const d = Math.sqrt(centerX**2 + centerY**2);

    card.style.boxShadow = `
        ${-centerX / 5}px ${-centerY / 10}px 10px rgba(0, 0, 0, 0.2)
    `;

    card.style.transform = `
        rotate3d(${-centerY / 100}, ${centerX / 100}, 0, ${d / 8}deg)
    `;

    light.style.backgroundImage = `
        radial-gradient(circle at ${left}px ${top}px, #00000040, #ffffff00, #ffffff99)
    `;
    }
    
    frame.addEventListener('mouseenter', () => {
        frame.addEventListener('mousemove', mouseMove);
    });
    
    frame.addEventListener('mouseleave', () => {
        frame.removeEventListener('mousemove', mouseMove);
        card.style.boxShadow = '';
        card.style.transform = '';
        light.style.backgroundImage = '';
    });
    
    window.addEventListener('resize', () => {
        const rect = frame.getBoundingClientRect();
        x = rect.x;
        y = rect.y;
        width = rect.width;
        height = rect.height;
    });
    });




// page wheel
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