const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    let maxAge = 0; 
    let oldestPerson = {};

    people.forEach(person => {
    let age;
    if (person.yearOfDeath) {
        age = person.yearOfDeath - person.yearOfBirth;
    } else {
        age = currentYear - person.yearOfBirth;
    }
    if (age > maxAge) {
        maxAge = age;
        oldestPerson = person;
    }
    });
    return oldestPerson
};


//npm test findTheOldest.spec.js
// Do not edit below this line
module.exports = findTheOldest;

