// I learned that you can also make variables that are read only.




function printManyTimes(str) {
    "use strict";

    // change code below this line

    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }

    // change code above this line

}
printManyTimes("freeCodeCamp");