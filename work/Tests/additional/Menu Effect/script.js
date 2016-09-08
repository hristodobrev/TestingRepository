$(window).scroll(function() {
	$header = $('.header__fake');
    var scroll = $(window).scrollTop();

    if (scroll > 20) {
        $header.addClass('animated').removeClass('fix');
    } else {
        $header.removeClass('animated').addClass('fix');
    }
  
});