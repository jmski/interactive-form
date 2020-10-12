/*
Treehouse Techdegree:
FSJS Project 3 - Interactive form
*/

/*** 
 * Hello,
 * Thank you for taking the time to look at my code.
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
placeholder.text ='Please select a T-shirt theme'; // text value
placeholder.value ='select color'
shirtColor.style.display = 'none';  // hide color menu
shirtDiv.style.display = 'none'; // hide color label

// this loop hides all of the color options
for(let i = 0; i < shirtColorOptions.length; i++) {
  shirtColorOptions[i].style.display = 'none'; // hide all options

shirtDesign.addEventListener('change', (e) => {
  // if the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
  if (e.target.value === 'js puns') {
    shirtColor.style.display = 'block'; // display color menu
    shirtDiv.style.display = 'block'; // display color label
    placeholder.selected = 'true';
    for (let i = 0; i < shirtColorOptions.length; i++) {
      switch (shirtColorOptions[i].value) {
        case 'select color':
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
        case 'select color':
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
  } else { // if there theme is deselected, hide everything 
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
    // check if box is ticked && activity has the same day and time && If target activity is NOT the same event
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
creditCardDiv.style.display = 'block'; 
document.querySelector("[value='credit card']").selected = true;
document.querySelector("[value='select method']").disabled = true;

const paypalDiv = document.getElementById('paypal'); // paypal div
paypalDiv.style.display = 'none'; // hide paypal div by default

const bitcoinDiv = document.getElementById('bitcoin'); // bitcoin div
bitcoinDiv.style.display = 'none'; // hide bitcoin div by default


paymentMethod.addEventListener('change', (e) => {
  if (e.target.value == 'paypal') {
    paypalDiv.style.display = 'block';
    creditCardDiv.style.display = 'none';
    bitcoinDiv.style.display = 'none';
  } else if (e.target.value == 'credit card') {
    creditCardDiv.style.display = 'block';
    paypalDiv.style.display = 'none';
    bitcoinDiv.style.display = 'none';
  } else if (e.target.value == 'bitcoin') {
    bitcoinDiv.style.display = 'block';
    paypalDiv.style.display = 'none';
    creditCardDiv.display = 'none';
  }
});
  
const nameError = document.createElement('h2');
nameInput.previousElementSibling.appendChild(nameError);

function isValidName() {
  if (/^[a-zA-Z\-]+$/.test(nameInput.value) === false && nameInput.value.length > 0) {
    nameError.innerHTML = '*Please enter a valid name';
    nameError.style.color = 'black';
    nameError.style.display = 'block';
    // parentNode.insertBefore(nameError, nameInput);
    return false;
  } else if (nameInput.value.length == 0) {
    nameError.innerHTML = '*Name is required';
    nameError.style.color = 'red';
    return false;
  } else if (/^[a-zA-Z\-]+$/.test(nameInput.value) ===  true && nameInput.value) {
    nameError.innerHTML = ' ';
    return true;
  }
}
nameInput.addEventListener('input', (e) => IsValidName());

const emailInput = document.getElementById('mail');
const emailError = document.createElement('h2');
emailInput.previousElementSibling.appendChild(emailError); 
function isValidEmail() {
  if (/([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(emailInput.value) === false && emailInput.value.length > 0) {
    emailError.innerHTML = '*Please enter a valid email address - For example: jong@teamtreehouse.com'
    emailError.style.color = 'black';
    return false;
  } else if (emailInput.value.length === 0) {
    emailError.innerHTML = "*Email address is required";
    emailError.style.color = 'red';
    emailError.style.display = 'block';
  return false;  
} else if (/([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(emailInput.value) === true && emailInput.value) {
    emailError.style.display = 'none';
    return true;
  }

}
emailInput.addEventListener('input', (e) => isValidEmail());

const activityError = document.createElement('h2');
const activityBox = document.querySelector('.activities input');
price.previousElementSibling.appendChild(activityError);

function isValidActivities() {
  const activityChecked = document.querySelectorAll(" [type='checkbox']:checked" );
  if (activityChecked.length == 0) {
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

activity.addEventListener('input', (e) => isValidActivities());


const ccError = document.createElement('h2');
const ccNumberInput = document.getElementById('cc-num');
ccNumberInput.previousElementSibling.appendChild(ccError);

function isValidCC() {
  if (/^\d{13,16}$/.test(ccNumberInput.value) == true) {
    ccError.style.display = 'none';  
  return true;
  } else if (/^\d{13,16}$/.test(ccNumberInput.value) == false && ccNumberInput.value.length > 0) {
    ccError.innerHTML = '*Please enter your 13 or 16 digit credit card number.';
    ccError.style.color = 'black';
    ccError.style.display = 'block';
    return false;
  } else if (ccNumberInput.value.length == 0) {
    ccError.innerHTML = '*Credit card number is required.';
    ccError.style.color = 'red';
    zipError.style.display ='block';
    return false;
  }
}
ccNumberInput.addEventListener('input', (e) => isValidCC());

const zipError = document.createElement('h2');
const zipInput = document.getElementById('zip');
zipInput.previousElementSibling.appendChild(zipError);

function isValidZip() {
  if (/^\d{5}$/.test(zipInput.value) == true) {
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
zipInput.addEventListener('input', (e) => isValidZip());

const cvvError = document.createElement('h2');
const cvvInput = document.getElementById('cvv');
cvvInput.previousElementSibling.appendChild(cvvError);

function isValidCVV() {
  if (/^\d{3}$/.test(cvvInput.value) == true) {
    cvvError.style.display = 'none';
    return true;
  } else if (/^\d{3}$/.test(cvvInput.value) == false && cvvInput.value.length > 0) {
    cvvError.innerHTML = 'Please enter your 3 digit CVV code';
    cvvError.style.display ='block'
    cvvError.style.color = 'black';
    return false;
  } else if (cvvInput.value.length == 0) {
    cvvError.innerHTML = '*CVV is required';
    cvvError.style.color = 'red';
    cvvError.style.display = 'block';
    return false;
  }
}
cvvInput.addEventListener('input', (e) => isValidCVV());

function isValidMaster() {
  if (isValidName() == false || isValidEmail() == false || isValidActivities() == false || isValidCC() == false || isValidZip() == false || isValidCVV() == false) {
    isValidName();
    isValidEmail();
    isValidActivities();
    isValidCC();
    isValidZip();
    isValidCVV();
    return false;
  } else {
    return true;
  }
}

const registerButton = document.getElementsByTagName('button')[0];
registerButton.addEventListener('click', (e) => {
  if(isValidMaster() === false) {
    e.preventDefault();
  }
});

     /**
      * Form validation messages
      * Provide some kind of indication when there’s a validation error. 
      * The field’s borders could turn red, for example, or even better for the user would be if a red text message appeared near the field.
      * The following fields should have some obvious form of an error indication:
      * Name field
      * Email field
      * Register for Activities checkboxes (at least one must be selected)
      * Credit Card number (Only if Credit Card payment method is selected)
      * Zip Code (Only if Credit Card payment method is selected)
      * CVV (Only if Credit Card payment method is selected)
      * Note: Error messages or indications should not be visible by default. 
      * They should only show upon submission, or after some user interaction.

      Note: Avoid use alerts for your validation messages.

      Note: If a user tries to submit an empty form, there should be an error indication or message displayed for the name field, 
      the email field, the activity section, and the credit card fields if credit card is the selected payment method.
      */

