const rmb = document.querySelector(".rmb");
const rateRmb = Number('2400');
var convert = document.querySelector(".convert"); 
var ps = document.querySelector(".ps");

const finalValue = document.querySelector(".finalValue");
const itemValue = document.querySelector(".itemValue");
const shipValue = document.querySelector(".shippingValue")
const handlValue = document.querySelector(".handlingValue");
const rmbRateValue = document.querySelector(".rmbRateValue");

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

rmbRateValue.innerHTML = Number(rateRmb).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

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


// when user clicks, it calls function getresults  
convert.addEventListener("click", displayResults); 

function displayResults() {
	const rmbVal = Number(rmbValue);
	const shippingValue = Number(packageSizeVal);
	const totalValue = Number(+rmbVal + shippingValue + handlingValue);
	finalValue.innerHTML = Number(totalValue * rateRmb).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " IDR";
	// itemValue.innerHTML = (rmbVal * rateRmb).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " IDR";
	shipValue.innerHTML = Number(shippingValue * rateRmb).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " IDR";
	handlValue.innerHTML = Number(handlingValue * rateRmb).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " IDR";
				
} 

function clearVal() { 
		window.location.reload(); 
		document.getElementsByClassName("finalValue").innerHTML = ""; 
};