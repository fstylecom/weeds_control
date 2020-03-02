$( document ).ready(function() {

  function initialEstimate() {
    let area = document.querySelector(".inputArea");
    let areaValue = Number(area.value);
    
    let material = document.querySelectorAll(".inputRadio");
    let materialValue = 0;
    for (let i of material) {
      if (i.checked) {
        materialValue += Number(i.value);
      }
    }

    let grassHeight = document.querySelector(".selectBox__box--grassHeight");
    grassHeightValue = Number(grassHeight.value);

    let groundUnevenness = document.querySelector(".selectBox__box--groundUnevenness");
    groundUnevennessValue = Number(groundUnevenness.value);

    let result = areaValue * (materialValue + grassHeightValue + groundUnevennessValue);
    let resultString = result.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return resultString;
  }

  function estimate() {
    let button = document.querySelector(".button");
    let price = document.querySelector(".price__number");
    
    button.addEventListener("click", function() {
      let result = initialEstimate();
      price.innerHTML = result;
    });
  }

  // Initial Function
  estimate();

});