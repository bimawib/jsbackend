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