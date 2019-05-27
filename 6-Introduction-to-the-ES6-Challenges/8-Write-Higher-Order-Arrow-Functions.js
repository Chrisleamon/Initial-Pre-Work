// I learned how to use the arrow function to pass the drawn area of a map into a map function.




const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    "use strict";
    // change code below this line

    const squaredIntegers = arr.filter(digit => digit > 0 && digit % parseInt(digit) === 0).map(digit => Math.pow(digit, 2));

    // change code above this line
    return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);



