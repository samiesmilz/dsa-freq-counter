// // add whatever parameters you deem necessary
// function countPairs(arr, num) {
//   let obj = {};
//   let count = 0;
//   let pairs = new Set();

//   // Store array values in the object
//   for (let i = 0; i < arr.length; i++) {
//     obj[arr[i]] = true;
//   }

//   // Check for pairs
//   for (let i = 0; i < arr.length; i++) {
//     let complement = num - arr[i];
//     if (obj[complement] && complement !== arr[i]) {
//       // just to ensusre pairs are sorted.
//       let pair = [Math.min(arr[i], complement), Math.max(arr[i], complement)];
//       pairs.add(pair); // Add pair to the Set
//       count++;
//     }
//   }

//   return count;
// }

// Better version

function countPairs(arr, num) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  let count = 0;
  let pairs = new Set();

  // Two-pointer technique
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === num) {
      pairs.add([arr[left], arr[right]]);
      count++;
      left++;
      right--;
    } else if (sum < num) {
      left++;
    } else {
      right--;
    }
  }

  //   console.log({ count, pairs: [...pairs] });
  return count;
}

// if we are to write to sorting algorithm ourselves.

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: If array has 0 or 1 element, it's already sorted
  }

  // Divide the array into two halves
  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  // Recursively sort the two halves
  const sortedLeftHalf = mergeSort(leftHalf);
  const sortedRightHalf = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(leftArr, rightArr) {
  let mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and merge them into the result array
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      mergedArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate any remaining elements from left or right array
  return mergedArr
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
}
