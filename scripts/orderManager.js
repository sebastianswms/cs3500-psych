// shuffle function to randomly order array elements
function shuffle(array) {
  const shuffledArray = [];
  while (array.length > 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    shuffledArray.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return shuffledArray;
}
  
// function to generate all possible combinations
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
  
// example usage
const videos = ["video1", "video2", "video3", "video4", "video5"];
const pairs = generateCombinations(videos);
const shuffledPairs = shuffle(pairs);

// example output
console.log(shuffledPairs);