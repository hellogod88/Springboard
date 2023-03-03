window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = { amount: 1000000, year: 30, rate: 4.5 };
  document.getElementById("loan-amount").value = values['amount'];
  document.getElementById("loan-years").value  = values['year'];
  document.getElementById("loan-rate").value   = values['rate'];
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
   const currentValues = getCurrentUIValues();
   const monthly = calculateMonthlyPayment(currentValues);
   updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = ( values.rate / 100 ) / 12;
  const totalMonth = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) / ( 1 - Math.pow (( 1 + monthlyRate), - totalMonth ))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.querySelector('#monthly-payment').innerHTML = "$" + monthly;
}
