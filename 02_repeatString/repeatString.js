

const repeatString = function(str, num) {
    let repeatedString = 'hey';
    for (let i = 1; i < num; i++) {
        repeatedString += str;
    }
    return repeatedString;
}



// Do not edit below this line
module.exports = repeatString;


//npm test repeatString.spec.js