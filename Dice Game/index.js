var randomNum1=Math.floor(Math.random()*6)+1;
var randomImageSource="images/dice"+randomNum1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

let result1=0;
let result2=0;


var randomNum2=Math.floor(Math.random()*6)+1;
var randomImageSource2="images/dice"+randomNum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNum1>randomNum2){
    result1++;
    document.querySelector("h1").innerHTML="Player1 Wins!";
    document.querySelector("h3").innerHTML="Player1"+result1;
}
else if(randomNum2>randomNum1){
    result2++;
    document.querySelector("h1").innerHTML="Player2 Wins!";
    document.querySelector("h3").innerHTML="Player2"+result2;
}
else{
    document.querySelector("h1").innerHTML="It's Draw";}
