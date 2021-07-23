function getFood() {
  fetch("https://foodish-api.herokuapp.com/api/")
    .then((listOfFoods) => {
      return listOfFoods.json();
    })
    .then((result) => {
      console.log(result);
      loadFoodImages(result);
    });
}

function loadFoodImages(result) {
  const foodImage = document.createElement("div");
  foodImage.createClass = "listoffood";
  foodImage.innerHTML = `
    <img class="foodImage" src=${result.image}></img>
    <button class = "Next"onclick="nextFood()">Click Next Food</button>
    `;
  document.body.append(foodImage);
}
getFood();

function nextFood() {
  document.querySelector(".foodImage").remove();
  document.querySelector(".Next").remove();

  getFood();
}
