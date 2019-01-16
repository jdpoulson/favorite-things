var favoritethings = [];
var newarray =[];
$(document).ready(function() {
  $("form#things").submit(function(event) {
    event.preventDefault();
    var input = $("input#words").val();
    favoritethings.push(input);
    console.log(favoritethings);
  });
  $("form#favorite-things").submit(function(event) {
    event.preventDefault();
    newarray.push(favoritethings[1]);
    newarray.push(favoritethings[0]);
    newarray.push(favoritethings[2]);
    $(".my-favorite-things").show();
    $(".newarray").show();
    $(".newarray").append("<li>" + newarray[0] + "</li><li>" + newarray[1] + "</li><li>" + newarray[2] + "</li>");
  })
});
