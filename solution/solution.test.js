const { describe, expect } = require("@jest/globals");
const ideaNumber1 = require("./ideaNumber1");
const { ideaNumber2 } = require("./ideaNumber2");
const { CARD_SUITS, CARD_VALUES } = require("../constants");

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const shuffle = (array) => array.sort(() => Math.random() - 0.5);

const prepareDeck = ({
  fullDeck,
  numberFullDeck,
  incompleteDeck,
  numberIncompleteDeck,
}) => {
  let result = [];

  for (let i = 0; i < numberFullDeck; i++) {
    result.push(...fullDeck);
  }

  for (let i = 0; i < numberIncompleteDeck; i++) {
    result.push(...incompleteDeck);
  }

  return shuffle(result);
};

const getFullDeck = () => {
  let fullDeck = [];
  CARD_VALUES.forEach((value) => {
    CARD_SUITS.forEach((suit) => {
      fullDeck = [...fullDeck, { value, suit }];
    });
  });
  return fullDeck;
};

const numberFullDeck = getRandomInt(1000, 2000);
const numberIncompleteDeck = getRandomInt(1000, 2000);
const fullDeck = getFullDeck();
const incompleteDeck = shuffle(fullDeck).slice(getRandomInt(1, 50));

const cards =
  numberIncompleteDeck * incompleteDeck.length +
  numberFullDeck * fullDeck.length;

const preparedDeck = prepareDeck({
  fullDeck,
  numberFullDeck,
  incompleteDeck,
  numberIncompleteDeck,
});

describe(`Testing with ${numberFullDeck} full Decks and ${numberIncompleteDeck} incomplete Deck`, () => {
  it("Testing preparedDeck local function", () => {
    expect(preparedDeck.length).toBe(cards);
  });

  it(`Testing ideaNumber1 with ${cards} cards`, () => {
    expect(ideaNumber1(preparedDeck)).toBe(numberFullDeck);
  });

  it(`Testing ideaNumber2 with ${cards} cards`, () => {
    expect(ideaNumber2(preparedDeck)).toBe(numberFullDeck);
  });
});
