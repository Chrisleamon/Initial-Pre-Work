// I learned that in parsing that you could use another integer in lieu of that to determine the base number, like binary or hexadecimal.




function convertToInteger(str) {
    var radix = 2;
    return parseInt(str, radix);
}

convertToInteger("10011");