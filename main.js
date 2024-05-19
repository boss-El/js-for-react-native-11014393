const { processArray, formatArrayStrings } = require('./arrayManipulation');
const { createUserProfiles } = require('./userInfo');

const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);

const strings = ["Ferrari", "Lamborghini", "Porsche", "Bugatti", "Maserati"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);

const userProfiles = createUserProfiles(strings, formattedStrings);

console.log(userProfiles);
