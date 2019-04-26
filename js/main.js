$(document).ready(function() {
	// Burger
	$('.burger').on('click', function(event) {
		$(this).toggleClass('active');
		$('.header').toggleClass('active');
		$('.wrapper').toggleClass('active');
		$('.overlay').toggleClass('active');
		event.preventDefault();
	});

	// Call
	$('.call').on('click', function() {
		$(this).toggleClass('active');
	});

	// Animation
	var intro = new TimelineMax;
	intro
		.from('.burger', 1, {
			opacity: 0,
			y: -20,
			ease: SlowMo.easeIn
		}, '0')
		.from('.call', 1, {
			opacity: 0,
			y: -20,
			ease: SlowMo.easeIn
		}, '0')
		.from('.intro-social__title', 0.5, {
			opacity: 0,
			x: 50,
			ease: SlowMo.easeIn
		}, '0')
		.staggerFrom('.intro-social__item', 0.5, {
			opacity: 0,
			x: 50,
			ease: SlowMo.easeIn
		}, 0.2, '0.2')
		.from('.intro-title', 0.5, {
			opacity: 0,
			y: -50,
			ease: SlowMo.easeIn
		}, '0.4')
		.from('.intro-text', 0.5, {
			opacity: 0,
			y: 50,
			ease: SlowMo.easeIn
		}, '0.4')
		.staggerFrom('.intro-advantages__item', 0.5, {
			opacity: 0,
			x: 50,
			ease: SlowMo.easeIn
		}, 0.2, '0.6')

	// Scroll
	var controller = new ScrollMagic.Controller();

	$('.title-wrap').each(function() {
		var title_caption = $(this).find('.title'),
			title_text = $(this).find('.title-text'),
			title_line = $(this).find('.title-line');

		var title = new TimelineMax;
		title
			.from(title_caption, 0.5, {
				opacity: 0,
				x: 50,
				ease: SlowMo.easeIn
			}, '0')
			.from(title_text, 0.5, {
				opacity: 0,
				x: 50,
				ease: SlowMo.easeIn
			}, '0.2')
			.to(title_line, 0.5, {
				bottom: 0,
				ease: SlowMo.easeIn
			}, '0.4')

		var title_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(title)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});

	$('.catalog').each(function() {
		var catalog = new TimelineMax;
		catalog
			.staggerFrom('.catalog-item', 0.5, {
				opacity: 0, 
				y: 50,
				ease: SlowMo.easeIn
			}, 0.2)
		
		var catalog_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(catalog)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});

	$('.benefit').each(function() {
		var benefit = new TimelineMax;
		benefit
			.staggerFrom('.benefit-item', 0.5, {
				opacity: 0, 
				x: 50,
				ease: SlowMo.easeIn
			}, 0.2)
		
		var benefit_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(benefit)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});

	$('.about').each(function () {
		var about = new TimelineMax;
		about
			.staggerFrom('.about-text', 0.5, {
				opacity: 0,
				y: 20,
				ease: SlowMo.easeIn
			}, 0.2, '0')
			.from('.about .btn', 0.5, {
				opacity: 0,
				x: 20,
				ease: SlowMo.easeIn
			}, '0.6')
		
		var about_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(about)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});

	$('.partners').each(function() {
		var partners = new TimelineMax;
		partners
			.staggerFrom('.partners-item', 0.5, {
				opacity: 0, 
				y: 50,
				ease: SlowMo.easeIn
			}, 0.2)
		
		var partners_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(partners)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});

	$('.articles').each(function() {
		var articles = new TimelineMax;
		articles
			.staggerFrom('.articles-item', 0.5, {
				opacity: 0, 
				y: 50,
				ease: SlowMo.easeIn
			}, 0.2)
		
		var articles_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(articles)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});

	$('.aboutPage-wrapper').each(function() {
		var aboutPage = new TimelineMax;
		aboutPage
			.staggerFrom('.aboutPage-item', 0.5, {
				opacity: 0, 
				x: 50,
				ease: SlowMo.easeIn
			}, 0.2)
		
		var aboutPage_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(aboutPage)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});

	$('.sertificates').each(function() {
		var sertificates = new TimelineMax;
		sertificates
			.staggerFrom('.sertificates-item', 0.5, {
				opacity: 0, 
				x: 50,
				ease: SlowMo.easeIn
			}, 0.2)
		
		var sertificates_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(sertificates)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});

	$('.partnersSlider').each(function() {
		var partnersSlider = new TimelineMax;
		partnersSlider
			.staggerFrom('.partnersSlider-item', 0.5, {
				opacity: 0, 
				x: 50,
				ease: SlowMo.easeIn
			}, 0.2)
		
		var partnersSlider_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(partnersSlider)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});

	$('.relations-list').each(function() {
		var relationsList = new TimelineMax;
		relationsList
			.staggerFrom('.relations-list__item', 0.5, {
				opacity: 0, 
				x: 50,
				ease: SlowMo.easeIn
			}, 0.2)
		
		var relationsList_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(relationsList)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});

	$('.press-wrapper').each(function() {
		var press = new TimelineMax;
		press
			.staggerFrom('.press-item', 0.5, {
				opacity: 0, 
				y: 50,
				ease: SlowMo.easeIn
			}, 0.2)

		
		var press_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(press)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});

	$('.press-loadmore').each(function() {
		var pressLoadmore = new TimelineMax;
		pressLoadmore
			.staggerFrom('.press-loadmore', 0.5, {
				opacity: 0,
				x: 20,
				ease: SlowMo.easeIn
			}, 0.3)
		
		var pressLoadmore_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(pressLoadmore)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});

	$('.archive').each(function () {
		var archive = new TimelineMax;
		archive
			.staggerFrom('.archive-elem', 0.5, {
				opacity: 0,
				y: 20,
				ease: SlowMo.easeIn
			}, 0.2)
		
		var archive_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(archive)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});

	$('.article').each(function () {
		var article = new TimelineMax;
		article
			.staggerFrom('.article-date, .article-text, .article-subtitle, .article-imageLabel, .article img', 0.5, {
				opacity: 0,
				x: 20,
				ease: SlowMo.easeIn
			}, '0.6')
			.staggerFrom('.article-listLabel, .article-list, .article-back', 0.5, {
				opacity: 0,
				y: 20,
				ease: SlowMo.easeIn
			}, '0.1')
		var article_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(article)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});


	// Map
	function initialize() {
		var mapOptions = {
			center: {
				lat: 53.217451,
				lng: 50.139775
			},
			zoom: 16,
			zoomControl: false,
			scrollwheel: false,
			mapTypeControl: false,
			streetViewControl: false,
			fullscreenControl: false,
			panControl: false,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.LARGE,
				position: google.maps.ControlPosition.LEFT_CENTER
			}
		};

		var map = new google.maps.Map(document.querySelector('.map'), mapOptions);
		var img = "images/location.png";

		var samara = new google.maps.Marker({
			position: mapOptions.center,
			map: map,
			icon: img
		});

		var styles = [
			{
				"featureType": "administrative.country",
				"elementType": "geometry",
				"stylers": [
					{
						"visibility": "simplified"
					},
					{
						"hue": "#ff0000"
					}
				]
			}
		]
	}
	google.maps.event.addDomListener(window, 'load', initialize);
});
$(document).ready(function() {
	//sertificate counter
	var all = $('.sertificates-slide').length;
	$('.sertificates-num_sum').text('/' + all);
});
//slick
$(document).ready(function(){
  $('.sertificates-slider').slick({
		infinite: false,
		autoplay: false,
		variableWidth: true,
		prevArrow: '<div class="sertificates-arrow arrows-arrow arrows-arrow_prev"><span></span></div>',
		nextArrow: '<div class="sertificates-arrow arrows-arrow arrows-arrow_next"><span></span></div>',
	});
	$('.sertificates-arrow').wrapAll('<div class="sertificates-arrows arrows sertificates-item"> </div>');
	$('.sertificates-arrow').on('click', function(){
		var index = parseInt($('.sertificates-slide.slick-current').attr('data-count'));
		$('.sertificates-num_current').text(index);
		var all = parseInt($('.sertificates-slide').length);
		$('.sertificates-num_sum').text('/' + all);
	});
});
$(document).ready(function(){
  $('.partnersSlider-slider').slick({
		infinite: true,
		autoplay: false,
		variableWidth: true,
		prevArrow: '<div class="partnersSlider-arrow arrows-arrow arrows-arrow_prev"><span></span></div>',
		nextArrow: '<div class="partnersSlider-arrow arrows-arrow arrows-arrow_next"><span></span></div>',
	});
	$('.partnersSlider-arrow').wrapAll('<div class="partnersSlider-arrows arrows partnersSlider-item"> </div>');
});

