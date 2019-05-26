// I learned that if you miss a break statement in a switch chain then you can run a lot of code that was not supposed to run.




function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            return "Low";
            break;
        case 4:
        case 5:
        case 6:
            return "Mid";
            break;
        case 7:
        case 8:
        case 9:
            return "High";
            break;
    }
    // Only change code above this line  
    return answer;
}

// Change this value to test
sequentialSizes(1);
