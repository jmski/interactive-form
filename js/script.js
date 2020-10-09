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
const name = document.getElementById('name');
name.focus();

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
const placeholder = document.createElement('option'); //create option tags
shirtColor.insertBefore(placeholder, shirtColorOptions[0]); //insert placeholder at the top of the drop down menu
placeholder.text ='Please select a T-shirt theme'; // text value
placeholder.selected = 'true'; // placeholder default selected first
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
    for (let i = 0; i < shirtColorOptions.length; i++) {
      switch (shirtColorOptions[i].value) {
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
    shirtColor.style.display = 'block'; // display color menu
    shirtDiv.style.display = 'block'; // display color label
    for (let i = 0; i < shirtColorOptions.length; i++) {
      switch (shirtColorOptions[i].value) {
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

  const activeClass = document.querySelectorAll('.activities input'); // reference to all checkbox input
  for (i = 0; i <activeClass.length; i++) {
    // check if box is ticked && activity has the same day and time && If target activity is NOT the same event
    if (e.target.checked === true && e.target.dataset.dayAndTime === activeClass[i].dataset.dayAndTime && e.target.name !== activeClass[i].name) {
      activeClass[i].disabled = true; // disable checkbox
      activeClass[i].parentNode.style.color = 'grey'; //grey out the conflicting options
      console.log('box ticked');
    } else if (e.target.checked === false && e.target.dataset.dayAndTime === activeClass[i].dataset.dayAndTime) { // if box is unticked && other activities have the same day and time
        activeClass[i].disabled = false; // enable checkbox
        activeClass[i].parentNode.style.color = 'black'; // change greyed out text to black
        console.log('box unticked');
    }
  }
});

// the credit card payment option is selected by default
const payment = document.getElementById('payment'); // reference the payment menu
const paymentOptions = payment.children; //reference all payment options
creditCard = paymentOptions[1]; //select credit card
creditCard.selected = 'true'; // set credit card option to default
paymentOptions[0].style.display = 'none'; // hides 'select payment method' from drop down list
const creditCardDiv = document.getElementById('credit-card'); // reference to credit card div
const paypalDiv = document.getElementById('paypal'); // paypal div
const bitcoinDiv = document.getElementById('bitcoin'); // bitcoin div
paypalDiv.style.display = 'none'; // hide paypal div by default
bitcoinDiv.style.display = 'none'; // hide bitcoin div by default

// when user chooses different payment options, it will hide/show payment options accordingly
payment.addEventListener('change', (e) => {
  for (let i = 0; i < paymentOptions.length; i++) {
    if (e.target.value === 'paypal') { // if target chooses paypal
      creditCardDiv.style.display = 'none';
      paypalDiv.style.display = 'block'; // show paypal div
      bitcoinDiv.style.display = 'none';

    } else if (e.target.value === 'bitcoin') { // if target chooses bitcoin
        creditCardDiv.style.display = 'none';
        paypalDiv.style.display = 'none';
        bitcoinDiv.style.display = 'block'; // show bitcoin div

    } else {
      creditCardDiv.style.display = 'block'; // show credit card div
      paypalDiv.style.display = 'none';
      bitcoinDiv.style.display = 'none';
    }
  };
});

    /**
     * Form validation
     * Project Warm Up: Creating custom form input validation can be tricky, as it can have several moving parts. For some helpful practice, check out the project Warm Up Form Input Validation.
     * If any of the following validation errors exist, prevent the user from submitting the form:
     * Name field can't be blank.
     * Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, just that it's formatted like one: dave@teamtreehouse.com for example.
     * User must select at least one checkbox under the "Register for Activities" section of the form.
     * If the selected payment option is "Credit Card," make sure the user has supplied a Credit Card number, a Zip Code, and a 3 number CVV value before the form can be submitted.
     * Credit Card field should only accept a number between 13 and 16 digits.
     * The Zip Code field should accept a 5-digit number.
     * The CVV should only accept a number that is exactly 3 digits long.
     * NOTE: Don't rely on the built in HTML5 validation by adding the required attribute to your DOM elements. You need to actually create your own custom validation checks and error messages.
     *      NOTE: Avoid using snippets or plugins for this project. To get the most out of the experience, you should be writing all of your own code for your own custom validation.
     * NOTE: Make sure your validation is only validating Credit Card info if Credit Card is the selected payment method.
     * Pro Tip: In your validation function, the `e.preventDefault()` method should be in a conditional and only called if one or more of the required fields is invalid. If all the required fields are valid, submission should not be prevented.
     */

     /**
      * Form validation messages
      * Provide some kind of indication when there’s a validation error. The field’s borders could turn red, for example, or even better for the user would be if a red text message appeared near the field.
      * The following fields should have some obvious form of an error indication:
      * Name field
      * Email field
      * Register for Activities checkboxes (at least one must be selected)
      * Credit Card number (Only if Credit Card payment method is selected)
      * Zip Code (Only if Credit Card payment method is selected)
      * CVV (Only if Credit Card payment method is selected)
      * Note: Error messages or indications should not be visible by default. They should only show upon submission, or after some user interaction.

      Note: Avoid use alerts for your validation messages.

      Note: If a user tries to submit an empty form, there should be an error indication or message displayed for the name field, the email field, the activity section, and the credit card fields if credit card is the selected payment method.
      */

/**
 * Form works without JavaScript - Progressive Enhancement
 * The user should still have access to all form fields and payment information if JS isn't working for whatever reason. For example, when the JS is removed from the project:
 * The “Other” text field under the "Job Role" section should be visible
 * All information for Bitcoin, PayPal or Credit Card payments should be visible.
 */

 /**
  * CSS styles
  * It is not required, but you are encouraged to experiment with things like the color, background color, font, transitions, animations, box shadows and text shadows. 
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
 * For example, if the user hasn’t entered a credit card number and the field is completely blank, the error message reads “Please enter a credit card number.” 
 * If the field isn’t empty but contains only 10 numbers, the error message reads “Please enter a number that is between 13 and 16 digits long.”
 */

 /**
  * Real-time Error Messages
  * Program your form so that it provides a real-time validation error message for at least one text input field. 
  * Rather than providing an error message on submit, your form should check for errors and display messages as the user begins typing inside a text field. 
  * For example, if the user enters an invalid email address, the error appears as the user begins to type,
  *  and disappears as soon as the user has entered a complete and correctly formatted email address. 
  * You must accomplish this with your own JavaScript code. Do not rely on HTML5's built-in email validation.
  * NOTE: If you implement the above exceeds requirements in your form, 
  * make sure you detail in your submission notes which input will have different error messages depending on the error, 
  * and which input will have "real time" validation messages, so your reviewer won't miss them by accident.
  */

  