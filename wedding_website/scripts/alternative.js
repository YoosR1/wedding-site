
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
		setTimeout(slideShow, 5000);
	}
	slideShow();
})

$(document).ready(function() {
	//people filter
	function peopleFilter(target) {
		$(".filter-btn").removeClass("active");
		$(".filter-btn[data-target='" + target + "']").addClass("active");
		$(".people-item").hide();
		$(".people-item[data-category='" + target + "']").fadeIn(2000);
	}

	peopleFilter($(".filter-btn.active").attr("data-target"));

	$(".filter-btn").click(function() {
		if(!$(this).hasClass("active")) {
			peopleFilter($(this).attr("data-target"));
		}
	})
})
