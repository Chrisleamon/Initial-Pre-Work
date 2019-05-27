// I learned that using ... prior to a variable means everything presented in that lane is presented into the variable and can be used.




const sum = (function () {
    "use strict";
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3)); // 6


