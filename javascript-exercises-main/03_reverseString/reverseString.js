const reverseString = function(s) {
    let final = ''
    for (let i = 0; i < s.length + 1; i++) {
        final = final + s.charAt(s.length - i);
        
    }
    return final
};

// Do not edit below this line
module.exports = reverseString;
