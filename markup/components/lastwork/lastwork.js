$('.lastwork__buttonDown').on('click',function(){
	$('.lastwork__buttonUp').css({'display':'block'});
	$(this).css({'display':'none'});
	$('.lastwork__container').removeAttr("id");
});
$('.lastwork__buttonUp').on('click',function(){
	$('.lastwork__buttonDown').css({'display':'block'});
	$(this).css({'display':'none'});
	$('.lastwork__container').attr("id","lastwork__size");
});
$(window).resize(function() {
        if ($(window).width() < 999) {
            $('.lastwork__buttonUp').css({'display':'none'});
			$('.lastwork__buttonDown').css({'display':'block'});
			$('.lastwork__container').attr("id","lastwork__size");	
        }else{
            $('.lastwork__buttonUp').css({'display':'none'});
			$('.lastwork__buttonDown').css({'display':'none'});
			$('.lastwork__container').removeClass("lastwork__down");
        }
});
$(document).ready(function() {
        if ($(window).width() >= 1000) {
            $('.lastwork__buttonUp').css({'display':'none'});
			$('.lastwork__buttonDown').css({'display':'none'});
			$('.lastwork__container').removeClass("lastwork__down");
        }else{
            $('.lastwork__buttonUp').css({'display':'none'});
			$('.lastwork__buttonDown').css({'display':'block'});
			$('.lastwork__container').attr("id","lastwork__size");	
        }
});