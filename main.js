//Get and set input value on click
function getInputValue(planet, isAdd, price) {
  const planetInput = document.getElementById(planet + "-input");
  const planetInputValue = parseInt(planetInput.value);
  if (isAdd == true) {
    planetInput.value = planetInputValue + 1;
  } else if (isAdd == false && planetInputValue > 0) {
    planetInput.value = planetInputValue - 1;
  }
  changeCost(planet, price);
  totalCost();
}
//Per planet cost
function changeCost(planet, price) {
  const cost = document.getElementById(planet + "-cost");
  const planetInput = document.getElementById(planet + "-input");
  const planetInputValue = planetInput.value;
  const newCost = planetInputValue * price;
  cost.innerText = newCost;
}
//Update Total Price
function totalCost() {
  const marsInput = document.getElementById("mars-input");
  const marsInputValue = parseInt(marsInput.value);
  const marsCost = marsInputValue * 600;
  const moonInput = document.getElementById("moon-input");
  const moonInputValue = parseInt(moonInput.value);
  const moonCost = moonInputValue * 500;

  const totalCostAmount = marsCost + moonCost;

  const total = document.getElementById("total-cost");

  total.innerText = totalCostAmount;
}
