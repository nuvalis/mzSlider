(function ($) {
	$.fn.moluZlider = function (options) {

		var totalSlides, slideDuration, animationDur, element = this,
			currentSlide, slideTimer, nextSlide;

		var settings = $.extend({
			// These are the defaults.
			debug: false,
			slideDuration: 4000,
			animationDur: 1000,
			element: "li",
			currentSlide: 0,
			effect: "margin-left",
			effectStart: 0,
			effectEnd: "150%",
		}, options);

		// Find all li elements in targeted parent element
		var slides = element.find(settings.element);

		totalSlides = slides.length;

		effectWrapper = {};
		effectWrapper[settings.effect] = settings.effectStart;
		effectWrapper['z-index'] = 3;

		slides.eq(0).css(effectWrapper);

		timer(); // Init

		function changeSlide(command) {
			var command, nextSlide;

			debugLog("Command:" + command);

			if (command === "next") {

				debugLog("Next slide " + settings.currentSlide);

				nextSlide = settings.currentSlide + 1;

				if (nextSlide > totalSlides - 1) {
					nextSlide = 0;
				}

			} else if (command === "prev") {

				nextSlide = settings.currentSlide - 1;

				if (nextSlide < 0) {
					nextSlide = totalSlides - 1;
				}

			} else {

				nextSlide = command;

			}

			animateSlide(settings.currentSlide, nextSlide);

		}

		function animateSlide(currentSlide, nextSlide) {

			debugLog("Slide should be " + currentSlide);

			slides.eq(settings.currentSlide).css('z-index', 3);

			effectWrapper['z-index'] = 2;
			slides.eq(nextSlide).css(effectWrapper);

			var styles = {};
			styles['transition'] =  settings.effect + ' ' + settings.animationDur + 'ms';
			styles[settings.effect] = settings.effectEnd;

			slides.eq(nextSlide).css('display', "block"); // Removes Glitch and Reveals next Slide
			slides.eq(settings.currentSlide).css(styles);


			var cssTimer = setTimeout(function () {
				slides.eq(settings.currentSlide).removeAttr('style');
				slides.eq(settings.currentSlide).css('display', "none"); // Removes Glitch and hides currentSlide
				debugLog("Waiting cssTimer... " + settings.animationDur + "ms");
				settings.currentSlide = nextSlide;
				timer();
			}, settings.animationDur);

		}

		function timer() {

			debugLog("Waiting... " + settings.slideDuration + "ms");
			slideTimer = setTimeout(function () {
				changeSlide('next');
			}, settings.slideDuration);

		}

		function debugLog(string) {

			if (settings.debug === true) {
				console.log(string);
			}

		}

	};
})(jQuery);