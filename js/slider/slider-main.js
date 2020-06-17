$(function(){
// jquery-start--------------------------------

//.slideshow 내에 모든 요소들 선택 

// 일정 시간마다 사진을 바꾸고싶다 ~!!!!!!!!!!!
// while 문 이용 
// for 문 이용 
// setTimeout 이용 
// setInterval 이용

$('.slideshow').each(function(){
   var selection = $(this).find('img');
   var first = 0;
   var imgLength = selection.length;
   
   selection.eq(0).fadeIn();

   setInterval( slideShow , 2000 );

   function slideShow(){
       selection.eq(first).fadeOut();

       var nextVal = first+1;
       if(nextVal >= imgLength){
           nextVal = 0;
       }

       selection.eq(nextVal).fadeIn();

       first = nextVal;
   }


});






// jquery-end--------------------------------
});