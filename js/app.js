Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})


var vm = new Vue({
	el: 'body',

	data: {
		projects: [
			{
				title: 'The reception',
				anchor: 'thereception',
				images: [
					'img/large/mottagning/1.jpg',
					'img/large/mottagning/2.jpg',
					'img/large/mottagning/3.jpg',
					'img/large/mottagning/4.jpg'],
				date: 'July 2015',
				timeframe: '1 month',
				tools: 'JavaScript, PHP, HTML, MySQL, CSS',
				color: 'purple',
				skew: 'right',
				description: 'This is a website made for the reception of newly admitted students for my program at KTH. The website was used daily by about 120 people during 4 weeks.<br/><br/>The website is written in basic JavaScript and PHP. It features a full login system with editable profiles, an admin system, schedule with data taken from google calendar, news feed, gallery and chat.'
			},
			{
				title: 'Car Noises',
				anchor: 'carnoises',
				images: [
					'img/large/carnoises/1.jpg',
					'img/large/carnoises/2.jpg',
					'img/large/carnoises/3.jpg',
					'img/large/carnoises/4.jpg'],
				date: 'June 2015',
				timeframe: '24 hours',
				tools: 'Maya, Unity, Photoshop',
				color: 'green',
				skew: 'left',
				description: "This is a game made for the Dreamhackathon with the theme â€œcollaborationâ€. The goal of the game is to get the car around the race track. The input comes from the microphone, the more sound and vrooms going into the microphone the faster the car goes. But if it goes too fast it will derail.<br/><br/>I made all the graphics, 3D modelling and texturing during this project. I improved my abilities in creating something simple and good looking during a short period of time. "
			},
			{
				title: 'Skeduls',
				anchor: 'skeduls',
				images: [
					'img/large/skeduls/1.jpg',
					'img/large/skeduls/2.jpg',
					'img/large/skeduls/3.jpg',
					'img/large/skeduls/4.jpg',
					'img/large/skeduls/5.jpg'],
				date: 'Mars 2015',
				timeframe: '2 weeks',
				tools: 'Meteor, HTML, CSS',
				color: 'red',
				skew: 'right',
				description: 'This web application is made by me and a class mate. It is an event planner and is very inspired by  <a href="http://www.trello.com" target="_blank">trello.com</a>. All the events and days can be dragged and dropped in any order and automatically be updated on the database.<br/><br/>This was a very fun project and I learnt a lot about how to make fully functional applications made entirely for the web. I also improved my abilities to plan and work with bigger projects.'
			},
			{
				title: 'Webhallen',
				anchor: 'webhallen',
				images: [
					'img/large/webhallen/1.jpg',
					'img/large/webhallen/2.jpg',
					'img/large/webhallen/3.jpg',
					'img/large/webhallen/4.jpg'],
				date: 'February 2015',
				timeframe: '1.5 weeks',
				tools: 'Maya, Unity, Photoshop',
				color: 'blue',
				skew: 'left',
				description: 'Me and a friend made an Oculus Rift demo for Webhallen Fridhemsplan. It is only meant to showcase the capabilities of the Rift. I had the responsibility of creating all the art and assets.'
			},
			{
				title: 'Space Over Time',
				anchor: 'spaceovertime',
				images: [
					'img/large/spaceovertime/1.jpg',
					'img/large/spaceovertime/2.jpg',
					'img/large/spaceovertime/3.jpg',
					'img/large/spaceovertime/4.jpg',
					'img/large/spaceovertime/5.jpg'],
				date: 'November 2014',
				timeframe: '24 hours',
				tools: 'Maya, Unity, Photoshop',
				color: 'orange',
				skew: 'right',
				description: 'This project is the grand prize winner of the hackathon at Dreamhack Winter 2014. It is made by me and a friend for the Oculus Rift. The goal of the game is to navigate through the different levels with the help of the head tracking ability of the Oculus Rift.<br/><br/>I made all the graphics, 3D modelling and some movement of the objects. During this project I improved my abilities to work and deliver something in a very short and hectic timeframe.<br/><br/>Gameplay: <a href="https://www.youtube.com/watch?v=PeqhI-iXxFM" target="_blank">https://www.youtube.com/watch?v=PeqhI-iXxFM</a>'
			}
		]
	},

	methods: {
		isOdd: function(n) {
			if (parseInt(n) % 2 == 0) {
				return false;
			}
			return true;
		}
	},

	ready: function() {
		var galleryElems = document.querySelectorAll('.slider');

		for ( var i=0, len = galleryElems.length; i < len; i++ ) {
			var galleryElem = galleryElems[i];
			new Flickity( galleryElem, {
				// options
				cellAlign: 'center',
				contain: true,
				imagesLoaded: true,
				lazyLoad: 2,
				wrapAround: true
			});
		}
	}
});

hash = "";

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
