$(document).ready(function() {
  $("#submit").click(function() {
    var searchFor = $("#searchFor").val();
    var api = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchFor + '&prop=pageimages&format=json&callback=?';
    $.getJSON(api, function(data) {
      $("#output").html("");
      $("#output").append("<div id=\"results-div\"><h4 id=\"results\">Results</h4></div>");
      for (var i = 0; i < data[1].length; i++) {
        $("#output").append("<li><b><a href= " + data[3][i] + " class=\"data-title\">" + data[1][i] + "</a></b><p class=\"data-text\">" + data[2][i] + "</p></li>");
      }
      $("#searchFor").val("");
    });
  });
  $("#searchFor").keydown(function(event) {
    if (event.which == 13) {
      $("#submit").click();
    }
  });
});