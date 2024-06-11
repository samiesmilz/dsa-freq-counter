// add whatever parameters you deem necessary

/*
Write a function called twoArrayObject which accepts two arrays of varying lengths.The first array consists of keys and the second one consists of values. Your function should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.
*/

function twoArrayObject(keysArr, valuesArr) {
  const obj = {};

  // Iterate over the keys array
  for (let i = 0; i < keysArr.length; i++) {
    // If there are values remaining, assign them to keys
    if (i < valuesArr.length) {
      obj[keysArr[i]] = valuesArr[i];
    } else {
      // If there are no values remaining, assign null to keys
      obj[keysArr[i]] = null;
    }
  }

  return obj;
}
