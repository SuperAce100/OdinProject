const fibonacci = function(n) {
    if (isNaN(n) || n < 0) {
        return 'OOPS';
    }    
    let number = Math.round(n);
    let currentNumber = 1;
    let prevNumber = 0;
    for (let i = 1; i < number; i++) {
        let temp = prevNumber;
        prevNumber = currentNumber;
        currentNumber = temp + currentNumber;
    }
    return currentNumber;
};

// Do not edit below this line
module.exports = fibonacci;
