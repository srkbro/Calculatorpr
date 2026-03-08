function calculateBMI(){

let height=document.getElementById("height").value;

let weight=document.getElementById("weight").value;

if(!height || !weight){

alert("Please enter height and weight");

return;

}

let h=height/100;

let bmi=(weight/(h*h)).toFixed(2);

document.getElementById("bmiResult").innerText=bmi;

let status="";

if(bmi<18.5){

status="Underweight";

}else if(bmi<25){

status="Normal";

}else if(bmi<30){

status="Overweight";

}else{

status="Obese";

}

document.getElementById("bmiStatus").innerText=status;

}
