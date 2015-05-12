var menuPull = function(brewName) {
	var
	menuRight = document.getElementById( 'cbp-spmenu-s2' );
	// showRight = document.getElementById( 'showRight' ),
	// body = document.body;

	// showRight.onclick = function() {
	// classie.toggle( this, 'active' );
	classie.add( menuRight, 'cbp-spmenu-open' );
	$('.brewery-name').text(brewName);

	$.ajax({
		data: {brewery_name: brewName},
		type: 'post',
		url: "/breweries/brewery",
		success: function(data){
			addAddress(data);
		}
	});


	// disableOther( 'showRight' );

};

function addAddress(data){
	$('.side-content').html(data.streetAddress + '<br/>' + data.phone);
	$('.brewery-name').append('<img class="logo" src='+ data.logo + '></img>');
}
