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

// Tipe data null
let fillLater = null;
console.log(fillLater);
fillLater = 13;
console.log(fillLater);

// OPERATOR
let assigned = 1976; // = is assignment operator
console.log(assigned);

let x = 10;
let y = 3;
x += y; // shortcut (x = x + y)
console.log(x);

let hitungA = 19;
let hitungB = 6;
let stringSatu = "1";
let angkaSatu = 1;
console.log(hitungA == hitungB); // comparison operator
console.log(hitungA != hitungB);
console.log("identik or no?");
console.log(stringSatu == angkaSatu);
console.log(stringSatu === angkaSatu); // ini akan false karena stringSatu tipenya string sementara angkaSatu number

console.log('logical operator');
let aa = 10;
let bb = 13;
// AND OPERATOR (true if all condition meet)
console.log("AND OPERATOR");
console.log(aa < 15 && bb > 10); // true + true  = true
console.log(aa > 15 && bb > 10); // false + true = false

// OR OPERATOR (true if at least 1 condition true)
console.log("OR OPERATOR");
console.log(aa > 30 || aa < bb); // false + true = true
console.log(aa > bb || aa > 13); // false + false = false

console.log("NOT OPERATOR");
console.log(aa != bb); // true karna aa tidak sama dengan bb
console.log(aa == bb); // false karena tidak sama

// IF ELSE STATEMENT
const isRaining = 0;
console.log("Persiapan sebelum berangkat kegiatan.");
if (isRaining) {
    console.log("Hari ini hujan. Bawa payung.");
}
console.log("Berangkat kegiatan.");

let nilaiBiotek = 79;

if(nilaiBiotek > 70){
    console.log(`selamat anda lulus matkul biotek dengan nilai ${nilaiBiotek}`);
} else {
    console.log("mohon maaf anda harus remed");
}

const isAdmin = false; // ternary operator / shortcut
const canHeWrite = isAdmin ? 1 : 0;
console.log(canHeWrite);

// SWITCH STATEMENT
console.log("SWITCH CASE");
let kkm = 70;
let msg;
switch(true){
    case (kkm > 70):
        msg = `nilai di atas kkm, anda lulus dengan nilai ${kkm}`;
        break;
    case (kkm < 70):
        msg = 'nilai di bawah KKM, anda tidak lulus';
        break;
    default:
        msg = 'nilai anda pas KKM, (tapi tetep lulus kok)';
} // switch (expression) doesnt have to be var, could be true if you wanna check the condition in case. but ill prefer if you do this in if else instead

console.log(msg);

// LOOPING
// for loop
for(let i = 1; i <= 5; i++){
    console.log('perulangan ke-'+i);
} //

// for of loop (for array) || for php there is foreach
let arrayNilai = [76,13,42];
let averageNilai = null;
let jumlahSiswa = arrayNilai.length;
let muridCount = 1;

for(let nilaiSiswa of arrayNilai){
    averageNilai += nilaiSiswa;
    console.log("nilai murid ke-"+muridCount+" adalah "+nilaiSiswa);
    muridCount++;
}

console.log("Rata rata nilai di kelas biotek adalah "+ (averageNilai / jumlahSiswa));

// while loop
let whileCount = 1;
while(whileCount <= 13){
    console.log('count down...'+whileCount);
    whileCount++; // jangan lupa tulis iterator atau terjadi infinite looping karena kondisi di while() bisa jadi selalu true
}

let istri = 3;
do{
    console.log("istri saya ada-"+istri);
    istri++;
} while(istri < 3);
