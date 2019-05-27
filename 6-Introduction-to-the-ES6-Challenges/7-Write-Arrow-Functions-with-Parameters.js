// I learned that you can pass variables into a function and get a return while using the arrow function.




const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));