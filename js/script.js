  // Global variables
  const billAmount = document.getElementById("bill-amount").value;
  const tipPercentage = document.getElementById("service").value;
  const numOfPeople = document.getElementById("people").value;
  const tipElement = document.getElementById("total-tip");
  const tipAmount = document.getElementById("tip");
  const each = document.getElementById("each");

  //validate input
  const calculateTotal = function() {
      if (billAmount === " " || tipPercentage === 0) {
          alert("Please enter a value");
      }
      if (numOfPeople === " " || numOfPeople <= 1) {
          numOfPeople = 1;
          each.style.display = "none";
      } else {
          each.style.display = "block";
      }
      const total = (billAmount * tipPercentage) / numOfPeople;
      total = total.toFixed(2);
      console.log(total);

      //Hide the tip amount on load
      tipElement.classList.add("calculator-end");
      tipElement.classList.remove("calculator-end");
      tipAmount.innerText = total;
      // Call function
      calculateTotal();
  };