function capitalize(string) {
  if (string === undefined) throw new Error("word is required");
  else return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  else return (firstName.charAt(0) + '.' + lastName.charAt(0));
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
    if (vatRate === undefined) throw new Error("vatRate is required");
    let newPrice = (originalPrice + (originalPrice * vatRate / 100)).toFixed(2);
    return (Math.round(newPrice * 100) / 100)
  }

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  if (reduction === 0) return originalPrice
  let finalPrice = (originalPrice - reduction)/ originalPrice * 100; 
  return finalPrice 

}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let splitWord = word.split("")
  let reverse = splitWord.reverse(); 
  let joinBack = reverse.join("");
  return joinBack;  
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let arraySplit = words.split("");
  let reverse1 = arraySplit.reverse();
  let reOrdered = reverse1.join("");
  return reOrdered;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0;
  users.forEach((type === "Linux").length);
  return count++

}

let total = 0
function getMeanScore(scores) {
if (scores === undefined) throw new Error("scores is required");
else for(let i = 0; i < scores.length; i++) {
  total += scores[i]; 
}
  let mean = (total / scores.length)
  return mean.toFixed(2) 
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 15 === 0) return 'fizzbuzz';
  if (n % 3 === 0) return 'fizz';
  if (n % 5 === 0) return 'buzz';
  else return n
  }
 


module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz,
}