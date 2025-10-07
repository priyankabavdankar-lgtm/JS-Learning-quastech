

// let arr = [23,45,46,74,32] 


// // Map method


// let mapped = arr.map(function(value){
    
//     return value%2 != 0
// })

// // filter

// let filterd = arr.filter((value)=>{

//     return value%2 != 0
    
// })

// console.log(mapped);


// console.log(filterd);


// Reduce 

// let reduced = arr.reduce((acc,succ)=>{
//     return acc+succ
// })

// console.log(reduced);




//Array Object // 7oct
// let arr = [[1,2,3],[4,5,6],[7,8,9]]

// for (let i = 0; i<arr.length; i++) {
//     for (let j = 0; j<arr[i].length; j++)
    
//     console.log(arr[i][j]);

//     }



//Object // like json

let obj = {

    name : "Priyanka",
    class : "Ist",
    phone : 8292332995,
    subject : "React",
    Roll_no : 1,
    Address : [{
        Street : "MG Road",
        Pin : 400091,
        City : "Mumbai",
    },
    {
        Street : "LT Road",
        Pin : 400092,
        City : "Mumbai",
    }],

    Address_loop: function(){
        for(let i=0; i<this.Address.length; i++){
            console.log(`Address ${i+1}`);

            let keys = Object.keys(this.Address[i])

            keys.forEach((key)=>{
                // console.log(`${key} : ${obj.Address[i][key]}`);

                console.log(`${key} : ${obj.Address[i][key]}`);

                console.log(`${key} : ${obj.Address[i][key]}`);
            })
        }
    }
}

// for (let key in obj){
    
// console.log(`${key} : ${obj[key]}`);
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj))

obj.Address_loop()

    