//

/**
 * Form works without JavaScript - Progressive Enhancement
 * The user should still have access to all form fields and payment information if JS isn't working for whatever reason. 
 * For example, when the JS is removed from the project:
 * The “Other” text field under the "Job Role" section should be visible
 * All information for Bitcoin, PayPal or Credit Card payments should be visible.
 */

 /**
  * CSS styles
  * It is not required, but you are encouraged to experiment with things like the color, background color, 
  * font, transitions, animations, box shadows and text shadows. 
  * So dive into the CSS file and see if you can make this project your own with a few adjustments to the styles. 
  * But the basic layout and positioning of elements should not be changed.
  */

 // Add good code comments

 /**
  * Cross-Browser consistency:
  * Google Chrome has become the default development browser for most developers. 
  * With such a selection of browsers for users to choose from, it's a good idea to get in the habit of testing your projects in all modern browsers.
  */

  //EXTRA CREDIT

//   T Shirt Section
// Hide the "Color" label and select menu until a T-Shirt design is selected from the "Design" menu.

/**
 * Conditional Error Message
 * Program at least one of your error messages so that more information is provided depending on the error. 
 * For example, if the user hasn’t entered a credit card number and the field is completely blank, 
 * the error message reads “Please enter a credit card number.” 
 * If the field isn’t empty but contains only 10 numbers, 
 * the error message reads “Please enter a number that is between 13 and 16 digits long.”
 */

 /**
  * Real-time Error Messages
  * Program your form so that it provides a real-time validation error message for at least one text input field. 
  * Rather than providing an error message on submit,
  *  your form should check for errors and display messages as the user begins typing inside a text field. 
  * For example, if the user enters an invalid email address, the error appears as the user begins to type,
  *  and disappears as soon as the user has entered a complete and correctly formatted email address. 
  * You must accomplish this with your own JavaScript code. Do not rely on HTML5's built-in email validation.
  * NOTE: If you implement the above exceeds requirements in your form, 
  * make sure you detail in your submission notes which input will have different error messages depending on the error, 
  * and which input will have "real time" validation messages, so your reviewer won't miss them by accident.
  */