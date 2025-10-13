//by connecting two objects together
// const person = {
//     working : 'Yes',
//     greet () {
//         console.log("Hello");
//     }
// }

// const user = {
//     name : 'Priyanka',
// }
 
// user.__proto__ = person;

// user.greet();

// console.log(user.working);



// const person1 ={
//     working:'Yes',
//     greet(){
//         console.log("Good Morning");
//     }
// }

// const user1 = {
//     name : 'Margi',
// }

// user1.__proto__ = person1;

// user1.greet ();
// console.log(user1.working);


//-------------------xxxx----------------------------------------

// Prototype Injection

Array.prototype.first = function(){
    return this[0];
}

let arr = [1,2,3,4,5];

console.log(arr.first())


String.prototype.reverse = function() {
    return this.split("").reverse().join("");
}

let str = "Hello";

console.log(str.reverse());

Array.prototype.last = function () {
    return this[this.length-1];
}

let arr1 = [1,3,7,9,23];

console.log(arr1.last());

String.prototype.upper = function() {
    return this.toUpperCase();
}

let str1 = "Good Morning";

console.log(str1.upper());


///-------------------xxxx----------------------------------------
