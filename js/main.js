$(document).ready(function() {

	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);

});

$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});


$(function() {
	$('a[href*=#]:not([href=#])').click(function(e) {
		e.preventDefault();
		e.stopImmediatePropagation();
		scrollTo(this);
	});

	// Mobile click event
	$('a[href*=#]:not([href=#])').on('click touchend', function(e) {
		scrollTo(this);
	});

	var navbar = $('.navbar');
	var coloredLine = $('.colored-line');

	var navbarPosX = navbar.position().top;
	var navbarPosXInitial = navbarPosX;
	var coloredLinePosX = coloredLine.position().top;
	var coloredLinePosXInitial = coloredLinePosX;
	var screenHeight = $(window).height();

	$(window).scroll(function() {
		scrollMenu($(this));
	});

	// Change the values for when the navbar should snap to top or not.
	$(window).resize(function() {
		// Since the menu at the top is 40% of the screen height we have to account for that
		var ratio = ($(this).height() * 0.4) / (screenHeight * 0.4);
		console.log(ratio);
		navbarPosX = navbarPosXInitial * ratio;
		coloredLinePosX = coloredLinePosXInitial * ratio;
	});

	$('.colored-line-red').fadeOut();
	$('.colored-line-green').fadeOut();
	$('.colored-line-blue').fadeOut();

	$('.link-red').hover(function() {
		$('.colored-line-red').fadeIn();
	}, function() {
		$('.colored-line-red').fadeOut();
	});

	$('.link-green').hover(function() {
		$('.colored-line-green').fadeIn();
	}, function() {
		$('.colored-line-green').fadeOut();
	});

	$('.link-blue').hover(function() {
		$('.colored-line-blue').fadeIn();
	}, function() {
		$('.colored-line-blue').fadeOut();
	});

	function scrollMenu(w) {
		if (w.scrollTop() >= navbarPosX) {
			navbar.addClass("navbar-top");
		} else {
			navbar.removeClass("navbar-top");
		}
		if (w.scrollTop() >= coloredLinePosX - 50) {
			coloredLine.addClass("colored-line-top");
		} else {
			coloredLine.removeClass("colored-line-top");
		}
	}

	function scrollTo(t) {
		if (location.pathname.replace(/^\//,'') == t.pathname.replace(/^\//,'') && location.hostname == t.hostname) {
			var target = $(t.hash);
			hash = $(t).attr('href');
			target = target.length ? target : $('[name=' + t.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 500, function() {
					window.location.hash = hash;
				});
				return false;
			}
		}
	}
});
