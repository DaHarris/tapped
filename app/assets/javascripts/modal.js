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

});
