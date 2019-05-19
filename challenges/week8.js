const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  for (let i = 0; i < nums; i++) {
    let index = (nums.indexOf(n))
    let newNum = nums(index + 1);
    if (newNum === Number)
    return newNum
    else 
    return null
  }
};
  // loop through the array for find index of given number
  // find value of index of given number + 1
  // return value of index of given number + 1
  // if given number is not found return null
  // return index + 1 in first instance of given number
  // if given number is final number return null 

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let ones = 0;
  let zeroes = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "1") {
      ones++;
    } else if (char === "0") {
      zeroes++;
    }
  }

  return {
    1: ones,
    0: zeroes
  }
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let finalSum = 0;

  for (let i = 0; i < arrs.length; i++) {
    for (var j = 0; j < arrs[j].length; j++) {
      finalSum += arrs[i][j];
  }
}
return finalSum;
}

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  searchTerm = searchTerm.toLowerCase();

  for (let key in haystack) {
    const value = haystack[key];
    if (typeof value === 'string') {
      if (value.toLowerCase().includes(searchTerm)) {
        return true;
      }
    }
  }
  return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  const frequencies = {};

  const words = str
    .replace(/[^a-zA-Z ]/g, "")
    .toLowerCase()
    .split(' ');
  words.forEach(word => {
    if (frequencies[word] === undefined) {
      frequencies[word] = 1;
    } else {
      frequencies[word] += 1;
    }
  });

  return frequencies;
};


module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
