const coffeeStock = {
    gayo: 1300,
    halu: 690,
    preanger: 420,
}

const isCoffeeMachineReady = true;

// COMMONJS MODULE

// WITHOUT OBJECT LITERAL (Can only export one value)
// module.exports = coffeeStock;

// WITH OBJECT LITERAL
// module.exports = {coffeeStock,isCoffeeMachineReady};
//console.log(module);


// ES6 MODULE

// IMPORT 1 VALUE
// export default coffeeStock;

// IMPORT > 1 VALUE
export {coffeeStock,isCoffeeMachineReady};

