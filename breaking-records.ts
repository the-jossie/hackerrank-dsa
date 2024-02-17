function breakingRecords(scores: number[]): number[] {
  // Write your code here
  var noOfLeastRecord = 0;
  var noOfMostRecord = 0;
  var currentMostPoint = scores[0];
  var currentLeastPoint = scores[0];

  for (var i = 0; i < scores.length; i++) {
    if (scores[i] > currentMostPoint) {
      currentMostPoint = scores[i];
      noOfMostRecord += 1;
    } else if (scores[i] < currentLeastPoint) {
      console.log(scores[i], currentLeastPoint);
      currentLeastPoint = scores[i];
      noOfLeastRecord += 1;
    }
  }

  return [noOfMostRecord, noOfLeastRecord];
}
