
$(window).on("load",function() {
	// Home Section Slideshow
	let slideIndex = 0;
	const backgroundImages = ['url("img/slides/slide_1.jpg")', 'url("img/slides/slide_2.jpg")', 'url("img/slides/slide_3.jpg")'];
	slideLen = backgroundImages.length;

	function transitionImage() {
		$("#slideshow").css({'background-image': backgroundImages[slideIndex]});
			
		if (slideIndex == slideLen - 1) {
			slideIndex = 0;
		}
		else {
			slideIndex++;
		}

		// $("#slideshow").fadeTo("fast", 1);
		$("#slideshow").animate({opacity: '1'}, "slow");
	}
	
	function slideShow() {
		// $("#slideshow")[0].style.backgroundImage = backgroundImages[slideIndex];
		// $("#slideshow").fadeTo("fast", 0.15, transitionImage);
		$("#slideshow").animate({opacity: '0'}, "slow", transitionImage);
		setTimeout(slideShow, 5000);
	}
	slideShow();
})

	

