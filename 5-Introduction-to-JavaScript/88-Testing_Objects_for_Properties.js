// I learned how to check a property on an object by testing with an if statment.




// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    // Your Code Here
    if (myObj.hasOwnProperty(checkProp) == true) {
        return myObj[checkProp];
    }
    else {
        return "Not Found"
    }
}


// Test your code by modifying these values
checkObj("gift");