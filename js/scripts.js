$(document).ready(function() {
  $("button#mauve").click(function() {
    $("body").removeClass();
    $("body").addClass("mauve-background");
  });

  $("button#tan").click(function() {
    $("body").removeClass();
    $("body").addClass("tan-background");
  });

  $("button#lightblue").click(function() {
    $("body").removeClass();
    $("body").addClass("lightblue-background");

  });

  $("p").click(function(){
    $("#about").toggleClass("highlight");

  });
});
