function isSubsequence(str1, str2) {
  let i = 0; // Pointer for str1
  let j = 0; // Pointer for str2

  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++; // Move the pointer for str1
    }
    j++; // Move the pointer for str2
  }

  // If all characters of str1 are found in str2 in the same order, return true
  return i === str1.length;
}
