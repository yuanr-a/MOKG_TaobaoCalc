const rmb = document.querySelector(".rmb");
const rateRmb = Number('2400');
let convert = document.querySelector(".convert"); 
let ps = document.querySelector(".ps");

const finalValue = document.querySelector(".finalValue");
const itemValue = document.querySelector(".itemValue");
const shipValue = document.querySelector(".shippingValue")
const handlValue = document.querySelector(".handlingValue");
const rmbRateValue = document.querySelector(".rmbRateValue");

// var resultFrom; 
let packageSize;
let shippingValue;
let handlingValue;
let totalValue;

// var validationItem = document.querySelector(".validationItem")

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

rmbRateValue.textContent = Number(rateRmb).toLocaleString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

// Input RMB
rmb.addEventListener('input', rmbValue); 
function rmbValue(x) { 
		rmbValue = Number(x.target.value);
};

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
				finalValue.textContent = "Invalid Package Size";
		};
}); 


// when user clicks, it calls function getresults  
convert.addEventListener("click", displayResults); 

function displayResults() {
	const rmbVal = Number(rmbValue);
	const shippingValue = Number(packageSizeVal);
	const totalValue = Number(rmbVal + shippingValue + handlingValue);
	// console.log(totalValue);
	finalValue.textContent = Number(totalValue * rateRmb).toLocaleString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " IDR";
	// itemValue.innerHTML = (rmbVal * rateRmb).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " IDR";
	shipValue.textContent = Number(shippingValue * rateRmb).toLocaleString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " IDR";
	handlValue.textContent = Number(handlingValue * rateRmb).toLocaleString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " IDR";
				
} 

function clearVal() { 
		window.location.reload(); 
		document.getElementsByClassName("finalValue").innerHTML = ""; 
};