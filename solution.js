const { CARD_SUITS, CARD_VALUES } = require("./constants");

const ideaNumber1 = (inputArray) => {
  let cardTable = [];

  for (var i = 0; i < CARD_SUITS.length; i++) {
    cardTable.push([]);

    cardTable[i].push(new Array(CARD_VALUES.length));

    for (var j = 0; j < CARD_VALUES.length; j++) {
      cardTable[i][j] = 0;
    }
  }

  inputArray.forEach((item) => {
    const indexSuits = CARD_SUITS.indexOf(item.suit);
    const indexValue = CARD_VALUES.indexOf(item.value);
    cardTable[indexSuits][indexValue]++;
  });

  return Math.min(...[].concat(...cardTable));
};

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
module.exports = { ideaNumber1, ideaNumber2 };
