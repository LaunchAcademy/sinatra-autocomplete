$(function() {
  $("#search").autocomplete({
    source: function(request, response) {
      $.ajax({
        url: '/',
        dataType: 'json',
        data: {
          search: request.term
        },
        success: function( data ) {
          var results = $.map(data, function(movie, index) {
            return { id: movie.id, label: movie.title, value: movie.title };
          });

          response(results);
        }
      });
    }
  });
});
