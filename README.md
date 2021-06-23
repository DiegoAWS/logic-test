# Problem

In a Casino, all the decks of cards got mixed and some of the cards got lost. It is necessary to count how many full decks are in total.

You are provided with a list of all the cards:

``` json
[
  {
    "suit": "hearts",
    "value": 2
  },
  {
    "suit": "clubs",
    "value": 4
  },
  {
    "suit": "diamonds",
    "value": "J"
  },
  {
    "suit": "spades",
    "value": 9
  },
  ...
]
```

Your output should be the total amount of full decks, ie:
input : Array founded Here https://gist.githubusercontent.com/smaugho/25712886c4a7b938fdda2c41d5b0838e/raw/79d2e4f7cfef5ba01c633400dadc81219516b95b/mixed_decks_2

expected output: 2
# Solutions

In this project I came over several ways to solve it... Finally I choose two:

ideaNumber1:

```js
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
```

and

ideaNumber2:

```js
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
```

They both follow the same idea: create a table with fixed space for each type of card. Then I put each incoming card in its respective place and finally I look for the place with the smallest number of cards and that number will be the number of complete Decks.

To test it with the input provided, we can run:
``` sh
npm start
```

To test it with a bigger number of cards ~100 000, plase run:
``` sh
npm test
```