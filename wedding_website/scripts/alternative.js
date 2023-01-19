
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
	// fixed header
	$(window).scroll(function(){
		if($(this).scrollTop() > 100) {
			$(".header").addClass("fixed");
		}
		else {
			$(".header").removeClass("fixed");
		}
	})


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


	//gallery popup
	const wHeight = $(window).height();
	$(".gallery-popup img").css("max-height", wHeight + "px");

	let itemIndex = 0;
	const totalGalleryItems = $(".gallery-item").length;
	
	$(".gallery-item").click(function() {
		itemIndex = $(this).index();
		$(".gallery-popup").addClass("open");
		$(".gallery-popup .gp-img").hide();
		gpSlideShow();
	})

	$(".gp-controls .next").click(function() {
		if (itemIndex == totalGalleryItems - 1) {
			itemIndex = 0;
		}
		else {
			itemIndex++;
		}
		$(".gallery-popup .gp-img").fadeOut(function() {
			gpSlideShow();
		})
	})

	$(".gp-controls .prev").click(function() {
		if (itemIndex == 0) {
			itemIndex = totalGalleryItems - 1;
		}
		else {
			itemIndex--;
		}
		$(".gallery-popup .gp-img").fadeOut(function() {
			gpSlideShow();
		})
	})

	function gpSlideShow() {
		const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-large");
		$(".gallery-popup .gp-img").fadeIn().attr("src", imgSrc);
		$(".gp-counter").text((itemIndex + 1) + "/" + totalGalleryItems);
	}

	// close gallery popup
	$(".gp-close").click(function() {
		$(".gallery-popup").removeClass("open");
	})

	// hide gallery popup when clicked outside of gp-container
	$(".gallery-popup").click(function(event) {
		if($(event.target).hasClass("open")) {
			$(".gallery-popup").removeClass("open");
		}
	})
})
