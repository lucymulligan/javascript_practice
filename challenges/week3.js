function getSquares(nums) {
  if (!nums) throw new Error("nums is required");
  const squaredNums = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let squared = (num * num);
    squaredNums.push(squared)
  }
  return squaredNums
}

function camelCaseWords(words) {
  if (!words) throw new Error("words is required");
  for (let i = 0; i < words.length; i++) {
  return words.toLowerCase()
  .replace( /[-_]+/g, ' ')
  .replace( /[^\w\s]/g, '')
  .replace( / (.)/g, function($1) 
  { return $1.toUpperCase(); })
  }
}

function getTotalSubjects(people) {
  if (!people) throw new Error("people is required");
  let subjects = [];
  for (let i = 0; i < people.length; i++) {
    let person = people[i];
    if (person.subjects === String)
    subjects.push(person)
  }
  return subjects
    }


function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  menu.forEach(function (menu) {
    let ingredient1 = menu.ingredients
    if (ingredient1 === ingredient)
    return true;
    else return false
  });
}

function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
}

