// add whatever parameters you deem necessary
// returns the length of the longest consecutive decrease of integers.
// longestFall([5, 3, 1, 3, 0]) // 3, 5-3-1 is the longest consecutive sequence of decreasing integers
// longestFall([2, 2, 1]) // 2, 2-1 is the longest consecutive sequence of decreasing integers
// longestFall([2, 2, 2]) // 1, 2 is the longest consecutive sequence of decreasing integers
// longestFall([5, 4, 4, 4, 3, 2]) // 3, 4-3-2 is the longest
// longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1]) // 5, 9-8-7-6-5 is the longest
// longestFall([]) // 0
function longestFall(arr) {
  if (arr.length === 0) return 0;
  let counter = 1;
  let longestDecrease = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    let difference = arr[i] - arr[i + 1];
    if (difference > 0) {
      counter++;
    } else {
      if (counter > longestDecrease) {
        longestDecrease = counter;
      }
      counter = 1;
    }
  }
  // Check the last sequence
  longestDecrease = Math.max(longestDecrease, counter);

  return longestDecrease;
}
