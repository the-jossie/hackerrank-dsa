// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints

// 16 24

function miniMaxSum(arr: number[]): void {
  // Write your code here
  arr.sort();

  let firstFourNo = arr.slice(0, -1);
  let lastFourNo = arr.slice(1);

  let sumOfFirstFourNo = firstFourNo.reduce((acc, cur) => (acc += cur));
  let sumOfLastFourNo = lastFourNo.reduce((acc, cur) => (acc += cur));

  console.log(sumOfFirstFourNo, sumOfLastFourNo);
}
