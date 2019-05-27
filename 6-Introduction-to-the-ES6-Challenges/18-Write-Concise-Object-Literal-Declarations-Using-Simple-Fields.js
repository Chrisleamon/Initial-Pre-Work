// I learned that you can use the pointer method to make an object.




const createPerson = (name, age, gender) => {
    "use strict";
    // change code below this line
    const Person = (name, age, gender) => ({ name, age, gender })
    return Person;
    // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object