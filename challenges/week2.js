function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  else return (sandwich.fillings)
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  let fromManchester = (person.city)
  if (fromManchester === "Manchester") return true
  else return false
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  let noBus = (people / 40)
  let extraBus = Math.floor((people / 40) + 1)
  if (people <= 40) return 1
  if (noBus % 1 === 0) return noBus
  else return extraBus;

}


function countSheep(arr) {
  if (!arr) throw new Error("arr is required");
  let total = 0;
  arr.forEach(function (arr) {
    if (item === "sheep")
      total += 1
  });
  return total
}


function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  let firstLetter = (person.address.postCode.charAt(0));
  if (person.address.city !== "Manchester") return false;
  if (firstLetter === 'M') return true
  else return false
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
}