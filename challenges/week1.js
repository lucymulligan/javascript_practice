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
    return Number (newPrice)
  }

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  if (reduction === 0) return originalPrice
  let cutPrice = (reduction / 100) * originalPrice; 
  let finalPrice = (originalPrice - cutPrice)
  return Number (finalPrice).toFixed(2)

}
// Copied this from online - it would be great if this could be explained - thank you
function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  var position
  var length
  if(str.length % 2 == 1) {
    position = str.length / 2;
    length = 1;
} else {
    position = str.length / 2 - 1;
    length = 2;
}
  let result = str.substring(position, position + length)
  return result   
 
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
  
  let total = 0;
  
  users.forEach (function (user) { 
    let opSystem = user.type;  
        if (opSystem === "Linux") {
      total += 1;
    }
  });
    return total; 
}



function getMeanScore(scores) {
if (scores === undefined) throw new Error("scores is required");
let total = 0;
for(let i = 0; i < scores.length; i++) {
  total += scores[i]; 
}
  let mean = (total / scores.length)
  let mdec = mean.toFixed(2)
  return Number (mdec)
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
 