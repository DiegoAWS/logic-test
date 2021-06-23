;
const { fetchData } = require("./fetchData");
const ideaNumber1 = require("./solution/ideaNumber1");
const { ideaNumber2 } = require("./solution/ideaNumber2");



fetchData().then((data) => {
  console.time("ideaNumber1");
  console.log(ideaNumber1(data));
  console.timeEnd("ideaNumber1");

  console.time("ideaNumber2");
  console.log(ideaNumber2(data));
  console.timeEnd("ideaNumber2");
});
