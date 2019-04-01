$(document).ready(function() {

	// Overflow

	$(".overflow").on('click', function(e) {
	 	if($(this).hasClass("hidden") === true) {
	 		$(this).removeClass("hidden");
	 		
	 	}
	 	else {
	 		if (e.target !== this) {
	    		return;
			}
	 	  	$(this).addClass("hidden");
	 	  	$(this).children().addClass('hidden');
	 	}
	});

	// $(".overflow").on('click', 'div', false);
	// $(".overflow").on('click', 'form', false);

	// Show policy

	$(".show__policy").on('click', function() {
		showOverflow();
		$('.overflow').children().addClass('hidden');
		$('.policy').removeClass('hidden');
	});

	// Show popup 

	$(".s1__container__lamps__item__content__btn").on('click', function(event) {
		showOverflow();


		$('.popup').removeClass('hidden');
	});
	
	// Comeback

	$(document).mouseleave(function(e){
	    if (e.clientY < 0) {
	        if ($("div").is(".comeback") === true) {
	    	    showOverflow();
	            $(".comeback").removeClass('hidden');
	        }
	    }    
	});
	$(".comeback .close").on('click', function() {
        if (($(".comeback").is(':visible'))) {
            
            $(".comeback").remove();
            closeOverflow();
        }
        
    });

	// Close popup

	$('.close').on('click', function() {
		closeOverflow();
	});

	
	

	function showOverflow() {
		$('.overflow').removeClass('hidden');

	}

	function closeOverflow() {
		
		$('.overflow').addClass("hidden");
	 	$('.overflow').children().addClass('hidden');
	}

	// Slider
	if ($(window).width() < 551) {
		$(".s4__content__container").slick({
			arrows: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: true
		})
	}
	else if ($(window).width() < 992) {
		$(".s4__content__container").slick({
			arrows: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
			dots: true
		})
	}

	// Lamp Name
	$(".s1__container__lamps__item__content__btn").on('click', function () {
	    var lampName = $(this).parent().find('.s1__container__lamps__item__content__name').text();
	    
	    
	    $(".variable__inp").val(lampName);
	    console.log($(".variable__inp").val());
	    
	})

	

})	 