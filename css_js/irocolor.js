

$(document).ready(function () {
  $('#image-content').delay(2400).fadeIn(1000).removeClass('hidden');
  $('.kanji').delay(2000).fadeIn(1000).removeClass('hidden');
  $('.scroll').delay(2000).fadeIn(1000).removeClass('hidden');
});


$(window).scroll(function() {
    var winHeight = $(this).height();
    var scrollTop = $(this).scrollTop();
    
    var elemHeight = $("#kanji-1").height();
    var elementTop = $("#kanji-1").position().top; 

     
    if (elementTop < scrollTop + winHeight && scrollTop > elementTop + elemHeight){
		  $("#samurai, .image-1, .scroll").fadeOut(200);
      $("#samurai, .image-1").hide(50);
	}
		
    else{
		  $("#samurai, .image-1").fadeIn();
      
	}
    
    
});


$(window).scroll(function() {
  var winHeight = $(this).height();
  var scrollTop = $(this).scrollTop();

  var elemHeight2 = $("#kanji-2").height();
  var elementTop2 = $("#kanji-2").position().top; 


  if (elementTop2 < scrollTop + winHeight && scrollTop < elementTop2 + elemHeight2){
    $("#yokai, .image-2").fadeIn();
    
    
}
  
  else{
    $("#yokai, .image-2").fadeOut(200);
    $("#yokai, .image-2").hide(50);
    
}

  
});

$(window).scroll(function() {
  var winHeight = $(this).height();
  var scrollTop = $(this).scrollTop();

  var elementTop2 = $("#kanji-2").position().top; 


  if (scrollTop + winHeight >= winHeight + elementTop2 - winHeight/16){
    $(".button-control").fadeIn(800).removeClass('hidden');
    
}
  
  else{
    $(".button-control").fadeOut();
    $(".button-control").hide(200);
    
}
});


