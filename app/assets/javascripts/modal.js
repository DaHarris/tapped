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
    $.ajax({
      data: $("#new_beer").serialize(),
      type: 'post',
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
      }
      });


  });

});
