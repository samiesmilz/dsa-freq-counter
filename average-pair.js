function averagePair(sortedArray, targetAverage) {
  /*
    Checks if there exists a pair of numbers in a sorted array whose average equals the target average.

    Parameters:
    sortedArray (list): The sorted array of numbers.
    targetAverage (float): The target average to find a pair for.

    Returns:
    bool: Returns True if a pair is found, False otherwise.
*/

  // Function to calculate the average of two numbers
  const average = (num1, num2) => {
    return (num1 + num2) / 2.0;
  };

  if (sortedArray.length === 0) return false;

  let left = 0;
  let right = sortedArray.length - 1;

  while (left < right) {
    let currentAverage = average(sortedArray[left], sortedArray[right]);

    if (currentAverage === targetAverage) {
      return true;
    } else if (currentAverage < targetAverage) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}
