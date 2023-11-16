


const removeFromArray = function(array, ...newArray) {
    let a = array;
    let b = newArray;
    let c = a.filter(d => !b.includes(d));
    return c;
};



// Do not edit below this line
module.exports = removeFromArray;


// npm test removeFromArray.spec.js


//myArray.splice(2,1); passed first test but not multiple
//update: 