/// DATA STRUCTURE

// Object
let identitas = {
    nama : "Bima",
    nim : 175080607111023,
    isGraduated : true
} // object terdiri dari pasangan key - value
console.log(identitas.nim);

const bajuSaya = {
    jumlah: 13,
    warna: "ungu",
    gambar: "kucing",
}
console.log(bajuSaya);

bajuSaya.gambar = "Uruca"; // mengubah nilai dalam object tinggal panggil lalu gunakan =
console.log(bajuSaya);

bajuSaya.apaBagus = true; // 
console.log(bajuSaya);
// ketika mengubah object, jika key value sudah ada, maka nilainya akan diganti. namun jika belum ada maka key value baru akan ditambahkan ke dalam object

delete bajuSaya.warna;
console.log(bajuSaya);

// Array
let myArray = ["Uruca", 13, false];
console.log(myArray[1]);
console.log("Jumlah properti myArray adalah "+myArray.length);

myArray.push("Kawaii"); // menambahkan data ke index terakhir array
console.log(myArray);

myArray.pop(); // untuk mengeluarkan data dari index terakhir array
console.log(myArray);

myArray.shift();
console.log(myArray); // shift untuk mengeluarkan data dari index pertama array

myArray.unshift("Uruha"); // unshift untuk menambahkan data ke index pertama array
console.log(myArray);

delete myArray[1];
console.log(myArray);

myArray.splice(1,1); // dengan splice posisi indexnya juga akan terhapus sehingga elemen setelahnya akan maju
myArray[1] = true;
console.log(myArray);

// spread operator ARRAY
let favoriteVtuber = [
    "Uruca",
    "Uruha",
    13
];
let favoriteStreamer = [
    "Tarik",
    "Matsu",
    "cheekyttt"
];
let allFavorite = [...favoriteStreamer,...favoriteVtuber]; // penggunaan spread operator untuk combine 2 array

console.log(favoriteVtuber); // tanpa spread operator
console.log(...favoriteVtuber); // dengan spread operator
console.log(allFavorite); // combine array dengan spread operator

const profileVtuber = {
    name: "Uruca",
    age: 22,
    height: 155,
}
const profileCompetitive = {
    tournament: "ALGS JAPAN",
    title: "CHAMPIONS",
    isMvp: true,
}
const profileUruca = {
    ...profileVtuber,
    ...profileCompetitive,
}; // penggunaan spread operator untuk combine object

console.log(profileUruca);


// Destructuring Object

const cute = {
    name: "Uruca",
    origin: "Japan",
    age: 22,
}

// destructure while DECLARE variable
const {origin} = cute; // destructure object cute, tidak perlu semua variabel dimasukkan ke dalam {}
console.log(origin);

// destructure ASSIGNED variable
const namae = {
    firstName: "Hinano",
    lastName: "Tachibana",
} // disini objectnya sudah diinstance ke variable namae

// disini kita buat variable yg keynya sama dengan property namae
let firstName = "Hi";
let lastName = "Chan";

({firstName,lastName} = namae); // destructure tanpa harus declare variable. istilahnya kita overwrite variable yg sudah ada dengan value dari object namae
console.log(firstName);

const {isCute} = cute; // jika properti tidak ada di object maka nilai defaultnya adalah undefined, kecuali jika didefinisikan default valuenya
console.log(isCute);

// setelah didefinisikan default value
const {isKawaii = true} = cute;
console.log(isKawaii); // akan menghasilkan true karena default valuenya true dan property isKawaii tidak ada di obj

// assign destructured property to different variable name
const kucing = {
    nama: "Bolu",
    umur: 13,
}

const {nama: name, umur: age} = kucing; // disini kucing.umur di destructure dan di assign ke nama var baru yaitu age
console.log(age);

// Destructure ARRAY
const blueLockTeam = ["Bastard Munchen","Manshine City","Ubers","PXG"];

const [firstTeam,secondTeam,thirdTeam,fourthTeam] = blueLockTeam;
console.log(firstTeam);

const BLRANK = [
    "Barou",
    "Nagi",
    "Bachira",
    "Chigiri",
    "Isagi"
];
const [,,,,fifthRanking] = BLRANK; // hanya declare satu variable local saja untuk value array di index tertentu
console.log(fifthRanking);

// destructure to assigned variable
let favPlayer = "Chigiri"; // this is declaring local var
let hatePlayer = "Karasu";

[favPlayer,hatePlayer] = BLRANK;// it follow the array index
console.log(favPlayer);

let bastardTransfer = "Isagi";
let uberTransfer = "Barou";

[bastardTransfer, uberTransfer] = [uberTransfer, bastardTransfer]; // destructure to swap between 2 value
console.log(uberTransfer);

let jokiApex = [
    "Bronze",
    "Silver",
    "Gold",
    "Platinum",
    "Diamond"
]
const [bronze,silver,gold,platinum,diamond,master = "Master (Unavailable)"] = jokiApex;
console.log(master); // assign default value

