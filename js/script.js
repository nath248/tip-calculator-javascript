const button = document.querySelector("#calculate");

button.addEventListener("click", function() {
    let billAmount = Number(document.getElementById("bill-amount").value);
    let tipPercentage = document.getElementById("service").value;
    let numOfPeople = Number(document.getElementById("people").value);

    const tipElement = document.getElementById("total-tip");
    const tip = document.getElementById("tip");
    const totalWithTip = document.getElementById("totalWithTip")


    if (billAmount === " " || tipPercentage == 0) {
        alert("Please enter a value");
    };
    if (numOfPeople === " " || numOfPeople <= 1) {
        numOfPeople = 1;
    } else {
        let tipAmount = billAmount * (tipPercentage / 100);
        let finalBill = (tipAmount + billAmount) / numOfPeople;
        tipAmount = tipAmount.toFixed(2);
        tipElement.style.display = "block";
        tip.innerText = tipAmount;
        totalWithTip.innerText = finalBill;
    }
});