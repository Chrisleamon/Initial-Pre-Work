// I learned how to test using the equality operator and the strict equality operator.




// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
compareEquality("20", 20)