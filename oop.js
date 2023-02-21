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

// tarikAbi.follower = 10;
// console.log(tarikAbi);
// tarikAbi.isFamous();
// unprotected class can get its property changed easily

class Mail{

    constructor(sender,receiver,subject,body){
        this.sender = sender;
        this.receiver = receiver;
        this.subject = subject;
        this.body = body;
        this.senderMail = `${sender}@gmail.com`;
    }

} // nilai property biasanya diambil dari constructor agar bervariasi antar instance-nya
const mail1 = new Mail("Bima","Kalthoy","I like you","uwu");
const mail2 = new Mail("Bima","Eden","I like you too","uwu");
const mail3 = new Mail("Bima","KT","I love you","uwu");

console.log(mail1);
console.log(mail2);
console.log(mail3);

// Accessor Property (getter & setter)
class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName,lastName = ""] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const user = new User("Kalimah","Thoyyibah");
console.log(user);
console.log(user.fullName);

user.fullName = "Chika";
console.log(user);
console.log(user.fullName);

class Koordinat{
    #fullKoordinat = null; // enclosing class
    constructor(LU,LS,BT,BB){
        this.LU = LU;
        this.LS = LS;
        this.BT = BT;
        this.BB = BB;
        this.#fullKoordinat = `${this.LU} LU - ${this.LS} LS - ${this.BT} BT - ${this.BB} BB`;
    }

    get fullKoordinat(){
        return this.#fullKoordinat;
    }
    set fullKoordinat(fullKoordinat){
        console.log("this properties cannot be changed!");
    }

}

const koordinatTreasure = new Koordinat(57,18,63,177);
console.log(koordinatTreasure.fullKoordinat);
// koordinatTreasure.#fullKoordinat = 12412421;
console.log(koordinatTreasure.fullKoordinat);
// sebenarnya bisa dirubah dengan _fullKoordinat namun convention menyatakan hal tersebut tidak direkomendasikan karena _underscore bersifat private

class ApexLegends{
    constructor(heroName){
        this.heroName = heroName;
        this._internalMethod = this._generateInternalMethod();
    }

    tactical(){
        console.log(`Using ${this.heroName} tactical ability (Q) !`);
    }
    ultimate(){
        console.log(`Using ${this.heroName} ultimate ability (Z) !`);
    }
    landingSpot(spot){
        console.log(`I'm going to land in ${spot}`);
    }
    _generateInternalMethod(){
        return "This is generated from internal method";
    }
}

const horizon = new ApexLegends("Horizon");
console.log(horizon);
horizon.ultimate();
horizon.landingSpot("Climatizer");

// INHERITANCE

class ContentCreator{
    constructor(name,org){
        this.name = name;
        this.org = org;
    }

    name(){
        console.log(`This streamer name is ${this.name}`);
    }

}

class Vstreamer extends ContentCreator {
    isKawaii(trukah){
        if(trukah){
            console.log(`This VTuber called ${this.name} is so CUTE`);
        } else {
            console.log(`This VTuber called ${this.name} is NOT CUTE`);
        }
    }
}
class TwitchStreamer extends ContentCreator {
    isFamous(trukah){
        if(trukah){
            console.log(`This twitch streamer called ${this.name} is so FAMOUS`);
        } else {
            console.log(`This twitch streamer called ${this.name} is NOT FAMOUS`);
        }
    }
}

const urucaBaby = new Vstreamer("Uruca","CR");
console.log(urucaBaby);
urucaBaby.isKawaii(true);

const giruru = new TwitchStreamer("Guil","Orgless");
console.log(giruru);
giruru.isFamous(false);

console.log(urucaBaby instanceof Vstreamer); // true
console.log(urucaBaby instanceof TwitchStreamer); // false
console.log(urucaBaby instanceof ContentCreator); // true
// instance of untuk mengecek inheritance dari suatu class

// OVERRIDING
class Warung {
    constructor(nama){
        this.nama = nama;
    }
    favorit(){
        console.log("Semua makanan disini ENAK!");
    }
}
class WarungBakso extends Warung{
    constructor(nama,menuFavorit){
        super(nama);
        this.menuFavorit = menuFavorit;
    } // constructor overriding
    favorit(){
        console.log(`Makanan favorit di ${this.nama} adalah ${this.menuFavorit}`);
    } // method overriding
}

const warungBiasa = new Warung("Warung Komarudin");
console.log(warungBiasa);
warungBiasa.favorit();

const warungBasoPK = new WarungBakso("PK","Bakso KNTL");
console.log(warungBasoPK);
warungBasoPK.favorit();

// OBJECT COMPOSITION
class Developer{
    constructor(name){
        this.name = name;
    }
    commitChanges(){
        console.log(`${this.name} is commiting changes`);
    }
}

function canBuildFrontEnd(developer){
    return{
        buildFrontEnd: () => {
            console.log(`${developer.name} is building front end part`);
        }
    }
}

function canBuildBackEnd(developer){
    return{
        buildBackEnd: () => {
            console.log(`${developer.name} is building back end part`);
        }
    }
}

function canDeployApp(developer){
    return{
        deployApp: () => {
            console.log(`${developer.name} is deploying app`);
        }
    }
}

function createFrontEndDeveloper(name){
    const developer = new Developer(name);
    return Object.assign(developer,canBuildFrontEnd(developer));
}
function createBackEndDeveloper(name){
    const developer = new Developer(name);
    return Object.assign(developer,canBuildBackEnd(developer));
}
function createDevOps(name){
    const developer = new Developer(name);
    return Object.assign(developer,canDeployApp(developer));
}
function createFullStackDeveloper(name){
    const developer = new Developer(name);
    return Object.assign(developer,canBuildFrontEnd(developer),canBuildBackEnd(developer),canDeployApp(developer));
}

const juniorDev = createFullStackDeveloper("Bima");
console.log(juniorDev);
juniorDev.commitChanges();
juniorDev.deployApp();

// BUILT IN CLASS
const tanggal = new Date();
const timeInJkt = tanggal.toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
console.log(timeInJkt);

const arrayBaru = new Array(1,2,3,4,5);
console.log(arrayBaru);
