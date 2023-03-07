// for selecting different controls 
// var search = document.querySelector(".searchBox");

var rmb = document.querySelector(".rmb")
var rateRmb = Number('2400');
var convert = document.querySelector(".convert"); 
// var fromCurrecy = document.querySelector(".from"); 
// var toCurrecy = document.querySelector(".to"); 
var ps = document.querySelector(".ps");

var finalValue = document.querySelector(".finalValue");
var itemValue = document.querySelector(".itemValue");
var shipValue = document.querySelector(".shippingValue")
var handlValue = document.querySelector(".handlingValue");
var rmbRateValue = document.querySelector(".rmbRateValue");

// var resultFrom; 
var packageSize;
var shippingValue;
var handlingValue;
var totalValue;

var validationItem = document.querySelector(".validationItem")

// Package Size Price
// S = 10
// M = 15
// L = 25

// Package Size Price - Taobao - WH CN
// 25%

// Handling Warehouse
// S = 5
// M = 10
// L = 15

rmbRateValue.innerHTML = rateRmb.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

// Input RMB
rmb.addEventListener('input', rmbValue); 
function rmbValue(x) { 
    rmbValue = Number(x.target.value);
} 

ps.addEventListener('change', (event) => { 

    packageSize = `${event.target.value}`; 

    if(packageSize=="S"){
        packageSizeVal = 10 + ((10 /100) * 25);
        handlingValue = 5;
    }else if(packageSize=="M"){
        packageSizeVal = 15 + ((15 / 100) * 25);
        handlingValue = 10;
    }else if(packageSize=="L"){
        packageSizeVal = 25 + ((25 / 100) * 25);
        handlingValue = 15;
    }else{
        packageSizeVal = 0
    };
}); 

// if(packageSize=="S"){
//     packageSizeVal = 10;
// }else if(packageSize=="M"){
//     packageSizeVal = 15;
// }else if(packageSize=="L"){
//     packageSizeVal = 25;
// }else{
//     packageSizeVal = 0
// };

// when user clicks, it calls function getresults  
convert.addEventListener("click", displayResults); 
// function getresults 
// function getResults() { 
//     if(!rmb&&packageSizeVal=='0'){
//         validationItem.style.display = "block"; 
//     }else{
//     then(displayResults);
//     }
// }
function displayResults() {
        // if(rmbValue === "" || shipValue === ""){
            // validationItem.style.display = "block";
        // }else{
            let rmbVal = Number(rmbValue);
            let shippingValue = Number(packageSizeVal);
            let totalValue = Number(+rmbVal + shippingValue + handlingValue);
            // let fromRate = currency.rates[resultFrom]; 
            // let toRate = currency.rates[resultTo]; 
            finalValue.innerHTML = (totalValue * rateRmb).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " IDR";
            itemValue.innerHTML = (rmbVal * rateRmb).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " IDR";
            shipValue.innerHTML = (shippingValue * rateRmb).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " IDR";
            handlValue.innerHTML = (handlingValue * rateRmb).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " IDR";
        // }
        
} 

function clearVal() { 
    window.location.reload(); 
    document.getElementsByClassName("finalValue").innerHTML = ""; 
};