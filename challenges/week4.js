function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const smallNums = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num < 1) {
      smallNums.push(num);
    }
  }
  return smallNums
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const returnedNames = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.charAt(0) === char) {
      returnedNames.push(name)
    }
  }
  return returnedNames
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbs = [];
  let word = words[i];
  for (let i = 0; i < words.length; i++) {
    if (word.slice(0, 1) === 'to') {
      verbs.push(word)
    }
  }

}



function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let wholeNums = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num % 1 === 0) {
      wholeNums.push(num)
    }
  }
  return wholeNums
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let cities = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    user.data.city.displayName.push(cities)
  }
  return cities
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let sqRoots = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    let roots = Number(Math.sqrt(num).toFixed(2));
    sqRoots.push(roots);
  }
  return sqRoots
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const foundSentences = [];
  for (let i = 0; i < sentences.length; i++) {
    let sentence = sentences[i];
    if (sentence.includes(str)) {
      foundSentences.push(sentence);
    }
  }
  return foundSentences
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longSides = [];
  for (let i = 0; i < triangles.length; i++) {
    let longestSide = Math.max.apply(Math, triangles[i]);
    longSides.push(longestSide);
  }
  return longSides
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
}