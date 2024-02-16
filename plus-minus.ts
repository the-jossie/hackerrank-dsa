// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Example

// There are  elements, two positive, two negative and one zero. Their ratios are 2/5, 2/5 and 1/5. Results are printed as:

// 0.400000
// 0.400000
// 0.200000

function plusMinus(arr: number[]): void {
  // Write your code here
  let noOfPositives = 0;
  let noOfNegatives = 0;
  let noOfZeros = 0;

  arr.map((number) => {
    if (number > 0) {
      noOfPositives++;
    } else if (number < 0) {
      noOfNegatives++;
    } else {
      noOfZeros++;
    }
  });
  let ratioOfPositives = noOfPositives / arr.length;
  let ratioOfNegatives = noOfNegatives / arr.length;
  let ratioOfZeros = noOfZeros / arr.length;

  console.log(
    ratioOfPositives.toFixed(6),
    "\n",
    ratioOfNegatives.toFixed(6),
    "\n",
    ratioOfZeros.toFixed(6)
  );
}
