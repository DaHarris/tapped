$(document).ready(function(){
  $(".been-here > a").on('click', function(){

    var brewery = $('.brewery-name').text();
    $.post( "/breweries/find_brewery", { brewery_name: brewery} )
    .done(function(data) {
      $.ajax({
        url: '/tours/create',
        data: {tour: {brewery_id: data.id, been_here: true}},
        type: 'post'
      })
      .done(function(){
         $('.been-here > a').text('You Drank Here!');
      });
    });
  });
});
