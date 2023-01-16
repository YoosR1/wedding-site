
$(window).on("load",function() {
	// Home Section Slideshow
	let slideIndex = 0;
	const BACKGROUND_IMAGES = ['url("img/slides/slide_1.jpg")', 'url("img/slides/slide_2.jpg")', 'url("img/slides/slide_3.jpg")'];
	slideLen = BACKGROUND_IMAGES.length;

	function transitionImage() {
		$("#slideshow").css({'background-image': BACKGROUND_IMAGES[slideIndex]});
			
		if (slideIndex == slideLen - 1) {
			slideIndex = 0;
		}
		else {
			slideIndex++;
		}

		$("#slideshow").animate({opacity: '1'}, "slow");
	}
	
	function slideShow() {
		$("#slideshow").animate({opacity: '0'}, "slow", transitionImage);
		setTimeout(slideShow, 10000);
	}
	slideShow();
})

	

