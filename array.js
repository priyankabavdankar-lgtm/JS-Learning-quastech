// // let arr = [];

// // for (let i=0; i<=10; i++){
// //     arr[i] = i;
// // }
// // console.log(arr);

// let arrNum =[32,62,35,46,92,45];

// let max = 0;
// for(let i=0; i<arrNum.length; i++){
//     max = Math.max(max,arrNum[i]);
// }

// console.log(max);

// let difference = Infinity;
// let index = 0;
// let secondLargest = 0;

// // for(let i=0; i<arrNum.length; i++){
// //     if(arrNum[i] == max) continue
// //     else (difference = Math.min(difference, max-arrNum[i]))

// //     index = arrNum.indexOf(max-difference)
// // }

// // secondLargest = arrNum[index];
// // console.log(secondLargest);

// // let sortedArray = arr.sort();
// // console.log(secondLargest);


// // console.log(arr.reverse(arr.length));


// inbuils method reverse
// let arr = [23,45,46,74,32]

// let sortedArray = arr;

// console.log(arr.reverse(arr.length));


// inbuils method reverse logic

// arr = [23,45,46,74,32]
// let n = arr.length;
// let first = 0;
// let last = n-1;

// while(last>=first){
//     let temp = arr[first];
//     arr[first] = arr[last];
//     arr[last] = temp;
//     first++;
//     last--;
// }

// console.log(arr);


let arr = [23,45,46,74,32] 



    let first = 0
let n = arr.length;
let last = n-1;


while(last>=first){
    let temp = arr[first]
    arr[first] = arr[last]
    arr[last] = temp;

    first++
    last--
}

console.log(arr);

// }

// reverseArray(arr)


arr.push(24)
arr.push(25)
arr.push(26)
arr.push(27)
console.log(arr);


console.log(arr.pop());
console.log(arr);

console.log(arr.pop());
console.log(arr);

console.log(arr.pop());
console.log(arr);


console.log(arr.shift());
console.log(arr);

console.log(arr.shift());
console.log(arr);

arr.unshift(49)
console.log(arr);

arr.unshift(50)
console.log(arr);

// arr.splice(3,0,2,34)

// console.log(arr);

arr.splice(2,3)
console.log(arr);

