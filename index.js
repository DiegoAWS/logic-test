;
const { fetchData } = require("./fetchData");
const { ideaNumber2, ideaNumber1 } = require("./solution");



fetchData().then((data) => {
  console.time("ideaNumber1");
  console.log(ideaNumber1(data));
  console.timeEnd("ideaNumber1");

  console.time("ideaNumber2");
  console.log(ideaNumber2(data));
  console.timeEnd("ideaNumber2");
});
