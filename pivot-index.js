// add whatever parameters you deem necessary

// accepts an array of integers, and returns the pivot index
// where the sum of the items to the left equal to the sum of the items to the right.
// If there are more than one valid pivot index, return the smallest value.

// pivotIndex([1,2,1,6,3,1]) // 3
// pivotIndex([5,2,7]) // -1  no valid pivot index
// pivotIndex([-1,3,-3,2]) // 1 valid pivot at 2: -1 + 3 = 2
// however there is a smaller valid pivot at 1: -1 = -3 + 2

function pivotIndex(arr) {
  if (arr.length === 0) return -1;

  //   const sum = (arr) => {
  //     let total = 0;
  //     for (let num of arr) {
  //       total += num;
  //     }
  //     return total;
  //   };
  //   let totalSum = sum(arr);

  const totalSum = arr.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let rightSum = totalSum - leftSum - arr[i];
    if (leftSum === rightSum) {
      return i; // Return the pivot index as soon as we find it
    }
    leftSum += arr[i];
  }

  return -1; // No pivot index found
}
