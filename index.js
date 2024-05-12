function splitExpense() {
  let total = parseFloat(document.getElementById("total").value);
  let people = parseInt(document.getElementById("people").value);

  // Check for the valid inputs
  if (isNaN(total) || isNaN(people) || total <= 0 || people <= 0) {
    alert("Please enter valid total expense and number of people");
    return;
  }

  // Calculating each person's share
  let eachShare = total / people;
  let result = "Each person owes: &#8377;" + eachShare.toFixed(2);

  // Update the result in the HTML
  document.getElementById("result").innerHTML = result;
}
