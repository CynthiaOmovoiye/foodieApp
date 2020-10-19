var tabPanels;
var searchfield = document.getElementById("ip-search");
var searchfield2 = document.getElementById("ip-search2");
var searchform = document.getElementById("searchForm");
var searchform2 = document.getElementById("searchForm2");
var searchResultDiv = document.getElementById("search-result");
var modal = document.getElementById("simpleModal");
var Drinks = document.getElementById('drinks');
var appetizer = document.getElementById('appetizer');
var desert = document.getElementById('desert');
var vegan = document.getElementById('vegan');
var vegetarian = document.getElementById('vegetarian');
var gluten = document.getElementById('gluten');
var african = document.getElementById('african');
var italian = document.getElementById('italian');
var american = document.getElementById('american');






window.onload = randomMeals("");

vegetarian.onclick = function(){
    randomMeals("vegetarian");
}
appetizer.onclick = function(){
    randomMeals("appetizer");

}
gluten.onclick = function(){
    randomMeals("gluten");
}
african.onclick = function(){
    randomMeals("african");
}
italian.onclick = function(){
    randomMeals("italian");
}
american.onclick = function(){
    randomMeals("american");
}
desert.onclick = function(){
    randomMeals("dessert");
}
vegan.onclick = function(){
    randomMeals("vegan");
}
Drinks.onclick = function(){
    randomMeals("drinks");
}


function randomMeals(tags){
    var tag = tags
    var apiKey = "6c36802bf4294bc5a2072a56a71cf252";
    var baseUrl = `https://api.spoonacular.com/recipes/random?number=10&tags=${tag}&apiKey=${apiKey}`;
   fetch(baseUrl)
   .then((resp)=>resp.json())
   .then((data)=>{
generateCard(data.recipes);


   })

}




searchform2.addEventListener('submit', (e) =>{
    e.preventDefault();
    searchfieldvalue = searchfield2.value;
    getfoodsearch()
    });

searchform.addEventListener('submit', (e) =>{
e.preventDefault();
searchfieldvalue = searchfield.value;
getfoodsearch()
});




function getfoodsearch(){

  var apiKey = "6c36802bf4294bc5a2072a56a71cf252";
  baseURL = `https://api.spoonacular.com/recipes/complexSearch?query=${searchfieldvalue}&addRecipeInformation=true&number=100&addRecipeNutrition=true&apiKey=${apiKey}`
  fetch(baseURL)
  .then((res)=> res.json())
  .then ((data)=>{
    generateCard(data.results)
console.log(data)
  })


}

