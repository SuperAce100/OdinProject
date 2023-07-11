const repeatString = function(s, n) {
    let final = ''
    if (n < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < n; i++) {
        final = final + s;
    }
    return final;
};

// Do not edit below this line
module.exports = repeatString;
