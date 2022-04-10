const fs = require("fs");

const breedDetailsFromFile = function(breed, callback) {
  console.log("breedDetailsFromFile: Calling readFile...");

  fs.readFile(`./data/${breed}.txt`, "utf-8", (err, data) => {
    console.log("In readFile's callback, it has the data.");
    
    if (!err) callback(data);
  })
};

const printOutCatBreed = breed => {
  console.log('Return Value: ', breed);
};

breedDetailsFromFile('Bombay', printOutCatBreed);