/*
- prompt the user
- save the entry
- check how many lines?
- for each line search through for the digits and save them in a temp array (digits)
- then search trhough the array for the first and last digits entered
- put both digits together to form one number calibration and save in the array (calibration)
- now add all the calibration numbers in the array (calibration) to get the SUM. 

1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet

1abc2 pqr3stu8vwx a1b2c3d4e5f treb7uchet
*/

// const prompt = require("prompt-sync")({ sigint: true });

function sumOfCalibrationValues(elfInput) {
  // string array to save an array of lines
  var stringCalib = elfInput.split("\n");

  var sum = 0;

  // this array saves all digits on a line entry temporarily
  var digits = [];
  var values = [];

  // search through each character on the line for digits
  for (let i = 0; i < stringCalib.length; i++) {
    var line = stringCalib[i];

    if (line.length == 0) {
      continue;
    }

    var inputStrChar = line.split("");

    console.log(
      "For one line of text, each element in this line (" +
        stringCalib[i] +
        "): " +
        inputStrChar
    );

    // for each character in the line, check if it's a number
    for (let j of line) {
      if (!isNaN(j)) {
        var elementInt = parseInt(j);
        digits.push(elementInt);
      }
    }
    console.log("Numbers in the line, digits array contains: " + digits);
    values[i] = digits[0].toString() + digits[digits.length - 1].toString();
    digits = [];
  }

  console.log("- An array of the values calibrated: " + values);

  // sum up the values
  for (let k = 0; k < values.length; k++) {
    sum = sum + parseInt(values[k]);
  }

  console.log("The sum of all values is ---> " + sum);
}

// prompting the user for calibration entries
//var elfInput = prompt("Enter calibration entry: ");

var elfInputEx = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

console.log(sumOfCalibrationValues(elfInputEx));
