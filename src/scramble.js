function scrambleString(stringPhrase) {
  const numCharactersInString = stringPhrase.length;
  const indexesUsedAlready = [];
  const scrambledString = [];

  for(let i = 0; i < numCharactersInString; i++) {
    const randomNum = Math.floor(Math.random() * numCharactersInString);

    if (!indexesUsedAlready.includes(randomNum)) {
      indexesUsedAlready.push(randomNum);

      scrambledString.push(stringPhrase[randomNum])
    }
  }

  if (indexesUsedAlready.length !== numCharactersInString) {
    // console.log('Got here!');
    // console.log(`indexesUsedAlready: ${indexesUsedAlready}`);

    // Find the indexes that weren't used and push it to scrambledString
    for(let i = 0; i < numCharactersInString; i++) {
      if (!indexesUsedAlready.includes(i)) {
        scrambledString.push(stringPhrase[i]);
      }
    }
  }

  return scrambledString.join('');
}

module.exports = scrambleString;