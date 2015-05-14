var menuPull = function(brewName) {

	var menuRight = document.getElementById( 'cbp-spmenu-s2' );
	classie.add( menuRight, 'cbp-spmenu-open' );
	$('.brewery-name').text(brewName);
	$('.brewery-name').prepend('<i class="fi-x"></i>');
	$('.description').text("");
	$('.address').text("");
	$('.phone').text("");
	$('.est').text("");
	$('.brews').html("");

	$.ajax({
		data: {brewery_name: brewName},
		type: 'post',
		url: "/breweries/brewery",
		success: function(data){
			addAddress(data.brewery);
			addBeers(data.beers);
		}
	});
};

function addBeers(data){
	for (var i=0;i<data.length;i++) {
		$('.brews').append("<div class='brew' id=" + data[i].beer_name + ">");
		var id = "#" + data[i].beer_name;
		$(id).append("<img src=" + data[i].beer_pic.url + " id='beer-image'></img>");
		$(id).append("<h3 id='beer-name'>" + data[i].beer_name + "</h3>");
		$(id).append("<h6 id='beer-type'>Type: " + data[i].type_of + "</h6>");
		$(id).append("<p id='beer-info'>IBU:" + data[i].ibu + "    ABV:" + data[i].abv + "</h3>");
		$(id).append("<p id='beer-description'>" + data[i].description + "</p></div>");
	}
}

function addAddress(data){
	$('.est').append("est. " + data.established);
	$('.logo').attr("src", data.logo);
	$('.description').append(data.description);
	$('.address').append(data.streetAddress + ", " + data.zipcode);
	$('.phone').append(data.phone)
	$('.brewery-info').html('<br>' + data.streetAddress + '<br/>' + data.phone);
}
