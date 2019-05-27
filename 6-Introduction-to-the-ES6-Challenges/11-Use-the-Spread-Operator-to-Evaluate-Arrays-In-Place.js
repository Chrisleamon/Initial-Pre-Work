// I learned that in order to copy you just have to reuse the variable, and if you want it spreaded out then you need to use the spreader.




const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
    "use strict";
    arr2 = [...arr1]; // change this line
})();
console.log(arr2);



