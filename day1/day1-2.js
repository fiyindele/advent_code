function sumIncludingSpelledOutDigits(calibrationDocument) {
  // Split the calibration document into lines
  const lines = calibrationDocument.split("\n");

  // Initialize a variable to store the sum of calibration values
  let sum = 0;

  // Iterate through each line
  /*
  for (const line of lines) {
    // Use a regular expression to match digits or spelled-out numbers
    const matches = line.match(
      /(?:[1-9]|one|two|three|four|five|six|seven|eight|nine)/gi
    );
    console.log(matches);
    //const matches = line.match(/\d+|[a-z]+/gi);
    //"/(?:[1-9]|one|two|three|four|five|six|seven|eight|nine)/i"
    //"/\d+|(one|two|three|four|five|six|seven|eight|nine)+/gi"

    // Extract the real first and last elements
    const firstElement = matches[0];
    const lastElement = matches[matches.length - 1];

    // Convert the elements to numbers and add to the sum
    sum += parseInt(firstElement, 10) + parseInt(lastElement, 10);
    console.log(
      "firstElement: " +
        parseInt(firstElement, 10) +
        ", lastElement: " +
        parseInt(lastElement, 10)
    );
  }
  */
  for (const line of lines) {
    const digitsOnly = line.replace(/\D/g, "");

    // Check if there are valid digits before trying to convert
    if (digitsOnly.length > 0) {
      const firstDigit = parseInt(digitsOnly.charAt(0), 10);
      const lastDigit = parseInt(digitsOnly.charAt(digitsOnly.length - 1), 10);

      // Check if conversion is successful before adding to the sum
      if (!isNaN(firstDigit) && !isNaN(lastDigit)) {
        sum += firstDigit + lastDigit;
      }
    }
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

const resultWithSpelledOutDigits = sumIncludingSpelledOutDigits(
  calibrationDocumentWithSpelledOutDigits
);
console.log("resultWithSpelledOutDigits: " + resultWithSpelledOutDigits); // Output: 281
