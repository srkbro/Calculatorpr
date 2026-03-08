function calculateAge(){

let dob=document.getElementById("date-input").value;

if(!dob){

alert("Please select date");

return;

}

let birth=new Date(dob);

let today=new Date();

let y=today.getFullYear()-birth.getFullYear();

let m=today.getMonth()-birth.getMonth();

let d=today.getDate()-birth.getDate();

if(d<0){

m--;

d+=30;

}

if(m<0){

y--;

m+=12;

}

document.getElementById("years").innerText=y;

document.getElementById("months").innerText=m;

document.getElementById("days").innerText=d;

}
