function pickName(){

let input=document.getElementById("names").value;

if(!input){

alert("Please enter some names");

return;

}

let names=input.split("\n").filter(name=>name.trim()!="");

let randomIndex=Math.floor(Math.random()*names.length);

let winner=names[randomIndex];

document.getElementById("winner").innerText=winner;

}