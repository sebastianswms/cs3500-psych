/*
    Input: An array to be shuffled.

    Output: The original array in a random order.

    Remarks: This is to make the choices displayed to the user appear in a random order.
*/
function shuffle(array) {
  const shuffledArray = [];
  while (array.length > 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    shuffledArray.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return shuffledArray;
}

/*
    Input: An array of videos.

    Output: Every combination of a pair of videos.

    Remarks: This is to display pairs of videos to the user, in a random position (left/right or
        top/bottom) and ensuring that every possible pair is represented.
*/
function generateCombinations(videos) {
  const pairs = [];
  for (let i = 0; i < videos.length; i++) {
    for (let j = i + 1; j < videos.length; j++) {
      const pair = [videos[i], videos[j]];
      // randomly swap the order of the pair
      if (Math.random() >= 0.5) {
        pair.reverse();
      }
      pairs.push(pair);
    }
  }
  return pairs;
}

/*
    Input: An array of videos.

    Output: An array of every possible pair of videos, in random position and random order.

    Remarks: This combines the functionality of shuffle() and generateCombinations().
*/
function generateRandomCombinations(videos) {
    return shuffle(generateCombinations(videos));
}

export {generateRandomCombinations}; // Export functionality for generating a 2D array of random pairs.