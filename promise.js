// function Bank() {
//     let resolveFn, rejectFn;

//     let p1 = new Promise ((resolve, reject) =>{
//         resolveFn = resolve;
//         rejectFn = reject;
//     })

//     return {
//         Authenticate(name,password) {
//             if(!name || !password) {
//                 rejectFn("Wrong Credintials");
//                 return;
//             }
//             else if (name =="Priyanka" && password == "12345") {
//                 resolveFn ("Login Successfull");
//             }
//             else {
//                 rejectFn("Empty Fields");
//             }

//             return p1;
//         }
//     }
// }

// console.log(Bank().Authenticate("Priyanka", "12345" ));

//promise pending

// let B1 = Bank();

// B1.Authenticate("Abc","123")

// .then((data)=>{
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })



////pending----ask sir above sum


///fetch api and async await

// async function fetchdata(){
//     try{
//         let resp = await fetch ("https://jsonplaceholder.typicode.com/posts");
//         let o1 = await resp.json();
//         console.log(Object.keys(o1[0]));

//         o1.map((value) => {
//             console.log(value.id);
//         })
//     }

//     catch(error){
//         console.log(error);
//     }
    
// }

// fetchdata();

//lSet interval and setTimeout

let count = 0;

let interval = setInterval(() => {
    count++;
    console.log(count);

    if(count==10){
        clearInterval(interval)
    }
},1000,clearInterval(interval))

console.log("start");

setTimeout(() => {
    console.log("Hello");
},2000);

console.log("End");