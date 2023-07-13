const findTheOldest = function(people) {
    let oldestPerson;
    let oldestAge = 0;
    people.forEach(person => {
        let deathYear = Object.hasOwn(person, "yearOfDeath") ? person.yearOfDeath : 2023;
        let age = deathYear - person.yearOfBirth;
        if(age > oldestAge) {
            oldestPerson = person
            oldestAge = age
        }
    });
    console.log(oldestPerson.name)

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
