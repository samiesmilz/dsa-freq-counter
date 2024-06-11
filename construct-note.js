/**
 * Checks if it's possible to construct the given message using the available letters.
 *
 * @param {string} message - The message to be constructed.
 * @param {string} letters - The available letters.
 * @returns {boolean} - Returns true if the message can be constructed, false otherwise.
 *
 * @example
 * constructNote('aa', 'abc') // false
 * constructNote('abc', 'dcba') // true
 *
 * @timeComplexity O(M + N) - If M is the length of message and N is the length of letters.
 */
function constructNote(message, letters) {
  const makeObj = (str) => {
    const obj = {};
    for (let char of str) {
      obj[char] = obj[char] + 1 || 1;
    }
    return obj;
  };

  const msgObj = makeObj(message);
  const letterObj = makeObj(letters);

  // Check to see if all the letter keys in message are in letters with enough count
  for (let key of Object.keys(msgObj)) {
    if (!letterObj[key] || letterObj[key] < msgObj[key]) {
      return false;
    }
  }
  return true;
}
