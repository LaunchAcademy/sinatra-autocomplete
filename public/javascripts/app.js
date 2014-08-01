$(function() {
  $("#search").autocomplete({
    source: function(request, response) {
      $.ajax({
        url: '/', // this should point to whatever route you're using
        dataType: 'json',
        data: {
          search: request.term // Send the search query parameter in the request
        },
        success: function( data ) {
          // The results dont come back in the format jquery ui expects
          // so we make a new array that holds objects in the format
          // that the autocomplete wants.
          var results = $.map(data, function(movie, index) {
            return { id: movie.id, label: movie.title, value: movie.title };
          });

          response(results);
        }
      });
    }
  });
});
