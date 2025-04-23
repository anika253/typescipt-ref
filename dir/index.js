"use strict";
let x = 1; //type interferencing ..is is plain js
console.log(x);
let y = 1; // it is typescipt code
console.log(y); // specify its type
//index.js m only js only here
/*let z: number = 1;
z = "harkirat";
console.log(z);*/
function greet(firstname) {
    console.log("hello" + firstname);
}
let s = 1;
console.log(s);
greet("anika");
// never use any not a good practice btw here
// write a function that calcualtes sum of 2 numbers in input and returns the sum here
function sum(a, b) {
    return a + b;
}
let ans = sum(1, 2);
console.log(ans);
// return true if age is greater than 18 else false here in this funciton
function age(a) {
    if (a > 18) {
        return true;
    }
    else {
        return false;
    }
}
// this function is getting its return type on its own the type is only of the parameters u r passing to this function here !
//typescript compiler is smart enough to infer that thing here
// create a function that takes another function as an input ands runs it after 1 sec
//npx tsc --b (gives index.js )
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
function log() {
    console.log("hello");
}
delayedCall(log);
let sumy = (a, b) => {
    return a + b;
};
//donnt push js file to github
// npx tsc -b to buils the typescipt file and create a corr js gile
