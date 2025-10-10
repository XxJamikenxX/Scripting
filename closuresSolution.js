let counter = function (increment) {
    /*
        Uncomment the line that will correctly result in a separate (rather than shared) 
        counter if multiple counter functions are defined
    */
    let count = 0; // must use 'let' so each closure has its own count

    /*
        Create and return an inner function that receives a value increment
        and increments the value stored in count by increment.
    */
    return function() {
        count += increment;
        return count;
    };
};

let countByTwo = counter(2); // closure adds 2 each time
let countByOne = counter(1); // closure adds 1 each time

// DO NOT change the lines below
console.log(countByTwo()); // 2
console.log(countByOne()); // 1
console.log(countByTwo()); // 4
console.log(countByOne()); // 2
