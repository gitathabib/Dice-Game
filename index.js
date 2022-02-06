// Image List
var randImages = ["images/dice1.png","images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

//Random score varrialbe
var leftScore = randomNmberGenerator(6);
var rightScore = randomNmberGenerator(6);

//Random left image selecation
document.querySelector("div .img1").setAttribute("src",randImages[leftScore]);

//Random right image selecation
document.querySelector("div .img2").setAttribute("src",randImages[rightScore]);

//Calling winner
    winnerSelection(leftScore,rightScore);




    

/* Function Random Number Generator*/
function randomNmberGenerator (bound){
    var randomNumber = Math.floor(Math.random()*bound)+1;

    return randomNumber;
}

function winnerSelection(lS,Rs){

    if(lS===Rs){
       document.querySelector("h1").innerHTML = "Draw!";
    }else if(lS>Rs){
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    } else{
        document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
    }
}