
$(window).on("load",function() {
	// Home Section Slideshow
	let slideIndex = $(".slide.active").index();
	const slideLen = $(".slide").length;
	
	function slideShow() {
		$(".slide").removeClass("active").eq(slideIndex).addClass("active");
		if (slideIndex == slideLen - 1) {
			slideIndex = 0;
		}
		else {
			slideIndex++;
		}
		setTimeout(slideShow, 5000);
	}
	slideShow();
})

// Abandoned at part 5