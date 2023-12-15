//your JS code here. If required.
function mapLetters(word) {
  const letterMap = {};

  // Iterate through each letter in the word
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    // If the letter is not a key in the letterMap, create an array
    // Otherwise, push the index to the existing array
    if (!(letter in letterMap)) {
      letterMap[letter] = [i];
    } else {
      letterMap[letter].push(i);
    }
  }

  return letterMap;
}
