let f2;

function f1(callback){
    for (let i = 0; i < 5; i++) {
        console.log(i);
}

f2 = function(callback){
    callback();
}

function sayHello(){
    console.log("Hello");   
}

callback();
f2(sayHello);

}

function greet(){
    console.log("Good Morning");
    
}
f1(greet);

console.log("Callback Function");


