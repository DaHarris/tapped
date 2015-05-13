var menuPull = function(brewName) {

	var menuRight = document.getElementById( 'cbp-spmenu-s2' );
	classie.add( menuRight, 'cbp-spmenu-open' );
	$('.brewery-name').html(brewName + '<br />');

	$.ajax({
		data: {brewery_name: brewName},
		type: 'post',
		url: "/breweries/brewery",
		success: function(data){
			addAddress(data);
			addLogo(data);
		}
	});
};


function addAddress(data){
	$('.brewery-info').html(data.streetAddress + '<br/>' + data.phone);
}

function addLogo(data){
	$('h4').html('<img src='+ data.logo + '></img>');
}
