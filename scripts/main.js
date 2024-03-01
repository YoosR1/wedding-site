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

document.getElementById("RSVP-SEND").onclick = function() = {
    console.log("Pressed");
    return false;
};

function handleRSVP() {
    console.log("Handle RSVP was called");
/*
    return gapi.client.sheets.spreadsheets.values.append({
      "spreadsheetId": "1ZWbUMwH50Vq5tlycMTSiMPS9ILvuCjgbhCkQaQLy7tU",
      "range": "A1:G1",
      "includeValuesInResponse": true,
      "insertDataOption": "INSERT_ROWS",
      "valueInputOption": "USER_ENTERED",
      "resource": {}
    }).then(function(response) {
                      // Handle the results here (response.result has the parsed body).
                      console.log("Response", response);
                    },
                    function(err) { console.error("Execute error", err); });*/
}

// Abandoned at part 5