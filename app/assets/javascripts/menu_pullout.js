var menuPull = function(brewName) {
	var
	menuRight = document.getElementById( 'cbp-spmenu-s2' );
	// showRight = document.getElementById( 'showRight' ),
	// body = document.body;

	// showRight.onclick = function() {
	// classie.toggle( this, 'active' );
	classie.add( menuRight, 'cbp-spmenu-open' );
	$('.brewery-name').text(brewName);
	// disableOther( 'showRight' );

};
