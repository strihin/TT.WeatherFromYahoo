function updateState() {
	var city = $(':selected', '#cities');

	if (city.val() == "0") {
		$("#temp").html("Select any city for definition of weather there.");
	}
	else {
		var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city.text() + "') and u='c'"

		$('#temp').html("Loading...");
		$.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json")
		.success(function (data) {	
			$('#temp').html("Temperature in " + city.text() + " is " + data.query.results.channel.item.condition.temp + "°C");
		});
	}
}

$(function () {
	$('#cities').change(function () {
		updateState();
	});

	setInterval(function () {
		updateState();
	}, 10000);
});
$(function () {
	setInterval(function() {
	var sl = $(this).attr("rel"); 
	 $(".nav span").removeClass("on"); 
	 $(this).addClass("on"); 
	 var obj = $(this).attr("rel"); 
	 var slider=$(".slider"+obj);
	 sliderJS(obj, slider); 
	 return false;	
	},1000);
});