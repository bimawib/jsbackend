console.log("hello js");
console.log("hello kal");
console.log("hello eden");

// node for REPL mode
// node .\filename.js for open external file

// this is single line comment
/* this is
multi line comment */

let firstName; // this is statement declaration
firstName = "Bima"; // this is assignment expression
console.log(firstName);

let fullName;
firstName = (fullName = "Bima Wibowo"); // declare + assign

let wifeName = "Miyu Ottavia"; // declare + assign
console.log(firstName+" is the husband of "+wifeName);

firstName = "Kal"; // a variable value could still change
console.log(firstName);

/* 
THIS code wont work because var could only declared with alphabet (a-z) or underscore (_)
let 5anjing = "ada 5 anjing";
console.log(5anjing); 
*/

const bebebName = "URUCA"; // Constant value CANNOT be changed after declared!
console.log(bebebName);

/*
This would result an error since it try to assign value to constant variable
bebebName = "Miyu";
console.log(bebebName);
*/

let undefine; // data tipe UNDEFINED
console.log(typeof(undefine));

let number = 13; // data tipe NUMBERS
// untuk angka desimal bisa gunakan . sebagai pecahannya
console.log(typeof(number));

// Operasi Aritmatika pada tipe data number
// + (penjumlahan), - (pengurangan), / (pembagian), * (perkalian), % (modulo / hasil bagi), ** (pangkat)

let increaseThisByOne = 12;
increaseThisByOne++; // operator increment untuk menambah nilai 1 angka kepada variabel yang berkaitan
console.log(increaseThisByOne);

// Tipe number BigInt, untuk bilangan diatas 2^53. tambah n 
const bigInt = 1234567890123456789012345678901234567890n;
const normalInt = 1234567890123456789012345678901234567890;
const bigIntButSmall = 13n;
console.log(bigInt);
console.log(normalInt);
console.log(bigIntButSmall);

let bigIntOne = 10n;
let bigIntTwo = 3n;
console.log(bigIntOne+bigIntTwo);
console.log(bigIntOne-bigIntTwo);
console.log(bigIntOne*bigIntTwo);
console.log(bigIntOne/bigIntTwo); // untuk bagi nilai dibulatkan kebawah, nilai nondesimal
console.log(bigIntOne%bigIntTwo);

// Tipe data string
let hero = "Meepo";
console.log(typeof(hero));

let quoteInside = '"do you have any problem?"';
console.log(quoteInside);
let quoteEscape = 'i think he\'s "smart" right?';
console.log(quoteEscape);

let namaDepan = "Arjuna";
let namaBelakang = "Furqon";
let namaLengkap = namaDepan +" "+ namaBelakang; // bisa gunakan operator + untuk menggabungkan string
console.log(namaLengkap);
console.log(`hello, nama saya ${namaLengkap}`); // kalau ingin string interpolation / masukan variabel ke string bisa gunakan backtick `x` untuk menuliskan stringnya

// Tipe data boolean
let boolTrue = true;
let boolFalse = false;
console.log(typeof(boolTrue));
console.log(typeof(boolFalse));
console.log(boolTrue);
console.log(boolFalse);

let lebihBesarKah = 13 > 1976;
console.log("apakah 13 lebih besar dari 1976? = "+lebihBesarKah);

let fillLater = null;
console.log(fillLater);
fillLater = 13;
console.log(fillLater);