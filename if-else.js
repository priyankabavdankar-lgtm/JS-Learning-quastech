// if(num>= 18 && num<40){
//     alert("Elligible");
// }else if(num>60 ){
//     alert("Senior citizen");
// }else if(num>=40 && num<=60){
//     alert("normal voter")
// }else{
//     alert("Not elligible")
// }

let run = 90
let balls = 28
let strikerate = 200

if(run>=100){
    if(balls<=30){
        console.log("ExtraOdinary");
        if(strikerate>=400){
            console.log("Very aggressive player");  
        }else if( strikerate<400 && strikerate>=200){
            console.log("average player");
        }else{
           console.log("Poor average"); 
        }
    }else if(balls>=40 && balls<60){
        console.log("Noraml Player");
    }else{
        console.log("Slow player ");
    }
}else{
    console.log("bad player"); 
}

if(run>=100){
    if(balls<=30){
        console.log(Extraordinary);
        if(strikerate>=400){
            console.log("very aggressive player");
        }else if(strikerate<400 && strikerate>=200){
            console.log("average player");
        }else{
            console.log("Poor Average");
        }  
    }else if(balls>=40 && balls<60){
        console.log("Normal Player");
    }else{
        console.log("Slow Player");
    }
}else{
    console.log("Bad Player");
}