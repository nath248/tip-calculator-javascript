function calculateTip() {
  var totalBill = document.querySelector("#bill-amount");
  var tipAmount = document.querySelector("#service");
  var numOfPeople = document.querySelector("#people");


// Alerts
  if (totalBill === "") {
    alert("Please enter a value");
  };


//Calculate tip

  var totalTip.toFixed(2) = (totalBill * tipAmount)/ numOfPeople;

}
