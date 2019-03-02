$('.team__buttonDown').on('click',function(){
	$('.team__buttonUp').css({'display':'block'});
	$(this).css({'display':'none'});
	$('.team__container').removeAttr("id");
});
$('.team__buttonUp').on('click',function(){
	$('.team__buttonDown').css({'display':'block'});
	$(this).css({'display':'none'});
	$('.team__container').attr("id","team__size");
});


$(window).resize(function() {
        if ($(window).width() < 999) {
            $('.team__buttonUp').css({'display':'none'});
			$('.team__buttonDown').css({'display':'block'});
			$('.team__container').attr("id","team__size");
        }else{
            $('.team__buttonUp').css({'display':'none'});
			$('.team__buttonDown').css({'display':'none'});
			$('.team__container').removeAttr("id");
        }
});



$(document).ready(function() {
        if ($(window).width() >= 1000) {
            $('.team__buttonUp').css({'display':'none'});
			$('.team__buttonDown').css({'display':'none'});
			$('.team__container').removeAttr("id");
        }else{
            $('.team__buttonUp').css({'display':'none'});
			$('.team__buttonDown').css({'display':'block'});
			$('.team__container').attr("id","team__size");
        }
});
