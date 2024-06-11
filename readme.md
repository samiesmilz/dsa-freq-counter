## Functions Overview

This repository contains several functions for various tasks. Below are descriptions and examples of each function:

These functions are designed to handle various scenarios efficiently and return the expected results. Each function is accompanied by descriptions and example use cases to provide clarity on their functionality and usage.

### longestFall

- Returns the length of the longest consecutive decrease of integers in an array.

  ```javascript
  longestFall([5, 3, 1, 3, 0]); // Output: 3 (5-3-1)
  ```

- Returns 1 for an array of length 1.

  ```javascript
  longestFall([5]); // Output: 1
  ```

- Returns 1 if the array values never decrease.

  ```javascript
  longestFall([1, 2, 3, 4, 5]); // Output: 1
  ```

- Does not treat ties as decreasing.

  ```javascript
  longestFall([5, 5, 4, 3, 2, 1]); // Output: 2
  ```

- Returns 0 for an empty array.

  ```javascript
  longestFall([]); // Output: 0
  ```

### twoArrayObject

- Creates an object of keys and values from two arrays.

  ```javascript
  twoArrayObject(["a", "b", "c"], [1, 2, 3]); // Output: {a: 1, b: 2, c: 3}
  ```

- Ignores extra values.

  ```javascript
  twoArrayObject(["a", "b", "c"], [1, 2]); // Output: {a: 1, b: 2, c: null}
  ```

- Sets values for extra keys to null.

  ```javascript
  twoArrayObject(["a", "b"], [1, 2, 3]); // Output: {a: 1, b: 2}
  ```

### constructNote

- Constructs a note from letters given certain message and letter conditions.

  ```javascript
  constructNote("abc", "dcba"); // Output: true
  ```

- Returns true if all letters are contained.

  ```javascript
  constructNote("aaa", "aabb"); // Output: false
  ```

- Returns false for an empty letters string.

  ```javascript
  constructNote("", "abc"); // Output: false
  ```

- Returns true for an empty message.

  ```javascript
  constructNote("abc", ""); // Output: true
  ```

- Accounts for duplicates in letters.

  ```javascript
  constructNote("aa", "abc"); // Output: false
  ```

### pivotIndex

- Finds the pivot index in an array where the sum of the left and right sides are equal.

  ```javascript
  pivotIndex([1, 7, 3, 6, 5, 6]); // Output: 3
  ```

- Returns -1 if no pivot index exists.

  ```javascript
  pivotIndex([1, 2, 3]); // Output: -1
  ```

- Returns the smallest pivot index.

  ```javascript
  pivotIndex([-1, -2, -3, 0, -4, -5]); // Output: 3
  ```

### separatePositive

- Separates positive integers to the left and negative integers to the right in an array.

  ```javascript
  separatePositive([-1, 2, -3, 4, -5]); // Output: [2, 4, -3, -1, -5]
  ```

- Does nothing to arrays of all positive numbers.

  ```javascript
  separatePositive([1, 2, 3]); // Output: [1, 2, 3]
  ```

- Does nothing to arrays of all negative numbers.

  ```javascript
  separatePositive([-1, -2, -3]); // Output: [-1, -2, -3]
  ```

### isSubsequence

- Checks if the first string is a substring of the second string.

  ```javascript
  isSubsequence("abc", "abracadabra"); // Output: true
  ```

- Returns false if the first string is not a substring of the second string.

  ```javascript
  isSubsequence("xyz", "abracadabra"); // Output: false
  ```

### averagePair

- Checks if an average pair exists in an array.

  ```javascript
  averagePair([1, 2, 3], 2.5); // Output: true
  ```

- Returns false if an average pair does not exist.

  ```javascript
  averagePair([], 4); // Output: false
  ```

### sameFrequency

- Checks if the frequencies of digits in two numbers are the same.

  ```javascript
  sameFrequency(123, 321); // Output: true
  ```

- Returns false if the frequencies of digits in two numbers are not the same.

  ```javascript
  sameFrequency(123, 322); // Output: false
  ```

### countPairs

- Counts the total number of pairs that sum to the target in an array.

  ```javascript
  countPairs([3, 1, 5, 4, 2], 6); // Output: 2
  ```

- Returns 0 if there are no

  ```javascript
  countPairs([1, 2, 3, 4, 5], -3); // Output: 0
  ```

- Returns 1 if there is one pair.

  ```javascript
  countPairs([0, -4], -4); // Output: 1
  ```
