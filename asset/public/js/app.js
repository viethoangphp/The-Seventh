$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		},
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:false
	});

	$(document).scroll(function(){
		var srt =$(document).scrollTop();
		if(srt > 110)
		{
			$("#main-header").addClass("fixed");
		}
		if(srt==0 || srt < 110)
		{
			$("#main-header").removeClass("fixed");
		}
		var kc = $(document).scrollTop();
		console.log(kc);
		if(kc > 500)
		{
			$('.content').addClass("animation-content");
			$('.thumb-about').addClass("animation-thumb-about");
		}
		if(kc > 1100)
		{
			$('#out-room h3.text-title').addClass("animation-content");
			
		}
		
		if(kc > 1750)
		{
			$('#new-evt h3.text-title').addClass("animation-content");
			
		}
		
		if(kc > 2300)
		{
			$('#utl h3.text-title').addClass("animation-content");
			
		}
		
		if(kc > 3350)
		{
			$('#booking .widget-left').addClass("animation-content");
			$('#booking .widget-right').addClass("animation-thumb-about");
			
		}


	});
	$("#book-room").addClass("form");
	 $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#btn-top').stop().fadeIn(150);
        } else {
            $('#btn-top').stop().fadeOut(150);
        }
    });
    $('#btn-top').click(function () {
        $('body,html').stop().animate({scrollTop: 0}, 800);
    });
  
  	$("#main-menu li a").click(function(){
  		var pt = $(this).attr('href');
  		var kc = $(pt).offset().top;
  		$('body,html').stop().animate({scrollTop: kc}, 800);
  		
  	});

});
