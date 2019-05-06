$(document).ready(function() {
	// Burger
	// $('.burger').on('click', function(event) {
	// 	$(this).toggleClass('active');
	// 	$('.header').toggleClass('active');
	// 	$('.wrapper').toggleClass('active');
	// 	$('.overlay').toggleClass('active');
	// 	event.preventDefault();
	// });

	var burger = document.querySelector('.burger');
	var header = document.querySelector('.header');
	var wrapper = document.querySelector('.wrapper');
	var overlay = document.querySelector('.overlay');
	burger.addEventListener('click', function openMenu(e){

		if(burger.classList.contains('active') == false){
			burger.classList.add('active');
			header.classList.add('active');
			wrapper.classList.add('active');
			overlay.classList.add('active');
			overlay.addEventListener('click', closeMenu);
			burger.addEventListener('click', closeMenu);
			e.preventDefault();
		} else {
			closeMenu();
			e.preventDefault();
		}
		function closeMenu(e){
			burger.classList.remove('active');
			header.classList.remove('active');
			wrapper.classList.remove('active');
			overlay.classList.remove('active');
			burger.removeEventListener('click', closeMenu);
			burger.addEventListener('click', openMenu);
		}
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
		.to('.intro-image', 5, {
			scale: 1.3,
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
		.from('.intro-btn', 1.5, {
			opacity: 0,
			y: -50,
			ease: SlowMo.easeIn
		}, '0')
		.staggerFrom('.intro-advantages__item', 0.5, {
			opacity: 0,
			x: 50,
			ease: SlowMo.easeIn
		}, 0.4, '0.4')

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
			.staggerFrom('.benefit-link', 0.5, {
				opacity: 0, 
				y: 50,
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

	$('.articleSingle').each(function() {
		var articleSingle = new TimelineMax;
		articleSingle
			.staggerFrom('.articleSingle-item', 0.5, {
				opacity: 0, 
				x: 50,
				ease: SlowMo.easeIn
			}, 0.2)
		
		var articleSingle_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(articleSingle)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});

	$('.benefitConstructor').each(function() {
		var benefitConstructor = new TimelineMax;
		benefitConstructor
			.staggerFrom('.benefitConstructor-item', 0.5, {
				opacity: 0, 
				x: 50,
				ease: SlowMo.easeIn
			}, 0.2)
			.staggerFrom('.benefitConstructor-arrow', 0.5, {
				opacity: 0, 
				y: 50,
				ease: SlowMo.easeIn
			}, 0.2)
		
		var benefitConstructor_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(benefitConstructor)
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
			.from('.aboutPage-hexagon', 0.5, {
				opacity: 0, 
				x: 150,
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

	$('.smartMap').each(function () {
		var smartMap = new TimelineMax;
		smartMap
			.from('.smartMap-item', 0.5, {
				opacity: 0,
				x: 20,
				ease: SlowMo.easeIn
			}, '0.6')
		var smartMap_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(smartMap)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});

	$('.diler').each(function () {
		var diler = new TimelineMax;
		diler
			.staggerFrom('.diler-item', 0.5, {
				opacity: 0,
				y: 20,
				ease: SlowMo.easeIn
			}, '0.2')
		var diler_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(diler)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});

	$('.contact-item').each(function() {
		var contact_name = $(this).find('.contact-name');
		var contact_text = $(this).find('.contact-text');

		var contact = new TimelineMax;
		contact
			.from(contact_name, 0.5, {
				opacity: 0,
				x: 50,
				ease: SlowMo.easeIn, 
			}, '0')
			.from(contact_text, 0.5, {
				opacity: 0,
				x: 50,
				ease: SlowMo.easeIn
			}, '0.2')
		var contact_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(contact)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});

	$('.offer').each(function() {
		var offer_inp = $(this).find('.offer-input');
		var offer_subm = $(this).find('.offer-submit');

		var offer = new TimelineMax;
		offer
			.from(offer_inp, 0.5, {
				opacity: 0,
				x: 50,
				ease: SlowMo.easeIn
			}, '0.5')
			.from(offer_subm, 0.5, {
				opacity: 0,
				y: 50,
				ease: SlowMo.easeIn
			}, '0.2')
		var offer_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(offer)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});

	$('.videoFollow').each(function() {
		var videoFollowContent = $(this).find('.videoFollow-content, .videoFollow-btn');
		var videoFollowLine = $(this).find('.videoFollow-line');

		var videoFollow = new TimelineMax;
		videoFollow
			.from($('.videoFollow'), 0.5, {
				opacity: 0,
				x: 50,
				ease: SlowMo.easeIn
			}, '0')
			.from(videoFollowContent, 0.5, {
				opacity: 0,
				x: 50,
				ease: SlowMo.easeIn
			}, '0.7')
			.to(videoFollowLine, 0.5, {
				bottom: 0,
				ease: SlowMo.easeIn
			}, '0.4')
		var videoFollow_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(videoFollow)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});

	$('.video').each(function() {
		var videoPlayer = $(this).find('.video-player');
		var videoItem = $(this).find('.video-listItem');

		var video = new TimelineMax;
		video
			.from(videoPlayer, 0.5, {
				opacity: 0,
				x: 50,
				ease: SlowMo.easeIn
			}, '0')
			.staggerFrom(videoItem, 0.5, {
				opacity: 0,
				x: 50,
				ease: SlowMo.easeIn
			}, '0.7')

		var video_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(video)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});

	$('.expl').each(function() {
		var explElem = $(this).find('.expl-text');
		var explElem2 = $(this).find('.expl-subtitle');
		var explElem3 = $(this).find('.expl-link');

		var expl = new TimelineMax;
		expl
			.staggerFrom(explElem, 0.5, {
				opacity: 0,
				x: 50,
				ease: SlowMo.easeIn
			}, '0.2')
			.staggerFrom(explElem2, 0.5, {
				opacity: 0,
				y: 50,
				ease: SlowMo.easeIn
			}, '0.7')
			.staggerFrom(explElem3, 0.5, {
				opacity: 0,
				y: 50,
				ease: SlowMo.easeIn
			}, '2')

		var expl_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(expl)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});

	$('.product').each(function() {
		var prodElem = $(this).find('.product-card');
		var prodElem2 = $(this).find('.product-tabs');
		var prodElem3 = $(this).find('.part-item');
		var prodElem4 = $(this).find('.part-line');

		var product = new TimelineMax;
		product
			.staggerFrom(prodElem, 1, {
				opacity: 0,
				x: 50,
				ease: SlowMo.easeIn
			}, '0.5')
			.staggerFrom(prodElem2, 0.5, {
				opacity: 0,
				y: 50,
				ease: SlowMo.easeIn
			}, '0.7')
			.staggerFrom(prodElem3, 0.5, {
				opacity: 0,
				y: 50,
				ease: SlowMo.easeIn
			}, '0.1')

		var product_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(product)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});

	$('.order').each(function() {
		var order = new TimelineMax;
		order
			.staggerFrom('.order-header', 0.5, {
				opacity: 0, 
				y: 50,
				ease: SlowMo.easeIn
			}, 0.2)
			.from('.order-table', 0.5, {
				opacity: 0, 
				x: 50,
				ease: SlowMo.easeIn
			}, 0.2)
		
		var order_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(order)
		.addIndicators({
			name: "1 (duration: 0)"
		})
		.addTo(controller)
	});

	$('.more').each(function() {
		var more = new TimelineMax;
		more
			.staggerFrom('.more-image', 0.5, {
				opacity: 0, 
				y: 50,
				ease: SlowMo.easeIn
			}, 0.2)
			.from('.more-name', 0.5, {
				opacity: 0, 
				x: 50,
				ease: SlowMo.easeIn
			}, 0.2)
			.from('.more-link', 0.5, {
				opacity: 0, 
				x: 50,
				ease: SlowMo.easeIn
			}, 0.2)
		
		var more_scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(more)
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
	if(document.querySelector('.sertificates-slider')){
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
	}
});

$(document).ready(function(){
	if(document.querySelector('.sertificates-slider_home')){
		$('.sertificates-slider_home').slick({
			slideToShow: 1,
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
	}
});

$(document).ready(function(){
	if ($(window).width() < 576) {
		if(document.querySelector('.press-wrapper_home')){
			$('.press-wrapper_home').slick({
				infinite: false,
				autoplay: false,
				prevArrow: '<div class="press-wrapper-arrow arrows-arrow arrows-arrow_prev"><span></span></div>',
				nextArrow: '<div class="press-wrapper-arrow arrows-arrow arrows-arrow_next"><span></span></div>',
			});
			
			$('.press-wrapper-arrow').wrapAll('<div class="press-wrapper-arrows arrows press-wrapper-item"> </div>');
		};
	};
});

$(document).ready(function(){
	if(document.querySelector('.partnersSlider-slider')){
		$('.partnersSlider-slider').slick({
			infinite: false,
			autoplay: false,
			variableWidth: true,
			prevArrow: '<div class="partnersSlider-arrow arrows-arrow arrows-arrow_prev"><span></span></div>',
			nextArrow: '<div class="partnersSlider-arrow arrows-arrow arrows-arrow_next"><span></span></div>',
		});
		$('.partnersSlider-arrow').wrapAll('<div class="partnersSlider-arrows arrows partnersSlider-item"> </div>');	
	}
});

//smartMap
$(document).ready(function(){
	$(window).load(function(){
		if(document.querySelector('.smartMap-item')){
			var smartMap = document.querySelector('.smartMap-item');
			var svgDoc = smartMap.contentDocument;
			var points = svgDoc.querySelectorAll('.map-point');
			for (let i = 0; i < points.length; i++) {
				points[i].addEventListener('mouseenter', function(e){
					var index = parseInt(this.getAttribute('data-index'));
					var modal = document.querySelector('.smartMap-modal[data-index="' + index +'"]');
					var X = e.x;
						var Y = e.y;
						var top = Y + 10 + 'px';
						var left = X + 10 + 'px';
						$(modal).css({
							top: top,
							left: left
						});
					var handler = function(){
						modal.classList.remove('active');
						modal.removeEventListener('transitionend', handler);
					};
					modal.classList.add('enter');

					raf(function(){
						modal.classList.add('active');
						modal.classList.remove('enter');
					});
					this.addEventListener('mouseleave', function(e){
						var handler = function (){
							modal.classList.remove('exit');
							modal.classList.remove('active');
							modal.removeEventListener('transitionend', handler);
						};
						modal.classList.add('exit');
						modal.addEventListener('transitionend', handler);
					});
				});
			};
		};
	});
});

function raf(fn){
	window.requestAnimationFrame(function(){
		window.requestAnimationFrame(function(){
			fn();
		})
	})
}

//форма на странице "Продукт"
$(document).ready(function(){
	if(document.querySelector('.product-tabs')){
		$('.product-tab').on('click', function(e){
			e.preventDefault();
			var tabNew = this;
			var id = this.getAttribute('data-id');
			var elemNew = document.querySelector('.part-wrapper[data-id="'+ id +'"]');
			var activ = document.querySelector('.product-tab.btn.active');
			var activeElem = document.querySelector('.part-wrapper.active');
		
			if($(elemNew).hasClass('active') == false){
				animateExit(activeElem);
				activ.classList.remove('active');
				animateExit(activ);
				animateActive(tabNew);
				animateActive(elemNew);
			}
		});

		$('.part-item').on('click', function(e){

			if($(e.target).hasClass('part-add')){
				e.preventDefault();

				if($(this).hasClass('active') == false){
					var id = this.getAttribute('data-detail');
					var add = this.querySelector('.part-add');
					var elem = document.querySelector('.order-input[data-detail="'+ id +'"]');
					var wrapper = document.querySelector('.order-row[data-detail="'+ id +'"]');
					
					if($(wrapper).hasClass('active') == false){
						animateActive(this);
						animateActive(wrapper);
						add.text = 'Добавлено в комплект';
						elem.checked = true;
						elem.classList.add('active');
					};
				};
			}
		});

		$('.order-row').on('click', function(e){
			if($(e.target).hasClass('order-cancel')){

				var id = this.getAttribute('data-detail');
				var inp = this.querySelector('.order-input');
				var wrapper = document.querySelector('.part-item[data-detail="'+ id +'"]');
				var elem = wrapper.querySelector('.part-add');
				
				if($(inp).hasClass('active') == true){
					inp.checked = false;
					animateExit(wrapper);
					animateExit(this);
					elem.text = 'Добавить в комплектацию';
					wrapper.classList.remove('active');
					wrapper.classList.remove('exit');
				} 
			};
		});

		function animateActive (modal){
			var handler = function(){
				modal.classList.remove('active');
				modal.removeEventListener('transitionend', handler);
			};
			modal.classList.add('enter');

			raf(function(){
				modal.classList.add('active');
				modal.classList.remove('enter');
				updateTableNumeration();
			});
		};

		function animateExit (modal){
			var handler = function (){
				console.log(2);
				modal.classList.remove('exit');
				modal.classList.remove('active');
				modal.removeEventListener('transitionend', handler);
				updateTableNumeration();
			};
			modal.classList.add('exit');
			modal.addEventListener('transitionend', handler);
		};

		function updateTableNumeration() {
				$('.order-row.active').each(function(i) {
					$(this).find('.order-num').html(i + 1);
				});
		}; 
	};
});

//модальное окно
$('.btn_modal').on('click', function(e){
			
	e.preventDefault();
	var modal = document.querySelector('.modal');
	var newForm = document.createElement('form');
	newForm.className = "modal-window";
	newForm.setAttribute('method', 'POST');
	newForm.setAttribute('action', 'submit.php');
	newForm.innerHTML = '<img src="images/cross-mark.svg" class="modal-close"></img><div class="title-wrap"><h3 class="title title_large">Оставьте заявку и мы свяжемся с Вами в ближайшее время<span class="title-line"></span></h3></div><input type="text" class="offer-input" placeholder="Ваше имя"><input type="tel" class="offer-input" placeholder="+7(___) ___-__-__"><input type="submit" class="btn btn-primary offer-submit offer-submit" value="Отправить"></input>'; 
	modal.appendChild(newForm);
	var btnClose = modal.querySelector('.modal-close');
	animateActive(modal);	
	$('body').css('overflow-y', 'hidden');
	
	//удаление формы после закрытия окна и отправки сообщения
	function closeModal(){
		animateExit(modal);
		$('body').css('overflow-y', 'scroll');
		modal.removeChild(newForm);
	};
	

	function animateActive (modal){
		var handler = function(){
			modal.classList.remove('active');
			modal.removeEventListener('transitionend', handler);
		};
		modal.classList.add('enter');
	
		raf(function(){
			modal.classList.add('active');
			modal.classList.remove('enter');
		});
	};

	function animateExit (modal){
		var handler = function (){
			modal.classList.remove('exit');
			modal.classList.remove('active');
			modal.removeEventListener('transitionend', handler);
		};
		modal.classList.add('exit');
		modal.addEventListener('transitionend', handler);
	};

	btnClose.addEventListener('click', closeModal);
	modal.addEventListener('submit', closeModal);
});

$('.part-photo').on('click', function(e){

	var modal = document.querySelector('.modal');
	var modalBg = modal.querySelector('.modal-bg')
	var btnClose = document.createElement('img');
	btnClose.setAttribute('class', 'modal-close modal-close_gallery');
	btnClose.setAttribute('src', 'images/cross-mark.svg');
	var photo = this.cloneNode(true);
	modal.appendChild(photo);
	modal.appendChild(btnClose);
	var btnClose = modal.querySelector('.modal-close');
	animateActive(modal);	
	photo.classList.add('active');
	$('body').css('overflow-y', 'hidden');
	
	//удаление формы после закрытия окна и отправки сообщения
	function closeModal(){
		animateExit(modal);
		$('body').css('overflow-y', 'scroll');
		modal.removeChild(btnClose);
		modal.removeChild(photo);
	};
	

	function animateActive (modal){
		var handler = function(){
			modal.classList.remove('active');
			modal.removeEventListener('transitionend', handler);
		};
		modal.classList.add('enter');
	
		raf(function(){
			modal.classList.add('active');
			modal.classList.remove('enter');
		});
	};

	function animateExit (modal){
		var handler = function (){
			modal.classList.remove('exit');
			modal.classList.remove('active');
			modal.removeEventListener('transitionend', handler);
		};
		modal.classList.add('exit');
		modal.addEventListener('transitionend', handler);
	};

	btnClose.addEventListener('click', closeModal);
	modalBg.addEventListener('click', closeModal);
	modal.addEventListener('submit', closeModal);
});

$('.smartMenu-link').on('click', function(e){

	var modal = this.querySelector('.smartMenu-linkHeader');
	var modalDesc = this.querySelector('.smartMenu-desc');
	var arrow = this.querySelector('.smartMenu-arrow');
	var arrowSpan = this.querySelector('.smartMenu-arrow span');

	if(e.target == arrowSpan){
		if($(arrow).hasClass('active') == false){
			animateActive(modal);
			animateActive(modalDesc);
			arrow.classList.add('active');
		} else {
			animateExit(modal);
			animateExit(modalDesc);
			arrow.classList.remove('active');
		}
	}

	
	function animateActive (modal){
		var handler = function(){
			modal.classList.remove('active');
			modal.removeEventListener('transitionend', handler);
		};
		modal.classList.add('enter');
	
		raf(function(){
			modal.classList.add('active');
			modal.classList.remove('enter');
		});
	};

	function animateExit (modal){
		var handler = function (){
			modal.classList.remove('exit');
			modal.classList.remove('active');
			modal.removeEventListener('transitionend', handler);
		};
		modal.classList.add('exit');
		modal.addEventListener('transitionend', handler);
	};

});













