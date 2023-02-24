// FUNCTIONAL PROGRAMMING
console.log("Functional Programming");

const names = ['uruca','uruha','haru'];
const newNameWithSeru = names.map((names)=>`${names} !`);
console.log(newNameWithSeru);

// IMPURE FUNCTION
let PIPIN = 3.14;

const luasLingkaran = (r) => {
    return PIPIN * (r*r);
};
console.log(luasLingkaran(4));
PIPIN = 5; // disini fungsi luasLingkaran sudah tidak murni lagi karna mengandalkan nilai diluar fungsi yg dapat berubah
console.log(luasLingkaran(4));

// PURE FUNCTION
const areaOfCircle = (r) => {
    const pi = 3.14;
    return pi*(r*r);
};
console.log(areaOfCircle(4));
console.log(areaOfCircle(5));
console.log(areaOfCircle(6));
console.log(areaOfCircle(4));

// IMPURE FUNCTION (MERUBAH NILAI DILUAR FUNGSI)
const createPersonAge = (person, age) => {
    person.age = age;
    return person;
}
person = {
    name: "Bima",
}

const newPerson = createPersonAge(person,22);
// padahal niatnya untuk membuat instance person baru menggunakan data person lama, namun data person lama malah ikut berubah (IMPURE FUNCTION)

console.log(person,newPerson);

// PURE FUNCTION
const createPurePersonAge = (person,age) => {
    return {...person,age};
}
personDua = {
    name: "Kalthoy",
}
// personDua tidak akan berubah karna fungsi ini memakai destructure object untuk return valuenya
newPersonDua = createPurePersonAge(personDua,23);
console.log(personDua,newPersonDua);

// MUTABLE (NOT FUNCTIONAL PROGRAMMING)
const orang = {
    namaDepan: "Kal",
    namaBelakang: "Thoy",
}
const ubahNamaBelakang = (namaBelakang,orang)=> {
    orang.namaBelakang = namaBelakang;
}
ubahNamaBelakang("Thoyyibah",orang);
// TIDAK IMMUTABLE KARENA MENGUBAH NILAI OBJEK YANG SUDAH ADA
console.log(orang);

// IMMUTABLE (FUNCTIONAL PROGRAMMING (NICE!))
const orangDua = {
    namaDepan: "Chika",
    namaBelakang: "Edenia",
}
const ubahNama = (namaBelakangBaru,orang) => {
    return {...orang, namaBelakang: namaBelakangBaru};
}
const orangDuaUpdate = ubahNama("Eden",orangDua);
// INSTEAD OF CHANGING EXISTING OBJECT, MAKE A NEW ONE INSTEAD BECAUSE OF IMMUTABLE PRINCIPAL (FP)
console.log(orangDua,orangDuaUpdate);

// RECURSIVE (METODE MEMANGGIL FUNGSI ITU SENDIRI)

// not using recursive >
const countdownTime = (cd) => {
    for(let i = cd; i >= 0; i--){
        if(i == 0){
            console.log("MULAI!!!");
        }else{
            console.log(`countdown from-${i}`);
        }
    }
}
countdownTime(10);

// with RECURSIVE >
// bisa digunakan untuk mengganti fungsi perulangan
const countdownUp = (cd) => {
    console.log(`Hitungan mundur - ${cd}`)
    if(cd > 0){
        countdownUp(cd - 1);
    }
}
countdownUp(5);

// HIGHER ORDER FUNCTION
const hello = function(){
    console.log("HELLO");
}
const say = function(sayWhat){
    sayWhat();
}
const sayHello = function(){
    return function(){
        console.log("HELLO");
    }
}
hello();
say(hello);
sayHello()();

// REUSABLE FUNCTION
// Array Map (untuk melakukan fungsi sebanyak jumlah array)
const arrayBaru = ['uruca','is','baby'].map((name)=>{
    return `${name} - `;
});
console.log(arrayBaru);

const nilaiMurid = [
    {
        nama: "Bima",
        score: 69,
    },
    {
        nama: "Eden",
        score: 87,
    },
    {
        nama: "Kal",
        score: 100,
    }
];
// Array Filter (untuk mem-filter nilai dari suatu array dengan ketentuan tertentu)
const apakahDiatasKKM = nilaiMurid.filter(function(student){
    return student.score > 80;
});
console.log(apakahDiatasKKM);
// Array Reduce
const totalScore = nilaiMurid.reduce(function(acc, murid){
    return acc+murid.score;
},0);
console.log(totalScore);
// Array some (apakah ada setidaknya satu dari deretan array lolos berdasar kriteria yg kita tuliskan)
const arrayAngka = [1,2,3,4,5,6,7];
const fiveMultiplier = arrayAngka.some(function(element){
    return element % 5 === 0;
});
console.log(fiveMultiplier);
// Array find (menemukan nilai yg sesuai kriteria dan mengembalikan nilai pertama yg sesuai dgn kriteria tsb)
const findEden = nilaiMurid.find(function(murid){
    return murid.nama === "Eden";
});
console.log(findEden);
// Array sort
const arrayAlfabet = ["a","d","b","f","e","c"];
const sortedAlfabet = arrayAlfabet.sort();
console.log(sortedAlfabet);
// Array every (mengecek semua nilai sesuai kriteria)
const nilaiSemua = [60,70,88,76,83,64];
const minimumScore = 60;
const nilaiLulus = nilaiSemua.every(function(score){
    return score >= minimumScore;
});
console.log(nilaiLulus);
// Array Foreach
sortedAlfabet.forEach(function(alfabet){
    console.log(`Alfabet ini ${alfabet}`);
});
