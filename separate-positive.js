// add whatever parameters you deem necessary

/*
A function called separatePositive which accepts an array of non-zero integers. Separate the positive integers to the left and the negative integers to the right. The positive numbers and negative numbers need not be in sorted order. The problem should be done in place (in other words, do not build a copy of the input array).
*/

// separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
// separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
// separatePositive([-5, 5]) // [5, -5]
// separatePositive([1, 2, 3]) // [1, 2, 3]

function separatePositive(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Move left pointer to the first negative number
    while (arr[left] > 0 && left < right) {
      left++;
    }

    // Move right pointer to the first positive number
    while (arr[right] < 0 && left < right) {
      right--;
    }

    // Swap the elements at left and right indices
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }

  return arr;
}
