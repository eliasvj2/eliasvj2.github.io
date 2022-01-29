// secret number
let secret_number = Math.trunc((Math.random()*100)+1);

//display secret number
console.log(secret_number);
//create previous score
let previousHighScore=0;
//Event listener for playing the game.
let element = document.getElementById('checkInput');
element.addEventListener('click', checkUserInput);

//add event listener to try again
let element_try_again = document.getElementById('tryAgain');
element_try_again.addEventListener('click', restoreGame);

//restore game function
function restoreGame(){
 
  secret_number = Math.trunc((Math.random()*100)+1);

   //display secret number
console.log(secret_number);
  document.getElementById("result").innerHTML= "<p id='result'  style='color: white'>Guess a number</p>";
document.getElementById('userInput').style.visibility = 'visible';
 document.getElementById('checkInput').style.visibility = 'visible';
  document.getElementById('tryAgain').style.visibility = 'hidden';
  document.getElementById("box-flex2").style.backgroundColor = "rgba(212, 153, 153, 0.8)";
  //make the array empty
  history =[];
  //display the history
document.getElementById('history').innerHTML = history;
//make the score empty
score =10;
// Display the score
document.getElementById("score").innerHTML= score;

 const nodeList = document.querySelectorAll(".win");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.visibility = 'hidden';
}
}
//Event listener for reloading the page
let element_reset = document.getElementById('reset');
element_reset.addEventListener('click', reload_page);

//function to reload page
function reload_page(){
 location.reload();
}

// make an array to hold all of the guesses to display in history.
let history = [];

//make a score variable to hold the value 10. Everytime the function is called subtract one from it.
let score = 10;

// Display the score
document.getElementById("score").innerHTML= score;

//highScore variable
let highScore = 0;

//Display the score
document.getElementById("highScore").innerHTML= highScore;

function checkUserInput(){
 
 //get the user input
 let user = document.getElementById("userInput").value;

 
 
//Check if the user input is a number
if(isNaN(user) || user == ""){
 document.getElementById('result').innerHTML = "Please enter a number.";
}else if(user >100 || user <1){
  document.getElementById('result').innerHTML = "Enter a number in the range of 1 to 100.";
}

else if(score == 1){
  document.getElementById("score").innerHTML= 0;
  document.getElementById('result').innerHTML = "<h2>Unfortunately You Lost the Game</h2> <br><p>Don't give up and Try again <br> My secret number was "+ secret_number+"</p>";
  document.getElementById('userInput').style.visibility = 'hidden';
  document.getElementById('highScore').innerHTML = highScore;
  document.getElementById('checkInput').style.visibility = 'hidden';
  document.getElementById('tryAgain').style.visibility = 'visible';
  document.getElementById("box-flex2").style.backgroundColor = "lightgreen";
  //display the history
document.getElementById('history').innerHTML = history;
}

else {
//make a for loop to check if the number is inside the array. If it is inside return false and get out of the function.
for(let i=0; i<history.length;i++){
  if(user == history[i]){
     document.getElementById('result').innerHTML = "Please enter another number";
     return false;
  }
}

 history.push(user);



document.getElementById("score").innerHTML= score;

//display the history
document.getElementById('history').innerHTML = history;
 
 
//Check if the number is too high or too small
if(user > secret_number && score >0){
 //decrement by 1
score--;
//display
document.getElementById('score').innerHTML = score;
 document.getElementById('result').innerHTML = "Your number is too high.";
 
} else if( user < secret_number && score >0){
   //decrement by 1
score --;
//display
document.getElementById('score').innerHTML = score;
document.getElementById('result').innerHTML = "Your number is too small.";
}
else if ( user == secret_number && score >0){
 document.getElementById('result').innerHTML = "<h2 class='win'>Congratulations</h2><p class='win'>Your guess was correct. "+secret_number+" is my secret number. </p><h2 class='win'>Your Score: "+ score+"</h2>";
 highScore = score;
  if(previousHighScore > highScore){
    highScore = previousHighScore;
  } else{
    previousHighScore = highScore
  }
 document.getElementById('highScore').innerHTML = highScore;

 document.getElementById('userInput').style.visibility = 'hidden';
 document.getElementById('checkInput').style.visibility = 'hidden';
  document.getElementById('tryAgain').style.visibility = 'visible';
  document.getElementById("box-flex2").style.backgroundColor = "lightgreen";

}

}}
