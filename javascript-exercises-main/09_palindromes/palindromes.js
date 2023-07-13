const reverseString = function(s) {
    let final = ''
    for (let i = 0; i < s.length + 1; i++) {
        final = final + s.charAt(s.length - i);
        
    }
    return final
};

const palindromes = function (s) {
    let stripped = s.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase();
    console.log(stripped)
    return stripped == reverseString(stripped)
};

// Do not edit below this line
module.exports = palindromes;
