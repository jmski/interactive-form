/*
Treehouse Techdegree:
FSJS Project 3 - Interactive form
*/

/*** 
 * Hello,
 * Thank you for taking the time to look at my code. 
 * There are a lot of areas that can be optimized but I'm not confident in refactoring at this time. 
 * I will come back to this project once I have a better understanding of the process.
 * I am aiming for exceeds grade
 * - Jon
*/

// when the page first loads, the first text field should be in focus by default.
const nameInput = document.getElementById('name');
nameInput.focus();

const jobRole = document.getElementById('title'); // reference to drop down menu
const otherTitle = document.getElementById('other-title'); // reference to other-title field text
otherTitle.style.display = 'none'; // hides the other-title field text by default

// when user changes job role to 'other' it will hide/show the other-title field text
jobRole.addEventListener('change', (e) => {
  if(e.target.value === 'other') {
    otherTitle.style.display = 'block'; // shows the other-title field text
  } else {
      otherTitle.style.display = 'none'; // hides if switched out of 'other'
    }
});

const shirtDesign = document.getElementById('design');
const shirtDiv = document.getElementById('shirt-colors');
const shirtColor = document.getElementById('color');
const shirtColorOptions = shirtColor.children; // reference to all children
const placeholder = document.createElement('option'); //create option tag
shirtColor.insertBefore(placeholder, shirtColorOptions[0]); //insert placeholder at the top of the drop down menu
placeholder.textContent ='Please select a T-shirt theme'; // text value inside placeholder
placeholder.value ='select color';
shirtColor.style.display = 'none';  // hide color menu
shirtDiv.style.display = 'none'; // hide color label

// this loop hides all of the color options intially
for(let i = 0; i < shirtColorOptions.length; i++) {
  shirtColorOptions[i].style.display = 'none';

shirtDesign.addEventListener('change', (e) => {
  // if the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
  if (e.target.value === 'js puns') {
    shirtColor.style.display = 'block'; // display color menu
    shirtDiv.style.display = 'block'; // display color label
    placeholder.selected = 'true';
    for (let i = 0; i < shirtColorOptions.length; i++) {
      switch (shirtColorOptions[i].value) {
        case 'select color': // this is the placeholder 
          shirtColorOptions[i].style.display = 'block';
          shirtColorOptions[i].disabled = 'true';
        break;
        case 'cornflowerblue':
          shirtColorOptions[i].style.display = 'block';
        break;
        case 'darkslategrey':
          shirtColorOptions[i].style.display = 'block';
        break;
        case 'gold':
          shirtColorOptions[i].style.display = 'block';
        break;
        default:
          shirtColorOptions[i].style.display = 'none';
      }
    }
    // If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."
  } else if (e.target.value === 'heart js') {
    placeholder.selected = 'true';
    shirtColor.style.display = 'block'; // display color menu
    shirtDiv.style.display = 'block'; // display color label
    for (let i = 0; i < shirtColorOptions.length; i++) {
      switch (shirtColorOptions[i].value) {
        case 'select color': // this is the placeholder 
          shirtColorOptions[i].style.display = 'block';
          shirtColorOptions[i].disabled = 'true';
        break;
        case 'tomato':
          shirtColorOptions[i].style.display = 'block';
        break;
        case 'steelblue':
          shirtColorOptions[i].style.display = 'block';
        break;
        case 'dimgrey':
          shirtColorOptions[i].style.display = 'block';
        break;
        default:
          shirtColorOptions[i].style.display = 'none';
      }
    }
  } else { // if the theme is deselected, hide everything 
    shirtColorOptions[i].style.display = 'none'; // hides color menu options
    shirtColor.style.display = 'none';  // hide color menu
    shirtDiv.style.display = 'none'; // hide color label
    placeholder.selected = 'true';
  }
});
}

const activity = document.querySelector( '.activities' ); // reference to activities section
const price = document.createElement( 'h2' ); // create a h2 element
let totalPrice = 0; // total price stored here
activity.appendChild(price); // add h2 element to parent
price.innerHTML = `Total: $${totalPrice}`; // create DOM elements to display using template literals

