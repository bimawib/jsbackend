// FUNCTION
console.log("function");

// function namaFungsi(parameter){blok kode}
function printName(){
    console.log("Uruca is cute");
}
printName();

function perkalian(a,b){
    console.log(a * b);
} // a, b adalah parameter
perkalian(5,3); // 5, 3 adalah argument

function greeting(name,gender){
    if(gender == "male"){
        console.log("Good Morning, Mr. "+name);
    }else if(gender == "female"){
        console.log("Good Morning, Mrs. "+name);
    }else{
        console.log("Good Morning, "+name);
    }
}
greeting("Bima","male");

function pembagian(a,b){
    return (a/b);
}
let hasilBagi = pembagian(27,3);
console.log(hasilBagi);

// Using Object as a Parameter
let myProfile = {
    myName: "Bima Encun",
    myAge: 22,
    myHeight: 178,
}
function printNameFromObject({myName,myAge},isMarried){
    console.log("Nama Saya "+myName+", Umur saya "+myAge+" Tahun. Saya "+isMarried+" Menikah");
} // use {} to destructure one of object property
printNameFromObject(myProfile,"Belum");

const pangkat = function(baseNumber, powerOf = 2){
    let result = baseNumber ** powerOf;
    console.log(`${baseNumber} ^ ${powerOf} = ${result}`);
}
pangkat(5); // meskipun argument kedua tidak dimasukkan, argument powerOf akan menyesuaikan default value (2)

// REST PARAMETER
function juaraLomba(namaLomba,...peserta){
    let count = 1;
    peserta.forEach(element => {
        console.log(`Posisi ke-${count} lomba ${namaLomba} diraih oleh ${element}`);
        count++;
    });
} // rest parameter tidak boleh didefine di awal
juaraLomba("ALGS","Bima","Kalthoy","Eden");

// ARROW FUNCTION
let arrowFunction = () => {
    console.log("this is printed using arrow function");
} // can only declared as expression (assigned to variable)
arrowFunction();

let sudahMakanBelum = (status = "belum") => {
    console.log(`saya ${status} makan`);
}
sudahMakanBelum();

let oneLineFunction = name => console.log(`Halo ${name}`)
// not using {} is still work because it only 1 line code
oneLineFunction("Kalthoy");

let returnFromOneLine = (a,b) => (a*b); // this one return value of a * b without using return (only work for 1 line)
console.log(returnFromOneLine(5,4));

// SCOPE
let thisIsGlobalFunction = "Global Scoped";

function scopeFunction(){
    let thisIsLocalFunction = "Local Scoped";
    // local function ini tidak dapat diakses diluar fungsi
    return thisIsLocalFunction;
}

console.log(thisIsGlobalFunction);
console.log(scopeFunction());

// CLOSURE
function parentFunction(){
    let cutestStreamer = "Uruca";

    function childFunction(){
        console.log(cutestStreamer);
    }
    // this is a closure, can access its parent variable
    childFunction();
}

parentFunction();
