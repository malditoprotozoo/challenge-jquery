$(document).ready(function() {
  $(".js-back").remove();
  printNews("Nuevas Recetas", newsParragraph);

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
  renderActivities(activities);

});

/*
* Declarando algunas variables útiles
*/

var newsParragraph = $("#p-news");

/*
* Función que añade un texto al parráfo en la sección de noticias
*/
var printNews = (function(text, container) {
  $(container).append(text);
  $(container).css("text-transform","uppercase");
});

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
var renderHighlightedRecipes = (function(recipesArray) {
  //Crea un array vacío
  var highlightedRecipes = [];
  //Recorre la data
  for (var i = 0; i < recipesArray.length; i++) {
    //Si la receta tiene la propiedad highlighted y su valor es true
    if (recipesArray[i].highlighted == true) {
      //Esa receta pasará a estar dentro del array highlightedRecipes
      highlightedRecipes.push(recipesArray[i]);
    }
  }
  //Ahora renderRecipe recibirá como parámetro el nuevo array
  renderRecipe(highlightedRecipes);
  console.log('Recipes: ', highlightedRecipes);
});

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
var renderRecipe = (function(recipe) {
  // Recorre el array de recetas destacadas
  for (var i = 0; i < recipe.length; i++) {
    // Agrega al div con la clase list-recipes los siguientes elementos
    $(".list-recipes").append(`<a class="item-recipe" href="#"><span class="attribution">
      <span class="title-recipe">`+ recipe[i].title + `</span><span class="metadata-recipe">
      <span class="author-recipe">`+ recipe[i].source.name + `</span><span class="bookmarks-recipe">
      <span class="icon-bookmark"></span></span></span></span><img src="assets/img/recipes/320x350/`+ recipe[i].name +`.jpg"</a>` );
    console.log('Voy a pintar la receta: ', recipe[i]);
  }
});


/*
* Función que se encarga de pintar todas las actividades
*/
var renderActivities = (function(activitiesArray) {
  for (var i = 0; i < activitiesArray.length; i++) {
    renderActivity(activitiesArray[i]);
  }
  if (activitiesArray.length > 0) {
    $(".wrapper-message").remove();
  }
  console.log('Activities: ', activitiesArray);
});

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
var renderActivity = (function(activity) {
  $(".list-activities").append(`<a href="#" class="item-activity"><span class="attribution"><span class="avatar">
    <img src="`+ activity.userAvatar + `" class="image-avatar"></span><span class="meta">
    <span class="author">`+ activity.userName + `</span> made <span class="recipe">`+ activity.recipeName +
    `</span>: `+ activity.text + `<span class="location">&mdash;`+ activity.place + `</span>
    </span></span> <div class="bg-image" style="background-image: url('assets/`+ activity.image +
    `'"></div></a>`);  
});


