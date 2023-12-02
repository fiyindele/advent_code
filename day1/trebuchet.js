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

const prompt = require("prompt-sync")({ sigint: true });

// this array saves all digits on a line entry temporarily
let digits = [];

let values = [];

// prompting the user for calibration entries
let elfInput = prompt("Enter calibration entry: ");

// string array to save each line
let stringCalib = elfInput.split(" ");

console.log("lines of text: " + stringCalib);

// search through each character on the line for digits
for (let i = 0; i < stringCalib.length; i++) {
  let inputStrChar = stringCalib[i].split("");

  console.log(
    "For one line of text, each element in this line (" +
      stringCalib[i] +
      "): " +
      inputStrChar
  );

  for (let j = 0; j < inputStrChar.length; j++) {
    var elementInt = parseInt(inputStrChar[j]);
    if (elementInt >= 0 && elementInt <= 9) {
      digits.push(elementInt);
    } else {
      continue;
    }
    console.log("Numbers in the line, digits array contains: " + digits);
    values[i] = digits[0].toString() + digits[digits.length - 1].toString();
  }
  digits = [];
}

console.log("- An array of the values calibrated: " + values);

// sum up the values
var sum = 0;
for (let k = 0; k < values.length; k++) {
  sum = sum + parseInt(values[k]);
}

console.log("THE SUM OF ALL VALUES IS ---> " + sum);
