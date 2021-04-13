const validateAttendance = (input) => {
  let Absent = 0;
  let Late = 0;
  let newInput = input.toUpperCase(); // handle input lowerCase to upperCase
  for (let day = 0; day < newInput.length; day++) {
    if (newInput.charAt(day) == "L" && newInput.charAt(day + 1) == "L") {
      Late += 2;
    }
    if (newInput.charAt(day) == "A") {
      Absent += 1;
    }
  }

  if (Absent === 2 || Late > 2) {
    console.log("Output: ", false);
  } else {
    console.log("Output: ", true);
  }
};

const prompt = require("prompt-sync")();
var input = prompt("Please enter a String with Absent, Late and Present: "); // to validate if the user input more than 6 days.
if (input.length === 6) {
  validateAttendance(input);
} else {
  console.log("you have typed less than 6 days");
}
