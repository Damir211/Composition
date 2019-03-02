$('.services__buttonDown').on('click',function(){
	$('.services__buttonUp').css({'display':'block'});
	$(this).css({'display':'none'});
	$('.services__container').removeAttr("id");
});
$('.services__buttonUp').on('click',function(){
	$('.services__buttonDown').css({'display':'block'});
	$(this).css({'display':'none'});
	$('.services__container').attr("id","services__size");
});
$(window).resize(function() {
        if ($(window).width() < 999) {
            $('.services__buttonUp').css({'display':'none'});
			$('.services__buttonDown').css({'display':'block'});
			$('.services__container').attr("id","services__size");
        }else{
            $('.services__buttonUp').css({'display':'none'});
			$('.services__buttonDown').css({'display':'none'});
			$('.services__container').removeAttr("id");
        }
});
$(document).ready(function() {
        if ($(window).width() >= 1000) {
            $('.services__buttonUp').css({'display':'none'});
			$('.services__buttonDown').css({'display':'none'});
			$('.services__container').removeAttr("id");
        }else{
            $('.services__buttonUp').css({'display':'none'});
			$('.services__buttonDown').css({'display':'block'});
			$('.services__container').attr("id","services__size");
        }
});
