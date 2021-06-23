// R.difference R.uniq

/**
 * Remove duplicate elements from input
 */



const deDuplicate = (inputArray) => {
  let incomingArray = [...inputArray];
  
  const singleValues = R.uniq(inputArray);

  singleValues.forEach(item => {
    const indexToRemove=R.findIndex(incomingArray,item);
    
      incomingArray=[...incomingArray.slice(0,indexToRemove) ,...incomingArray.slice(1+indexToRemove)]
  });

console.log(incomingArray)
//   return incomingArray
};



const fetchData = async () => {
  const urlToFetch =
    "https://gist.githubusercontent.com/smaugho/25712886c4a7b938fdda2c41d5b0838e/raw/79d2e4f7cfef5ba01c633400dadc81219516b95b/mixed_decks_2";
  let data;

  try {
    const response = await fetch(urlToFetch);
    data = await response.json();
  } catch (error) {
    console.error("FETCH ERROR", { error });
  }

  deDuplicate(data);





};

fetchData();
