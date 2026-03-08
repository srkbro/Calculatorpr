function calculateEMI(){

let loan=document.getElementById("loan").value;

let rate=document.getElementById("rate").value;

let months=document.getElementById("months").value;

if(!loan || !rate || !months){

alert("Please fill all fields");

return;

}

let monthlyRate=rate/100/12;

let emi=(loan*monthlyRate*Math.pow(1+monthlyRate,months))/(Math.pow(1+monthlyRate,months)-1);

emi=emi.toFixed(2);

document.getElementById("emiResult").innerText=emi;

}