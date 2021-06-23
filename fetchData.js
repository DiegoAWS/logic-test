const { default: axios } = require("axios");

 const fetchData = async () => {
    const urlToFetch =
      "https://gist.githubusercontent.com/smaugho/25712886c4a7b938fdda2c41d5b0838e/raw/79d2e4f7cfef5ba01c633400dadc81219516b95b/mixed_decks_2";
    let data = [];
  
    try {
      data = await (await axios(urlToFetch)).data;
    } catch (error) {
      console.error("FETCH ERROR", { error });
    }
  return data
   
  };
  module.exports = {fetchData}