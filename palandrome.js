let str = prompt("Enter the word");

let strArray = str.split("").reverse().join("");

str == strArray ? alert("It is a Palindrome") : alert("It is not a Palindrome");