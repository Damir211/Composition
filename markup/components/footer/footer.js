$('.footer__button').on('click',function(){
	if ($(window).width() < 767) {
	$('.footer__button').parent().animate({'max-height':'50px'},500);
	$(this).parent().animate({'max-height':'1000px'},500);
	}
});
$(window).resize(function() {
        if ($(window).width() >= 768) {
            $('.footer__button').parent().css({'max-height':'1000px'});
        }
        if ($(window).width() < 767) {
            $('.footer__button').parent().css({'max-height':'50px'});
        }
});
$(document).ready(function() {
        if ($(window).width() >= 768) {
            $('.footer__button').parent().css({'max-height':'1000px'});
        }
        if ($(window).width() < 767) {
            $('.footer__button').parent().css({'max-height':'50px'});
        }
});

