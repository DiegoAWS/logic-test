const { CARD_SUITS, CARD_VALUES } = require("../constants");

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

  module.exports=ideaNumber1