function  generateCard (array){
  var card ="";
  array.forEach(function (result){
    card+= `
    <div class="food_tile" onclick="showDetails(${result.id})" >
                <img src="${result.image}" alt="" class="fda_product_img">
                <span class="food_name">${result.title}</span>
                <span class="food_detail">Credit:  ${result.creditsText}</span>
                <ul id="food_meta">
                    <li>
                        Health Score
                        <span>${result.healthScore}</span>
                    </li>
                    <li>
                        Preparation
                        <span>${result.readyInMinutes}mins</span>
                    </li>
                </ul>
                <button type="button" class="btn btn-sm btn-default">View Recipe</button>
            </div>
    
    
    `
  });
  searchResultDiv.innerHTML = card;
}





 function showDetails(id){
  var apiKey = "6c36802bf4294bc5a2072a56a71cf252";
  var foodID = id;
  var baseUrl = `https://api.spoonacular.com/recipes/${foodID}/information?includeNutrition=true&apiKey=${apiKey}`;
 fetch(baseUrl)
 .then((resp)=>resp.json())
 .then((data)=>{
var instructions = data.analyzedInstructions[0].steps;
var step ="";
instructions.forEach(function(steps){
step+=`
<li>${steps.step}</li>

`

})
  var Ingredients = data.extendedIngredients;
  var container="";
  Ingredients.forEach(function(ingredient){
    var imageURL =`
    https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}
    
    `
container+=`
<div class="cooking-ingredients">
                                <div class="content-left">
                                    <img src="${imageURL}" alt="">
                                </div>
                                <div class="content-middle">
                                    <p>${ingredient.name}</p>

                                    <span>${ingredient.measures.us.amount}${ingredient.measures.us.unitLong}</span>
                                </div>

                            </div>


`
  })
  var modal = document.getElementById("simpleModal");
 

  var modalBody = "";
  modalBody+=`
  <div class="modal-content">
  <div class="modal-header">
      <span class="closeBtn" id="closeBtn">&times;</span>
  </div>
  <div class="modal-body">
      <div class="food-details">
          <h1>${data.title}</h1>
          <p class="nuts">NUTRIENTS</p>

          <ul class="nutrient">
              <li>
                  Calorie
                  <span>${data.nutrition.nutrients[0].amount}%</span>
              </li>
              <li>
                  Carb
                  <span>${data.nutrition.caloricBreakdown.percentCarbs}%</span>
              </li>
              <li>
                  Protein
                  <span>${data.nutrition.caloricBreakdown.percentProtein}%</span>
              </li>
              <li>
                  Fat
                  <span>${data.nutrition.caloricBreakdown.percentFat}%</span>
              </li>
          </ul>
          <p class="descp">DESCRIPTION</p>

          <p class="description">${data.summary}</p>


          <div class="tabContainer">
              <div class="buttonContainer">
                  <button onclick="showPanel(0)">Ingredients</button>
                  <button onclick="showPanel(1)">Method</button>

              </div>
              <div class="tabPanel" id="ingredients">
                  <div class="cooking-ingredients">
                      <div class="content-left">
                          <img src="websiteImages/065704ac99766c9389b8df8cc3f9270f.jpg" alt="">
                      </div>
                      <div class="content-middle">
                          <p>lorem</p>

                          <span>1 cup</span>
                      </div>

                  </div>
                  <div class="cooking-ingredients">
                      <div class="content-left">
                          <img src="websiteImages/065704ac99766c9389b8df8cc3f9270f.jpg" alt="">
                      </div>
                      <div class="content-middle">
                          <p>lorem</p>

                          <span>1 cup</span>
                      </div>

                  </div>
                  <div class="cooking-ingredients">
                      <div class="content-left">
                          <img src="websiteImages/065704ac99766c9389b8df8cc3f9270f.jpg" alt="">
                      </div>
                      <div class="content-middle">
                          <p>lorem</p>

                          <span>1 cup</span>
                      </div>

                  </div>
                  <div class="cooking-ingredients">
                      <div class="content-left">
                          <img src="websiteImages/065704ac99766c9389b8df8cc3f9270f.jpg" alt="">
                      </div>
                      <div class="content-middle">
                          <p>lorem</p>

                          <span>1 cup</span>
                      </div>

                  </div>
                  <div class="cooking-ingredients">
                      <div class="content-left">
                          <img src="websiteImages/065704ac99766c9389b8df8cc3f9270f.jpg" alt="">
                      </div>
                      <div class="content-middle">
                          <p>lorem</p>

                          <span>1 cup</span>
                      </div>

                  </div>

              </div>
              <div class="tabPanel">
                  <ol class="method" id="method">
                      <li>lorem</li>
                      <li>lorem</li>
                      <li>lorem</li>
                      <li>lorem</li>
                      <li>lorem</li>
                      <li>lorem</li>
                      <li>lorem</li>
                      <li>lorem</li>
                  </ol>
              </div>

          </div>
      </div>
      <div class="food-img">

          <img src="${data.image}" alt="">


        


      </div>


  </div>

</div>
  
  
  `



   modal.innerHTML = modalBody;
   var ingredientsDiv = document.getElementById('ingredients');
   var method = document.getElementById('method');
   method.innerHTML = step;
  ingredientsDiv.innerHTML = container;
   var closebtn = document.getElementById("closeBtn");
   closebtn.addEventListener("click", closeModal);
window.addEventListener("click", clickOutsideClose);

showPanel(0);


 })
openModal();

}

var modal = document.getElementById("simpleModal");
var foodTiles = document.getElementsByClassName("food_tile");
var closebtn = document.getElementById("closeBtn");
console.log(closebtn);

for (const foodTile of foodTiles) {
  foodTile.addEventListener("click", openModal);
}
closebtn.addEventListener("click", closeModal);
window.addEventListener("click", clickOutsideClose);


function showPanel(panelIndex) {
  var tabButtons = document.querySelectorAll(
    ".tabContainer .buttonContainer button"
  );
   tabPanels = document.querySelectorAll(".tabContainer  .tabPanel");
 
  tabPanels.forEach(function (node) {
    node.style.display = "none";
  });
  tabPanels[panelIndex].style.display = "block";
  console.log(tabPanels[panelIndex]);
}
showPanel(0);


function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
function clickOutsideClose(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}



