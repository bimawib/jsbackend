// CONCURRENCY

// setTimeout() Function
//

// console.log("selamat datang");
// setTimeout(function(){
//     console.log("Terima kasih sudah datang");
// },3000);
// console.log("ada yang bisa dibantu?");


// Callback Function
//

const orderCoffee = function(callback){
    let coffee = null;
    
    console.log("Sedang membuat kopi, silahkan tunggu");

    setTimeout(function(){
        coffee = "Kopi gayo wine V60 anda sudah jadi";
        callback(coffee);
    },3000);
    
    let progressBar = setInterval(function(){
        if(coffee == null){
            console.log("Progress : Kopi belum selesai");
        }else{
            clearInterval(progressBar);
        }
    },1000);
    // setInterval dijalankan terus menerus per-interval

    // disini parameter callback adalah FUNGSI yang dioper sebagai argument dari fungsi orderCoffee()
    // fungsi callback akan dieksekusi ketika proses async dari setTimeout sudah selesai berjalan
}

orderCoffee(function(coffee){
    console.log(coffee);
});

// Callback Funcction defined inside async
/*
const orderTea = function(){
    let tea = null;
    console.log("Teh sedang disiapkan");

    function callback(){
        console.log(tea);
    }
    setTimeout(function(){
        tea = "Teh sudah jadi!";
        callback();
    },2000);
}
orderTea();
*/
// bisa juga tidak dioper fungsi sebagai parameternya, namun fungsinya harus didefinisikan didalam fungsi async


