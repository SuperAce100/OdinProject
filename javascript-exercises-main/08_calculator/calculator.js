const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(nums) {
  let sum = 0;
	nums.forEach(element => {
    sum += element;
  });
  return sum 
};

const multiply = function() {
  let result = 1;
	for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i];
    result *= element;
  }
  return result 
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  let result = 1;
	for (let i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
