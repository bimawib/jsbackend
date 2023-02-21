// Object Oriented Programming

const car = {
    // properties
    brand: "Toyota",
    color: "Black",
    maxSpeed: 270,
    country: "Japan",

    // methods
    drive: function(){
        console.log("Driving!");
    },
    brake: function(){
        console.log("Braking!");
    },
    parking: function() {
        console.log("Parking!");
    },
    turn: () => {
        return "This value is returned from object method";
    }
}

console.log(car.country);
car.drive();

let turnStatement = car.turn();
console.log(turnStatement);

// Constructor
function CarBlueprint(brand,name,color,country){
    this.brand = brand;
    this.name = name;
    this.color = color;
    this.country = country;
}
CarBlueprint.prototype.drive = function() {
    console.log(`This ${this.brand} ${this.name} is from ${this.country}`);
}

const toyotaSupra = new CarBlueprint("Toyota","Supra","Red","Japan");
console.log(toyotaSupra);
toyotaSupra.drive();

// declare function and assign it param to this.param for property constructor.
function ThisVtuber(name,organization,isKawaii = false){
    this.name = name;
    this.organization = organization;
    this.isKawaii = isKawaii;
}

// declare function inside object prototype for method constructor
ThisVtuber.prototype.onStream = function(game = ""){
    if(this.isKawaii){
        console.log(`This very cute streamer ${this.name} from ${this.organization} is streaming ${game} right now! go watch!`);
    } else{
        console.log(`${this.name} from ${this.organization} is streaming ${game} right now! go watch!`);
    }
}

ThisVtuber.prototype.offStream = function(){
    if(this.isKawaii){
        console.log(`This very cute streamer ${this.name} from ${this.organization} is not streaming right now, stay tuned later!`);
    } else{
        console.log(`${this.name} from ${this.organization} is not streaming right now, stay tuned later!`);
    }
}

urucaVtuber = new ThisVtuber("Uruca","Crazy Raccoon",true);
console.log(urucaVtuber);
urucaVtuber.onStream("Apex Legends");
console.log(typeof(ThisVtuber));

class Streamer {
    constructor(name,org,follower = 0){
        this.name = name;
        this.org = org;
        this.follower = follower;
    }

    isFamous(){
        if(this.follower >= 10000){
            console.log(`${this.name} is a very famous streamer`);
        }else{
            console.log(`${this.name} is a streamer`);
        }
    }

}

let tarikAbi = new Streamer("Tarik","Sentinels",2700000);
console.log(tarikAbi);
tarikAbi.isFamous();


