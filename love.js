function calculateLove(){

let name1=document.getElementById("name1").value;

let name2=document.getElementById("name2").value;

if(!name1 || !name2){

alert("Please enter both names");

return;

}

let love=Math.floor(Math.random()*41)+60;

document.getElementById("loveResult").innerText=love+"%";

}