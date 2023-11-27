const fibonacci = function(num) {
    var num1 = 0;
    var num2 = 1;
    var sum; 
    var i = 0;
    if (num >= 0) {
        for (i = 1; i < num; i++) { 
            sum = num1 + num2;
            num1 = num2; 
            num2 = sum;
        }
    }   
    else { 
        return "OOPS";
    }
    return num2;
};


// npm test fibonacci.spec.js
// Do not edit below this line
module.exports = fibonacci;
