$(function() {
	$('.sp_menu').click(function(event) {
		if ($('nav ul').css('display')=='none'){
			$('nav ul').slideDown();
			$('.sp_menu').addClass('open');
		}else{
		$('nav ul').slideUp();
		$('.sp_menu').removeClass('open');

	}});
});