(function($){
	function resizeDiv() {
		// Setting full width & height of div to fit entire window
		vpw = $(window).width();
		vph = $(window).height();
		
		$('.header, #intro').css({'height': vph});
	}

	// setting extended with for portfolio horizontal scroll. 

	function portfolioWidth(){
		var windowWidth = $(window).width();
		var portfolio = $('#portfolio, .portfolio-content');	
		var portWidth = portfolio.css({ 'width':windowWidth });		
	}

	$.fn.smoothScroll = function( options ){
		var settings = $.extend({
			selector : $(this),
			location : $('#myid')
		}, options);

		return this.each( function() {
			// provides a smooth scroll between each link
				settings.selector.find('a').on('click', function(e){
				settings.location.scrollTo($(this).attr('href'), 300);
				//prevents hash tag
				e.preventDefault();
			});
		})
	}


// End of Plugins, begin implimentation
	portfolioWidth();
	resizeDiv();

	$(window).resize(function(){
		portfolioWidth();		
		resizeDiv();
	});

	$('.portfolio-nav, .site-list').smoothScroll({
		location : $('#portfolio')
	});
	$('body').smoothScroll({
		location : $('body')
	});

}(jQuery));
