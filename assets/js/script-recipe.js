$(document).ready(function() {
  console.log("Loaded!");
  $(".js-menu").remove();
  changeClass();
});

var changeClass = (function() {
  $(".js-show-make").click(function() {
    $(".page").addClass("make");
  });
  $(".js-show-recipe").click(function() {
    $(".page").removeClass("make");
  })
});