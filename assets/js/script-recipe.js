$(document).ready(function() {
  console.log("Loaded!");
  $(".js-menu").remove();
  changeClass();
  $(".js-back").attr("href", "index.html");
});

var changeClass = (function() {
  $(".js-show-make").click(function() {
    $(".page").addClass("make");
    $(this).addClass("active");
    $(".js-show-recipe").removeClass("active");
  });
  $(".js-show-recipe").click(function() {
    $(".page").removeClass("make");
    $(this).addClass("active");
    $(".js-show-make").removeClass("active");
  })
});