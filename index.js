const { CARD_SUITS, CARD_VALUES } = require("./constants");
const { fetchData } = require("./fetchData");


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
  const CARD_SUITS = ["diamonds", "hearts", "clubs", "spades"];
  const CARD_VALUES = ["A", "K", "Q", "J", 10, 9, 8, 7, 6, 5, 4, 3, 2];

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
      if (response > value) response = value;
    });
  });

  return response;
};


const data = fetchData();

console.time("ideaNumber1");
console.log(ideaNumber1(data));
console.timeEnd("ideaNumber1");

console.time("ideaNumber2");
console.log(ideaNumber2(data));
console.timeEnd("ideaNumber2");
