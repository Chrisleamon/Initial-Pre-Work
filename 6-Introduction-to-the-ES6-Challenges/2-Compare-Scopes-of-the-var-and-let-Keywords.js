// I learned the difference between using "strict" globally and locally.




function checkScope() {
    "use strict";
    let i = "function scope"


    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }


    console.log("Function scope i is: ", i);
    return i;
}

