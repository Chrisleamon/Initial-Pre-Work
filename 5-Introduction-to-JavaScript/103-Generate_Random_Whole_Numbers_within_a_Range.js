// Learned how to utilize the random number to generate a random number within a range.




// Example
function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax, equals) {
    equals = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    return equals; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);