// when user clicks on tick boxes add/subtract activity cost accordingly
activity.addEventListener('change', (e) => {
  const activityPrice = parseInt(e.target.dataset.cost); // get data-cost attribute and convert to int
  if (e.target.checked) { // if box is checked
      totalPrice += activityPrice; // add to total price
      price.innerHTML = `Total: $${totalPrice}`; // update total price
  } else if (e.target.checked === false) { // if box is unticked
      totalPrice -= activityPrice; // subtract from total price
      price.innerHTML = `Total: $${totalPrice}`; // update total price
  }

  const activityInput = document.querySelectorAll('.activities input'); // reference to all checkbox input
  for (i = 0; i <activityInput.length; i++) {
    // check if box is ticked && activity has the same day and time && If target activity is NOT the same event  (wont disable itself)
    if (e.target.checked === true && e.target.dataset.dayAndTime === activityInput[i].dataset.dayAndTime && e.target.name !== activityInput[i].name) {
      activityInput[i].disabled = true; // disable checkbox
      activityInput[i].parentNode.style.color = 'grey'; //grey out the conflicting options
      console.log('Any conflicting events are blocked');
    } else if (e.target.checked === false && e.target.dataset.dayAndTime === activityInput[i].dataset.dayAndTime) { // if box is unticked && other activities have the same day and time
        activityInput[i].disabled = false; // enable checkbox
        activityInput[i].parentNode.style.color = 'black'; // change greyed out text to black
        console.log('any conflicting events are unblocked');
    }
  }
});

// the credit card payment option is selected by default
const paymentMethod = document.getElementById('payment'); // reference the payment menu
const creditCardDiv = document.getElementById('credit-card'); // reference to credit card div
document.querySelector("[value='credit card']").selected = true; // set credit card to default payment option
document.querySelector("[value='select method']").disabled = true; // disable so user cannot select

const paypalDiv = document.getElementById('paypal'); // paypal div
paypalDiv.style.display = 'none'; // hide paypal div by default

const bitcoinDiv = document.getElementById('bitcoin'); // bitcoin div
bitcoinDiv.style.display = 'none'; // hide bitcoin div by default

// event handler will check to see which option the user selects and hides/shows the appropriate payment method
paymentMethod.addEventListener('change', (e) => {
  if (e.target.value == 'paypal') {
    paypalDiv.style.display = 'block'; // show paypal div
    creditCardDiv.style.display = 'none';
    bitcoinDiv.style.display = 'none';
    return;
  } else if (e.target.value == 'bitcoin') {
    bitcoinDiv.style.display = 'block'; // show bitcoin div
    paypalDiv.style.display = 'none';
    creditCardDiv.style.display = 'none';
    return;
  } else if (e.target.value == 'credit card') {
    creditCardDiv.style.display = 'block'; // show credit card div
    paypalDiv.style.display = 'none';
    bitcoinDiv.style.display = 'none';
    return;
  }
});
  
const nameError = document.createElement('h2'); // create text element to hold error messages
nameInput.previousElementSibling.appendChild(nameError); // attach error message before input

