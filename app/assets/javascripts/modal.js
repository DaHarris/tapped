$(document).ready(function(){
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
    console.log(e);
  });


});
