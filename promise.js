// PROMISE

const executorFunction = function(resolve,reject){
    const isCoffeeMakerReady = true;
    if(isCoffeeMakerReady){
        resolve("Kopi berhasil dibuat");
    }else{
        reject("Mesin kopi tidak bisa dipakai");
    }
}

const makeCoffee = function(){
    return new Promise(executorFunction);
}

const coffeePromise = makeCoffee();
console.log(coffeePromise);

const stock = {
    coffeeBean: 250,
    water: 100,
    // water: 1000,
}

const checkStock = function(){
    return new Promise(function(resolve,reject){
        if(stock.coffeeBean >= 16 && stock.water >=250){
            resolve("Stok kopi masih ada, kopi anda segera dibuatkan");
        }else{
            reject("Stok kopi tidak mencukupi, kopi anda gagal dibuat");
        }
    });
}
const handleSuccess = function(resolvedValue){
    console.log(resolvedValue);
}
const handleFailure = function(rejectedReason){
    console.log(rejectedReason);
}

// checkStock().then(handleSuccess,handleFailure);
checkStock().then(handleSuccess).catch(handleFailure); //WITH onRejected catch method

// CHAINING PROMISE

const state = {
    stock:{
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
}

function checkAvailability(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(!state.isCoffeeMachineBusy){
                resolve("mesin kopi bisa dipakai");
            }else{
                reject("mesin kopi tidak bisa dipakai");
            }
        },1000);
    });
}
function checkCoffeeStock(){
    return new Promise(function(resolve,reject){
        state.isCoffeeMachineBusy = true;
        setTimeout(function(){
            if(state.stock.coffeeBeans >= 13 && state.stock.water >= 150){
                resolve("Stok kopi cukup, lanjut proses pembuatan kopi");
            }else{
                reject("stok kopi tidak cukup. pembuatan kopi dibatalkan");
            }
        },2000);
    });
}
function brewCoffee(){
    console.log("Membuat kopi anda");
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Kopi anda sudah siap");
            state.isCoffeeMachineBusy = false;
        },2000);
    });
}
function boilWater(){
    return new Promise(function(resolve,reject){
        console.log("Memanaskan air");
        setTimeout(function(){
            resolve("air sudah siap");
        },2000);
    });
}
function grindBeans(){
    return new Promise(function(resolve,reject){
        console.log("menggiling BIJI");
        setTimeout(function(){
            resolve("BIJI sudah DIGILING");
        },1300);
    });
}

function makeEspresso(){
    checkAvailability()
    .then(function(value){
        console.log(value);
        return checkCoffeeStock();
    })
    .then(function(value){
        console.log(value);
        const preparePromise = [boilWater(),grindBeans()];
        return Promise.all(preparePromise);
    })
    .then(function(value){
        console.log(value);
        return brewCoffee();
    })
    .then(function(value){
        console.log(value);
    })
    .catch(function(rejectedReason){
        console.log(rejectedReason);
    });
}
makeEspresso();

// Async-Await
//

function getPizza(){
    return new Promise(function(resolve,reject){
        const tepung = 1000;
        setTimeout(function(){
            if(tepung >= 100){
                resolve("Pizza dibuat!");
            }else{
                reject("Tepung habis, Pizza tidak dibuat");
            }
        },8000);
    });
}

async function makePizza(){
    const Pizza = await getPizza();
    console.log(Pizza);
}
makePizza();

// Handle REJECT value with async-await try-catch
function getBakso(){
    return new Promise(function(resolve,reject){
        const tepung = 10;
        setTimeout(function(){
            if(tepung >= 100){
                resolve("Bakso dibuat!");
            }else{
                reject("Tepung habis, Bakso tidak dibuat");
            }
        },13000);
    });
}

async function makeBakso(){
    try{
        const Bakso = await getBakso();
        console.log(Bakso);
    }catch(rejectReason){
        console.log(rejectReason);
    }
}
makeBakso();

// chaining with async await
function delayDulu(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Barista on the way...");
            console.log("Barista on the way...");
        },19000);
    });
}

async function buatEspresso(){
    try{
        await delayDulu();
        await checkAvailability();
        await checkCoffeeStock();
        await Promise.all([boilWater(),grindBeans()]);
        const coffee = await brewCoffee();
        console.log(coffee);
    }catch(rejectReason){
        console.log(rejectReason);
    }
}
buatEspresso();