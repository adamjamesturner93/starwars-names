var starWarsNames = require("./starwars-names.json");
var uniqueRandomArray = require("unique-random-array");

var getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
  all: starWarsNames,
  random: random
};

function random(number) {
  if (number === undefined) return getRandomItem();
  else {
    var randomItems = [];
    for (let index = 0; index < number; index++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
