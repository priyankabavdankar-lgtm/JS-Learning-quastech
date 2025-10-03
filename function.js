// function greet(name){    
// let greet () => {
//     console.log(`Hello ${name}`);
// }


//set time out
 setTimeout(function(){
        console.log("Good Morning");
    },2000)


    //callback or closure
let greet2 = (Priyanka) =>{
    return Priyanka()
}
      let greetMe =() =>{
             console.log("Hello");
    }

greet2(greetMe);