// this function checks to see if name is valid
function isValidName() {
  if (/^(?!\s)[a-zA-Z '.-]*$/.test(nameInput.value) === false && nameInput.value.length > 0) { // input doesn't match regular expression && user has entered input
    nameError.innerHTML = '*Please enter a valid name';
    nameError.style.color = 'black';
    nameError.style.display = 'block';
    return false; 
  } else if (nameInput.value.length == 0) { // if input is empty
    nameError.innerHTML = '*Name is required';
    nameError.style.color = 'red';
    nameError.style.display = 'block';
    return false;
  } else if (/^(?!\s)[a-zA-Z '.-]*$/.test(nameInput.value) === true && nameInput.value) { // if input matches criteria hide error message and return as true
    nameError.style.display = 'none';
    return true;
  }
}

const emailInput = document.getElementById('mail'); // reference to DOM
const emailError = document.createElement('h2'); // create text element to hold error messages
emailInput.previousElementSibling.appendChild(emailError); // attach error message before input

// this function validates email
function isValidEmail() {
  if (/([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(emailInput.value) === false && emailInput.value.length > 0) { // input doesn't match regular expression && user has entered input
    emailError.innerHTML = '*Please enter a valid email address - For example: jong@teamtreehouse.com'
    emailError.style.color = 'black';
    return false;
  } else if (emailInput.value.length === 0) { // if input is empty
    emailError.innerHTML = "*Email address is required";
    emailError.style.color = 'red';
    emailError.style.display = 'block';
  return false;  
} else if (/([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(emailInput.value) === true && emailInput.value) { // if input matches criteria, hide error message and return true
    emailError.style.display = 'none';
    return true;
  }

}

const activityError = document.createElement('h2'); // create text element to hold error messages
const activityBox = document.querySelector('.activities input'); // reference to the check box input
price.previousElementSibling.appendChild(activityError); // attach error message before price

// this function checks to see if at least one check box is ticked
function isValidActivities() {
  const activityChecked = document.querySelectorAll(" [type='checkbox']:checked" ); // check for attribute checkbox that checked == true
  if (activityChecked.length == 0) { // if user deselects an activity send error
    activityError.style.display = 'block';
    activityError.style.color = 'red';
    activityError.innerHTML = '*Please choose at least one activity';
    console.log('no boxes are ticked');
    return false;
  } else {
    activityError.style.display = 'none';
    return true;
  } 
}

const ccError = document.createElement('h2'); // create text element to hold error messages
const ccNumberInput = document.getElementById('cc-num'); // reference to the credit card number input
ccNumberInput.previousElementSibling.appendChild(ccError); // attach error message before input

// this function checks to see if the user has entered a 13 or 16-digit credit card number
function isValidCC() {
  if (/^\d{13,16}$/.test(ccNumberInput.value) == true || paymentMethod.value !== "credit card") { // if ccNumberInput == true OR not paying by credit card(paypal or bitcoin)
    ccError.style.display = 'none';  
  return true;
  } else if (/^\d{13,16}$/.test(ccNumberInput.value) == false && ccNumberInput.value.length > 0) { // if criteria not met but user has entered input
    ccError.innerHTML = '*Please enter your 13 or 16 digit credit card number.';
    ccError.style.color = 'black';
    ccError.style.display = 'block';
    return false;
  } else if (ccNumberInput.value.length == 0 ) { // if input is empty
    ccError.innerHTML = '*Credit card number is required.';
    ccError.style.color = 'red';
    zipError.style.display ='block';
    return false;
  }
}

const zipError = document.createElement('h2'); //create text element to hold error messages
const zipInput = document.getElementById('zip'); //reference to the zip input
zipInput.previousElementSibling.appendChild(zipError); // append error message before input

// this function validates whether a 5-digit number has been enter OR if paypal or bitcoin option has been selected
function isValidZip() {
  if (/^\d{5}$/.test(zipInput.value) == true || paymentMethod.value !== "credit card") {
    zipError.style.display = 'none';
    return true;
  } else if (/^\d{5}$/.test(zipInput.value) == false && zipInput.value.length > 0) {
    zipError.innerHTML = "*Please enter your zip code. For example: 90210";
    zipError.style.display = 'block';
    return false;
  } else if (zipInput.value.length == 0) {
    zipError.innerHTML = "Zip code is required."
    zipError.style.color = 'red';
    zipError.style.display ='block';
    return false;
  }
}

const cvvError = document.createElement('h2'); // create terxt element to hold error messages
const cvvInput = document.getElementById('cvv'); // reference to the zip input
cvvInput.previousElementSibling.appendChild(cvvError); // append error message before input

// this function validates whether a 3-digit number has been enter OR if paypal or bitcoin option has been selected
function isValidCVV() {
  if (/^\d{3}$/.test(cvvInput.value) == true || paymentMethod.value !== "credit card") {
    cvvError.style.display = 'none';
    return true;
  } else if (/^\d{3}$/.test(cvvInput.value) == false && cvvInput.value.length > 0) { // if criteria not met but user has entered input
    cvvError.innerHTML = 'Please enter your 3 digit CVV code';
    cvvError.style.display ='block'
    cvvError.style.color = 'black';
    return false;
  } else if (cvvInput.value.length == 0) { // if input is empty
    cvvError.innerHTML = '*CVV is required';
    cvvError.style.color = 'red';
    cvvError.style.display = 'block';
    return false;
  }
}

// EVENT HANDLERS
nameInput.addEventListener('input', (e) => isValidName());
emailInput.addEventListener('input', (e) => isValidEmail()); 
activity.addEventListener('input', (e) => isValidActivities());
ccNumberInput.addEventListener('input', (e) => isValidCC());
zipInput.addEventListener('input', (e) => isValidZip());
cvvInput.addEventListener('input', (e) => isValidCVV());

// MASTER VALIDATOR
// this function will check if any functions listed return false. 
function isValidMaster() {
  if (isValidName() == false || isValidEmail() == false || isValidActivities() == false || isValidCC() == false || isValidZip() == false || isValidCVV() == false) {
    console.log(isValidName());
    console.log(isValidEmail());
    console.log(isValidActivities());
    console.log(isValidCC());
    console.log(isValidZip());
    console.log(isValidCVV());
    return false;
  } else {
    return true; // returns true only if all criteria is true
  }
}

//SUBMIT BUTTON
const registerButton = document.getElementsByTagName('button')[0];
registerButton.addEventListener('click', (e) => {
  if(isValidMaster() === false) {
    e.preventDefault(); // only refresh when true
  }
});