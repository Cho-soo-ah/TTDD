// up animation
function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
  }
  
  function handleScroll() {
    const elems = document.querySelectorAll('.up');
    elems.forEach(elem => {
      if (isElementUnderBottom(elem, -30)) {
        elem.style.opacity = "0";
        elem.style.transform = 'translateY(200px)';
  
      } else {
        elem.style.opacity = "1";
        elem.style.transform = 'translateY(0px)';
  
      }
    })
  }
  
  window.addEventListener('scroll', handleScroll);

// bllearn section
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floating(item, delayAfter, size) {
    gsap.to(
        item, //선택자
        random(0.8, 1.3), //1.5~2.5초 사이의 랜덤한 애니메이션 동작 시간
        {
            delay: random(0, delayAfter), //몇초 뒤에 애니메이션을 실행, 지연 시간 설정
            y: size, //transform: translateY(수치)와 같음. 수직으로 움직이는 크기
            repeat: -1, //몇 번 반복하는지를 설정, -1은 무한 반복.
            yoyo: true, //한번 재생된 애니메이션을 다시 뒤로 재생-위아래 움직임
            ease: Power1.easeInOut //easing 함수 적용
        }
    );
}

floating('.con', .2, 30)

// menu
const m1 = document.querySelector('.m1');
const m2 = document.querySelector('.m2');
const m3 = document.querySelector('.m3');
const m4 = document.querySelector('.m4');
const designTop = document.querySelector('#design_sec').offsetTop;
const turtleTop = document.querySelector('#turtle_sec').offsetTop;
const svgTop = document.querySelector('#svg_sec').offsetTop;
const bllearnTop = document.querySelector('#bllearn_sec').offsetTop;

m1.addEventListener("click",designHandle);
m2.addEventListener("click",turtleHandle);
m3.addEventListener("click",svgHandle);
m4.addEventListener("click",bllearnHandle);

function designHandle(){
  window.scrollTo({top:designTop, behavior:"smooth"});
}
function turtleHandle(){
  window.scrollTo({top:turtleTop, behavior:"smooth"});
}
function svgHandle(){
  window.scrollTo({top:svgTop, behavior:"smooth"});
}
function bllearnHandle(){
  window.scrollTo({top:bllearnTop, behavior:"smooth"});
}
