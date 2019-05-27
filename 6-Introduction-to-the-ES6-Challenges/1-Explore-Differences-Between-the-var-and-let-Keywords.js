// I learned that you can use "strict" and a variable can only be declared once and other coding mistakes would not be allowed.




let catName;
let quote;
function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";

}
catTalk();