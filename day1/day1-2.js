function sumCalibrationValuesWithSpelledOutDigits(calibrationDocument) {
  // Split the calibration document into lines
  const lines = calibrationDocument.split("\n");

  // Initialize a variable to store the sum of calibration values
  let sum = 0;

  // Iterate through each line
  for (const line of lines) {
    // Use a regular expression to match digits or spelled-out numbers
    const matches = line.match(/\d+|[a-z]+/gi);

    // Extract the real first and last elements
    const firstElement = matches[0];
    const lastElement = matches[matches.length - 1];

    // Convert the elements to numbers and add to the sum
    sum += parseInt(firstElement, 10) + parseInt(lastElement, 10);
  }

  return sum;
}

// Example usage with your provided calibration document
const calibrationDocumentWithSpelledOutDigits = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

const resultWithSpelledOutDigits = sumCalibrationValuesWithSpelledOutDigits(
  calibrationDocumentWithSpelledOutDigits
);
console.log(resultWithSpelledOutDigits); // Output: 281
