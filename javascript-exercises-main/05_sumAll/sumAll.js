const sumAll = function(a, b) {
    if(typeof(a) != "number" || typeof(b) != "number" || a < 0 || b < 0) {
        return 'ERROR'
    }
    
    let bigNumber = Math.max(a, b)
    let smallNumber = Math.min(a, b)
    let sum = 0

    for (let i = smallNumber; i <= bigNumber; i++) {
        sum += i
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
