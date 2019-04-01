$(document).ready(function () {
	
	// Filter

	var targetName = '',
		btnNew = 'filter__btn__new',
		btnRetro = 'filter__btn__retro',
		btnModern = 'filter__btn__modern',
		btnAll = 'filter__btn__all',
		activeBtn;

	$(".filter__btn").on('click', function() {

		activeBtn = $(this);

		switch(true) {
			case $(this).hasClass(btnNew):
				targetName = btnNew;
				break;

			case $(this).hasClass(btnRetro):
				targetName = btnRetro;
				break;

			case $(this).hasClass(btnModern):
				targetName = btnModern;
				break;

			case $(this).hasClass(btnAll):
				targetName = btnAll;
				break;

		}

		Filter(targetName, activeBtn);
		
	})

	function Filter(targetName, activeBtn) {
		switch(targetName) {
			case btnNew:
				setActive(targetName, activeBtn);
				break;

			case btnRetro:
				setActive(targetName, activeBtn);
				break;

			case btnModern:
				setActive(targetName, activeBtn);
				break;

			case btnAll:
				$('.filter__btn').removeClass('filter__btn__active');
				activeBtn.addClass("filter__btn__active");
				$('.s1__container__lamps__item').addClass('visible');
				break;
		}
	}

	function setActive (targetName, activeBtn) {

		x = '.product-' + targetName.slice(13);
		$('.s1__container__lamps__item').removeClass('visible');
		$('.filter__btn').removeClass('filter__btn__active');
		$(x).addClass('visible');
		activeBtn.addClass('filter__btn__active');

	}

	// Show More Button

	$(".show__more__btn").on('click', function() {
		$('.show__more').css({'display':'block'});
		$(this).hide();
	})

	$(".show__more__btn__gallery").on('click', function() {
		$('.hidden-gallery').css({'display':'flex'});
		$(this).hide();
	})

	// Fancybox Gallery


	$(".fancybox").fancybox();


	// Section 5 Items

	$('.s5__container__wrapper__items__arrow').on('click', function() {
		var paragraph = $(this).next('p'),
			activePar = 's5__container__wrapper__items__par__active';
		
		paragraph.hasClass(activePar) == true ? paragraph.removeClass(activePar) : paragraph.addClass(activePar);
		if (paragraph.hasClass(activePar)) {
			$(this).removeClass('up').addClass('down');
		}
		else $(this).removeClass('down').addClass('up');
	})

	// Soft Scroll

	$('a[href^="#"]').bind("click", function(e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr("href")).offset().top
		}, 1000);
			e.preventDefault();
		});
	 return false;﻿


})