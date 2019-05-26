// I learned how to connect a series of variables and strings together.




function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    myNoun = "cat";
    myAdjective = "little";
    myVerb = "hit";
    myAdverb = "slowly"
    var result = "The dog chased the " + myNoun + " all over the big house, then all over the " + myAdjective + " yard. Then they both ran and " + myVerb + " the brick wall. The " + myNoun + " ran away quickly while the dog ran away " + myAdverb + ". ";

    // Your code above this line
    return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");