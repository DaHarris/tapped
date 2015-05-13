var menuPull = function(brewName) {

	var menuRight = document.getElementById( 'cbp-spmenu-s2' );
	classie.add( menuRight, 'cbp-spmenu-open' );
	$('.brewery-name').text(brewName);
	$('.brewery-name').prepend('<i class="fi-x"></i>' + " ");
	$('.description').text("");
	$('.address').text("");
	$('.phone').text("");
	$('.est').text("");

	$.ajax({
		data: {brewery_name: brewName},
		type: 'post',
		url: "/breweries/brewery",
		success: function(data){
			addAddress(data);
		}
	});
};


function addAddress(data){
	$('.est').append("est. " + data.established);
	$('.logo').attr("src", data.logo);
	$('.description').append(data.description);
	$('.address').append(data.streetAddress + ", " + data.zipcode);
	$('.phone').append(data.phone)
	$('.brewery-info').html('<br>' + data.streetAddress + '<br/>' + data.phone);
}
