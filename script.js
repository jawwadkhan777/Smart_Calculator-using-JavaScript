// Include header
fetch("header.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("header").innerHTML = html;
  })
  .catch((error) => console.error("Error loading header:", error));

  function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const slider = document.getElementById('slider');
    dropdownMenu.classList.toggle('active');
    slider.classList.toggle('active');
}

// Include footer
fetch('footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer').innerHTML = html;
    })
    .catch(error => console.error('Error loading footer:', error));
    
  
// script for arithametic calculator
document.addEventListener("DOMContentLoaded", function () {
  let string = "";
  let display = document.querySelector(".display input");

  document.querySelectorAll(".digit, .operator").forEach((button) => {
    button.addEventListener("click", (event) => {
      let value = event.target.innerText;

      if (value === "=") {
        try {
          string = string.replace("^", "**"); // Replace '^' with '**' for calculation
          string = string.replace("%", "/100"); // Replace '%' with '/100*' for calculation
          string = eval(string);
          display.value = string;
        } catch (error) {
          display.value = "Error";
        }
      } else if (value === "AC") {
        string = "";
        display.value = "";
      } else if (value === "DE") {
        string = string.slice(0, -1);
        display.value = string;
      } else if (value === "^") {
        string += "^"; // Display '^' on the screen
        display.value = string;
      } else if (value === "%") {
        string += "%"; // Display '%' on the screen
        display.value = string;
      } else {
        string += value;
        display.value = string;
      }
    });
  });
});

// script for age calculator
document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const dateOfBirthInput = document.getElementById("dob");
  const dateOfCalculationInput = document.getElementById("dop");
  const calculateButton = document.querySelector(
    ".calculator button"
  );
  const resultDisplay = document.querySelector(".calculator .result");

  // Add event listener to the calculate button
  calculateButton.addEventListener("click", function () {
    // Get the dates from input fields
    const dob = new Date(dateOfBirthInput.value);
    const dop = new Date(dateOfCalculationInput.value);

    // Calculate the age difference
    const ageDifference = dop - dob;

    // Convert age difference to years, months, weeks, days, hours, minutes, and seconds
    const age = calculateAge(ageDifference);

    // Display the result
    resultDisplay.textContent = `Age: ${age.years} years, ${age.months} months, ${age.weeks} weeks, ${age.days} days, ${age.hours} hours, ${age.minutes} minutes, ${age.seconds} seconds`;
  });

  // Function to calculate age
  function calculateAge(ageDifference) {
    const millisecondsInSecond = 1000;
    const millisecondsInMinute = millisecondsInSecond * 60;
    const millisecondsInHour = millisecondsInMinute * 60;
    const millisecondsInDay = millisecondsInHour * 24;
    const millisecondsInWeek = millisecondsInDay * 7;
    const millisecondsInMonth = millisecondsInDay * 30.4375; // Average days in a month
    const millisecondsInYear = millisecondsInDay * 365.25; // Average days in a year

    // Calculate years
    const years = Math.floor(ageDifference / millisecondsInYear);
    ageDifference %= millisecondsInYear;

    // Calculate months
    const months = Math.floor(ageDifference / millisecondsInMonth);
    ageDifference %= millisecondsInMonth;

    // Calculate weeks
    const weeks = Math.floor(ageDifference / millisecondsInWeek);
    ageDifference %= millisecondsInWeek;

    // Calculate days
    const days = Math.floor(ageDifference / millisecondsInDay);
    ageDifference %= millisecondsInDay;

    // Calculate hours
    const hours = Math.floor(ageDifference / millisecondsInHour);
    ageDifference %= millisecondsInHour;

    // Calculate minutes
    const minutes = Math.floor(ageDifference / millisecondsInMinute);
    ageDifference %= millisecondsInMinute;

    // Calculate seconds
    const seconds = Math.floor(ageDifference / millisecondsInSecond);

    return {
      years,
      months,
      weeks,
      days,
      hours,
      minutes,
      seconds,
    };
  }
});




// script for BMI calculator
document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const ageInput = document.getElementById("age");
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const calculateButton = document.querySelector("button"); // Selecting the button directly
  const resultDisplay = document.querySelector(".result");

  // Add event listener to the calculate button
  calculateButton.addEventListener("click", function () {
      // Get the values from input fields
      const age = parseFloat(ageInput.value);
      const height = parseFloat(heightInput.value);
      const weight = parseFloat(weightInput.value);

      // Check if inputs are valid
      if (
          isNaN(age) ||
          isNaN(height) ||
          isNaN(weight) ||
          age <= 0 ||
          age >= 200 ||
          height <= 0 ||
          height >= 300 ||
          weight <= 0 ||
          weight >= 500
      ) {
          resultDisplay.textContent =
              "Please enter valid values for age, height, and weight.";
          return;
      }

      // Calculate BMI
      const bmi = calculateBMI(weight, height);

      // Display BMI
      resultDisplay.textContent = `Your BMI is: ${bmi.toFixed(2)}.`;

      // Display BMI message
      displayBMIMessage(bmi);
  });

  // Function to calculate BMI
  function calculateBMI(weight, height) {
      // BMI Formula: weight (kg) / (height (m))^2
      const heightInMeters = height / 100; // Convert height from cm to meters
      return weight / heightInMeters ** 2;
  }

  // Function to display BMI message
  function displayBMIMessage(bmi) {
      let message;
      if (bmi < 18.5) {
          message = "You are underweight.";
      } else if (bmi >= 18.5 && bmi < 25) {
          message = "You are healthy.";
      } else if (bmi >= 25 && bmi < 30) {
          message = "You are overweight.";
      } else {
          message = "You are obese.";
      }
      resultDisplay.textContent += ` ${message}`;
  }
});
