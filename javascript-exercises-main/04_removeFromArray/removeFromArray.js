const removeFromArray = function(array) {

    let newArray = array;

    

    for (let i = 1; i < arguments.length; i++) {
        if (newArray.includes(arguments[i])) {
            index = newArray.indexOf(arguments[i]);
            newArray.splice(index, 1)
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
