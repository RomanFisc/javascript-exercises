const sumAll = function(num1, num2) {
    let finalSum = 0;
    let biggerNum = Math.max(num1,num2);
    let smallerNum = Math.min(num1,num2);

    if (typeof num1 === "string" || typeof num2 === "string") {
        return "ERROR";
    }
    else if ((biggerNum >=0) && (smallerNum >=0)) {
        for (let i = smallerNum; i <= biggerNum; i++) {
        finalSum = finalSum + i;
        }
    }
    else {
        return "ERROR";
    }
    console.log(finalSum);
    return finalSum;

}




// Do not edit below this line
module.exports = sumAll;


// npm test sumAll.spec.js
