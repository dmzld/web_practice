$(function() {
    $("#notes").on("click", function () {
      $.ajax({
        type: 'GET',
        url: '/main/note',
        success: function(note) {
          var html = '';
          for (var i = 0; i< order.length; i++) {
              html += '<h2>' + order[i].name + ' ' + order[i].drink + '</h2>';
          }
          $('#target').html(html);
        }
      });
    });
  });
  