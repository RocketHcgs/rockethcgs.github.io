//Javascript

function hello() {
	setTimeout('hello()',50);
	var page;
	page = location.hash;
	switch(page) {
		case '#home':
			$('#about').removeClass('SlideIn');
			$('#home').removeClass('SlideOut');
			$('#about').addClass('SlideOut');
			$('#home').addClass('SlideIn');
			setTimeout("$('#about').removeClass('page-current')",500);
			setTimeout("$('#home').addClass('page-current')",500);
			$('#home-link').addClass('active');
			$('#about-link').removeClass('active');
			break;
		case '#about':
			$('#home').removeClass('SlideIn');
			$('#about').removeClass('SlideOut');
			$('#home').addClass('SlideOut');
			$('#about').addClass('SlideIn');
			setTimeout("$('#home').removeClass('page-current')",500);
			setTimeout("$('#about').addClass('page-current')",500);
			$('#about-link').addClass('active');
			$('#home-link').removeClass('active');
			break;
		default:
			break;
	}
}

$(function(){
	$('#about').removeClass('SlideIn');
	$('#home').removeClass('SlideOut');
	$('#home').addClass('SlideIn');
	setTimeout("$('#home').addClass('page-current')",500);
	$('#home-link').addClass('active');
	$('#about-link').removeClass('active');
	hello();
	$('#home-link').click(function(event){
		if(location.hash !== '#home' && location.hash !== '#about') {
			event.preventDefault();
		}
	});
});