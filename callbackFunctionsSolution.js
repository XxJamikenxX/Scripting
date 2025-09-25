let even_predicate = function (value) {
    // true if divisible by 2
    return typeof value === "number" && value % 2 === 0;
};

let odd_predicate = function (value) {
    // true if not divisible by 2
    return typeof value === "number" && value % 2 !== 0;
};

let undefined_predicate = function (value) {
    // strictly check undefined
    return value === undefined;
};

let null_predicate = function (value) {
    // strictly check null
    return value === null;
};

// Function that takes a predicate (callback) and a value
let check = function (predicate, value) {
    return predicate(value);
};

// DO NOT CHANGE ORDER OF OUTPUT
console.log(check(even_predicate, 9));      // false
console.log(check(odd_predicate, 9));       // true
console.log(check(even_predicate, 8));      // true
console.log(check(odd_predicate, 8));       // false

let x;
console.log(check(undefined_predicate, x)); // true
console.log(check(null_predicate, x));      // false
