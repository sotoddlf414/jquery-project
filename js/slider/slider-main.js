$(function(){

$('.slideshow').each(function(){

// 변수영역
// ------------------------------------------------------------------------------
var slideLength = $(this).find('.slideshow-slides').find('.slide').length;
var currentSlide = 0;
var Timer;
var delay = 3000;


// 함수영역
// ==============================================================================

//  1.슬라이더 요소 확인 & 슬라이더 배치 & 인디케이터 생성 
function createHTML(count){
    for(var i = 0; i < count; i++){
        $('.slideshow-slides').find('.slide').eq(i).css( {left : 100 * i + '%' } ); 
        
        $('.slideshow-indicator').append('<a href="#" class="indicator">'+i+'</a>');
     };
};
// ------------------------------------------------------------------------------
//  2.현재값 확인, 인디케이터 지시
function updateIndicator(){
    $('.slideshow-indicator').find('.indicator').removeClass('active');
    $('.slideshow-indicator').find('.indicator').eq(currentSlide).addClass('active');
};
// ------------------------------------------------------------------------------
//  3-(2).인덱스 값만큼 마이너스 하여 슬라이드 지시 + 인디케이터 모니터링
function moveSlider(index){
    $('.slideshow-slides').css( {left : -100 * index + '%'},750 );

    updateIndicator();
};
// ------------------------------------------------------------------------------
// 4-( 3- (2) ). setInterval() 함수에 따라 시간 증가시, 페이지 이동
function startTimerSlider(){
    Timer = setInterval(function(){
        currentSlide+=1;
      if(currentSlide >= slideLength){
        currentSlide = 0;
      };
      moveSlider(currentSlide); 
   }, delay);
};
// ------------------------------------------------------------------------------
// 5-( 3- (2) ). 좌 우 네비 버튼 클릭시 1칸씩 좌우 이동 
function navButton(){
    $('.slideshow-nav').find('.next').click(function(){
        currentSlide+=1;
        if(currentSlide >= slideLength){
            currentSlide = 0;
        };
        moveSlider(currentSlide);
    });
    
    $('.slideshow-nav').find('.prev').click(function(){
        currentSlide-=1;
        if(currentSlide <= -1){
            currentSlide = 3;
        };
        moveSlider(currentSlide);
    });
};
// ------------------------------------------------------------------------------


// ==============================================================================

// 프로그램 영역

createHTML(slideLength);

$('.slideshow').mouseenter(function(){
    clearInterval(Timer)
});
  
$('.slideshow').mouseleave(function(){
    startTimerSlider();
});

$('.slideshow-indicator').find('.indicator').eq(0).addClass('active');

$('.slideshow-indicator').find('.indicator').click(function(e){
    e.preventDefault();
    var selectedIndex = $(this).index();
    currentSlide = selectedIndex;
    moveSlider(currentSlide); 
    });
    
startTimerSlider();

navButton();





// ------------------------------------------------------------------------------
});
// jquery-end--------------------------------
});