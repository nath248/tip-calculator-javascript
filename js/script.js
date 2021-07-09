  // Global variables
  let billAmount = document.getElementById("bill-amount").value;
  let tipPercentage = document.getElementById("service").value;
  let numOfPeople = document.getElementById("people").value;
  const tipElement = document.getElementById("total-tip");
  const tipAmount = document.getElementById("tip");
  const each = document.getElementById("each");

  //validate input


  const calculateTotal = document.getElementById("calculate");
  calculateTotal.addEventListener("click", function() {
      if (billAmount === " " || tipPercentage == 0) {
          alert("Please enter a value");
          return;
      }
      if (numOfPeople === " " || numOfPeople <= 1) {
          numOfPeople = 1;
          each.style.display = "none";
      } else {
          each.style.display = "block";
      }
      let total = (billAmount * tipPercentage) / numOfPeople;
      total = total.toFixed(2);
      console.log(total);
      tipElement.classList.add("calculator-end");
      tipElement.classList.remove("calculator-end");
      tipAmount.innerText = total;
      calculateTotal();
  });


  //Hide the tip amount on load

  // Call function