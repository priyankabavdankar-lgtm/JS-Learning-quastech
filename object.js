//Closure

// function banking() {
//     let deposit = 12000;
//     console.log(deposit);
    
//     function withdraw() {
//         let withdrawAmt = 2000;
//         console.log(withdrawAmt);
        
//         function balance() {
//             let balance = deposit - withdrawAmt;
//             console.log(balance);
//         }
//         balance();
//     }
//     withdraw();
// }

// banking();


//class and destructuring

class car {
    constructor (name,price,color,average) {
        this.name = name;
        this.price = price;
        this.color = color;
        this.average = average;
    }

    display() {
        console.log(this.name);
        console.log(this.price);
        console.log(this.color);
        console.log(this.average);
    }
}

let c1 = new car("BMW", 5000000, "Black", 15);
c1.display();

let {name,price,color,average} = c1
console.log(name);

class Electric_car extends car {

    constructor(Battery_name, Capacity,Charging_time){
        super("Tesla", 8000000, "Red", 20);
        this.Battery_name = Battery_name;
        this.Capacity = Capacity;
        this.Charging_time = Charging_time;

        super.display();
    }

}

let E1 = new Electric_car("xyz", "5000mAH", "2hr");
comsole.log(E1);
 E1 .display();
