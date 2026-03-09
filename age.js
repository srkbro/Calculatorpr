let birthDate;
let timer;

function startAge(){

let dob=document.getElementById("date-input").value;

if(!dob){
alert("Please select birth date");
return;
}

birthDate=new Date(dob);

updateAge();

clearInterval(timer);
timer=setInterval(updateAge,1000);

}

function updateAge(){

let now=new Date();

let diff=now-birthDate;

let seconds=Math.floor(diff/1000);
let minutes=Math.floor(seconds/60);
let hours=Math.floor(minutes/60);
let days=Math.floor(hours/24);
let weeks=Math.floor(days/7);
let months=Math.floor(days/30.44);
let years=Math.floor(days/365.25);

document.getElementById("years").innerText=years;
document.getElementById("months").innerText=months;
document.getElementById("weeks").innerText=weeks;
document.getElementById("days").innerText=days;
document.getElementById("hours").innerText=hours;
document.getElementById("minutes").innerText=minutes;
document.getElementById("seconds").innerText=seconds;

nextBirthday();
funFacts(days);
planetAge(years);

}

function nextBirthday(){

let today=new Date();

let next=new Date(today.getFullYear(),birthDate.getMonth(),birthDate.getDate());

if(next<today){
next.setFullYear(today.getFullYear()+1);
}

let diff=next-today;

let days=Math.ceil(diff/(1000*60*60*24));

document.getElementById("nextBirthday").innerText=days+" Days";

}

function funFacts(days){

let sleepYears=(days/365)*8/24;

let heartbeats=days*24*60*70;

let blinks=days*24*60*20;

document.getElementById("sleepFact").innerText="You slept about "+sleepYears.toFixed(1)+" years";

document.getElementById("heartFact").innerText="Your heart beat about "+Math.floor(heartbeats).toLocaleString()+" times";

document.getElementById("blinkFact").innerText="You blinked about "+Math.floor(blinks).toLocaleString()+" times";

}

function planetAge(years){

document.getElementById("mercury").innerText="Mercury: "+(years/0.24).toFixed(1)+" years";
document.getElementById("venus").innerText="Venus: "+(years/0.62).toFixed(1)+" years";
document.getElementById("mars").innerText="Mars: "+(years/1.88).toFixed(1)+" years";
document.getElementById("jupiter").innerText="Jupiter: "+(years/11.86).toFixed(2)+" years";

}