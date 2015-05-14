$(document).ready(function(){

  $('body').on('click', '.fi-x', function(){
    $('#cbp-spmenu-s2').removeClass('cbp-spmenu-open');
    $('#map-canvas').css('width','100%');
  });

  $('.signin').on('click', function(){
    $('#signInModal').foundation('reveal', 'open');
  });

  $('.add-beer').on('click', function(){
    $('#beerModal').foundation('reveal', 'open');
  });

  $('.new-beer').on('click', function(){
    var brewName = $('.brewery-name').text();
    $("input[id=brewery_name]").val(brewName);
    // $("input[id=hidden_field_id]").val(id)
    // $.ajax({
    //   data: {brewery_name: brewName},
    //   type: 'post',
    //   url: "/beers/create",
    //   dataType: 'json',
    //   success: function(resp){
    //       alert("Data");
    //     }
    // });
  });


  $('.new-beer').on('click', function(e){
    e.preventDefault();
    var formData = new FormData();
    var params = $("#new_beer").serializeArray();
    for (var i=0;i<params.length;i++) {
      formData.append(params[i].name, params[i].value);
    }
    formData.append("beer[beer_pic]", $('#beer_beer_pic')[0].files[0]);
    $.ajax({
      data: formData,
      type: 'post',
      cache: false,
contentType: false,
processData: false,
      url: "/beers/create"
    })
    .done(function(data){
      if($.isArray(data) === true) {
        var errors = data;
        for(var i = 0; i < errors.length; i++){
          $('#beer-form > ul').append('<li>'+ errors[i] + '</li>');
        }
      } else {
        $('#new_beer')[0].reset();
        $('#beer-form >ul').text("Beer was successfully created. Add another!");
        addNewBeers(data);
      }
    });
  });

});

function addNewBeers(data){
	$('.brews').append("<div class='brew' id=" + data.beer_name + ">");
	var id = "#" + data.beer_name;
	$(id).append("<img src=" + data.beer_pic.url + " id='beer-image'></img>");
	$(id).append("<h3 id='beer-name'>" + data.beer_name + "</h3>");
	$(id).append("<h6 id='beer-type'>Type: " + data.type_of + "</h6>");
	$(id).append("<p id='beer-info'>IBU:" + data.ibu + "    ABV:" + data.abv + "</h3>");
	$(id).append("<p id='beer-description'>" + data.description + "</p></div>");
}
