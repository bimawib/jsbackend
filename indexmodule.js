console.log("Rebus air");
console.log("Tuang kopi");
console.log("Tuang air mendidih");
console.log("Siap disajikan selagi hangat");

// COMMON JS
// IMPORT ONLY 1 VALUE
// const coffeeStock = require('./statemodule');
// IMPORT > 1 VALUE WITH DESTRUCTURING OBJECT
// const {coffeeStock, isCoffeeMachineReady} = require('./statemodule');

// ES6 MODULE
// IMPORT 1 VALUE
// import coffeeStock from "./statemodule.js";
// IMPORT > 1 VALUE WITH DESTRUCTURING OBJECT
import { coffeeStock,isCoffeeMachineReady } from "./statemodule.js";

const makeCoffee = (origin, weight) => {
    if(coffeeStock[origin] >= weight){
        console.log(`kopi ${origin} berhasil dibuat`);
    } else {
        console.log(`Biji kopi ${origin} habis`);
    }
}
makeCoffee("halu",69);

console.log(isCoffeeMachineReady);
console.log(coffeeStock);