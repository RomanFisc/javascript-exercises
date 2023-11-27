const palindromes = function (str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');

    return reverseStr === lowRegStr;
};



//input desired string 
//if the first letter === last letter, continue 
//else if the second letter === second to last letter, continue 
// else if the third letter === 
// else return false

//npm test palindromes.spec.js
// Do not edit below this line
module.exports = palindromes;
