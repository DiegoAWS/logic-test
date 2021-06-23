const { CARD_SUITS, CARD_VALUES } = require("../constants");



const ideaNumber2 = (inputArray) => {
  let cardTable = {};
  CARD_SUITS.forEach((suit) => {
    cardTable[suit] = {};
    CARD_VALUES.forEach((value) => {
      cardTable[suit][value] = 0;
    });
  });

  inputArray.forEach((item) => {
    cardTable[item.suit][item.value]++;
  });

  let response = Number.MAX_SAFE_INTEGER;
  CARD_SUITS.forEach((suit) => {
    CARD_VALUES.forEach((value) => {
      if (response > cardTable[suit][value]) {
        response = cardTable[suit][value];
      }
    });
  });

  return response;
};
module.exports = {  ideaNumber2 };
