// add whatever parameters you deem necessary

/*Write a function called sameFrequency. 

Given two positive integers, find out if the two numbers have the same frequency of digits.

Examples:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

*/

function sameFrequency(num1, num2) {
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();

  if (strNum1.length !== strNum2.length) return false;

  const makeDigitFrequencyObj = (str) => {
    const frequencyObj = {};
    for (let digit of str) {
      frequencyObj[digit] = (frequencyObj[digit] || 0) + 1;
    }
    return frequencyObj;
  };

  const digitFrequencyObj1 = makeDigitFrequencyObj(strNum1);
  const digitFrequencyObj2 = makeDigitFrequencyObj(strNum2);

  for (let digit in digitFrequencyObj1) {
    if (digitFrequencyObj1[digit] !== digitFrequencyObj2[digit]) {
      return false;
    }
  }

  return true;
}
