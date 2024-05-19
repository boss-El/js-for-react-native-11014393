
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

module.exports = { processArray };

function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        return numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}

module.exports = { processArray, formatArrayStrings };
