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


//When the page first loads, the first text field should be in focus by default.
const name = document.getElementById('name');
name.focus();

/**
 * ”Job Role” section
 * 
 * Include a text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
 * 
 *  Give the field an id of “other-title,” and add the placeholder text of "Your Job Role".
 * 
 * Note: You'll need to add the "Other" job role input directly into the HTML and hide it initially with JS in order to get this feature to work when JS is disabled, which is a requirement below.
 */
const jobRole = document.getElementById('title');
const otherTitle = document.getElementById('other-title');
otherTitle.style.display = 'none'; // hides the other-title field text

jobRole.addEventListener('change', (e) => {
  if(e.target.value === 'other') {
    otherTitle.style.display = 'block'; // shows the other-title field text
  } else {
      otherTitle.style.display = 'none'; // hides if switched out of 'other'
    }
});

 /**
  * ”T-Shirt Info” section
  * 
  * Until a theme is selected from the “Design” menu, no color options appear in the “Color” drop down and the “Color” field reads “Please select a T-shirt theme”.
  * 
  * For the T-Shirt "Color" menu, after a user selects a theme, only display the color options that match the design selected in the "Design" menu.
  * 
  * If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
  * 
  * If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."
  * 
  * When a new theme is selected from the "Design" menu, both the "Color" field and drop down menu is updated.
  */
const shirtDesign = document.getElementById('design');
const shirtColorLabel = document.getElementById('shirt-colors');
const shirtColor = document.getElementById('color');
const shirtColorOptions = shirtColor.children;
const placeholder = document.createElement('option');
shirtColor.insertBefore(placeholder, shirtColorOptions[0]);
placeholder.text ='Please select a T-shirt theme';
placeholder.selected = 'true';
shirtColor.style.display = 'none';  
shirtColorLabel.style.display = 'none';

for(let i = 0; i < shirtColorOptions.length; i++) {
  console.log(shirtColorOptions[i].value);  
  shirtColorOptions[i].style.display = 'none';

shirtDesign.addEventListener('change', (e) => {
  if (e.target.value === 'js puns') {
    shirtColor.style.display = 'block';
    shirtColorLabel.style.display = 'block';
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
  } else if (e.target.value === 'heart js') {
    shirtColor.style.display = 'block';
    shirtColorLabel.style.display = 'block';
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
  } else {
    shirtColorOptions[i].style.display = 'none';
    shirtColor.style.display = 'none';  
    shirtColorLabel.style.display = 'none';
  }
});

}
  // shirtDesign.addEventListener('change', (e) => {
  //   if(e.target.value === 'js puns') {
  //     shirtColor.style.display = 'block';
  //     }
  //   } else if(e.target.value === 'heart js') {
  //     shirtColor.style.display = 'block';

  //   } else {
  //     shirtColor.style.display = 'none';
  //   }
  //   });

  /**
   * ”Register for Activities” section
   * 
   * Some events are at the same day and time as others. 
   * 
   * If the user selects a workshop, don't allow selection of a workshop at the same day and time
   *    -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
   * 
   * When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
   * 
   * As a user selects activities, a running total should display below the list of checkboxes.
   * For example, if the user selects "Main Conference", then Total: $200 should appear.
   * If they add 1 workshop, the total should change to Total: $300.
   */

   /**
    * "Payment Info" section
    * Display payment sections based on the payment option chosen in the select menu.
    * 
    * The "Credit Card" payment option should be selected by default. Display the #credit-card div, and hide the "PayPal" and "Bitcoin" information.
    * 
    * Payment option in the select menu should match the payment option displayed on the page.
    * 
    * When a user selects the "PayPal" payment option, the PayPal information should display, and the credit card and “Bitcoin” information should be hidden.
    * 
    * When a user selects the "Bitcoin" payment option, the Bitcoin information should display, and the credit card and “PayPal” information should be hidden.
    * 
    * NOTE: The user should not be able to select the "Select Payment Method" option from the payment select menu, because the user should not be able to submit the form without a chosen payment option.
    */

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

  