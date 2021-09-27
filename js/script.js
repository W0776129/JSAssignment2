// WEB303 Assignment 2
// Nikhil Patel



$('#vprospect').click(function(){
  $("#solution").load("prospect.html");
  $("#solution").animate({opacity: '0.75'});
});

$( "#vconvert" ).click(function() {
  $("#solution").load("convert.html");
  $("#solution").animate({opacity: '0.75'});
});

$( "#vretain" ).click(function() {
  $("#solution").load("retain.html");
  $("#solution").animate({opacity: '0.75'});
});
