//Part A: Nets vs. Knicks
function calAveg(score1,score2,score3){
 let average = (score1+score2+score3)/3;
 return average;
}
function checkWinner(score1, score2,score3,score4,score5,score6){
 let draw = 0;
let knicks = [score1,score2,score3];
let nets = [score4,score5,score6];
// if all of the scores are equal then it is a draw.
for(let x = 0; x<=knicks.length-1;x++){
 if(knicks[x]===nets[x]){
  draw++;
 }
}
 if(draw === 3) { 
return "There is a draw.";}


let knicksAve = calAveg(score1, score2,score3);
let netsAve = calAveg(score4, score5,score6);


if(knicksAve> netsAve){
 return console.log("The knicks win the game.");
} else if(netsAve > knicksAve){
 return console.log("The nets win the game.");
} else {
 return console.log("They are equal.");
}
}
console.log(checkWinner(80,82,100,80,90,106));

//Part B: Tip calculator
function tipCal(){
 let bill = document.getElementById("inpt").value.trim();
 if(bill == " " || isNaN(bill)){
  document.getElementById("result").innerHTML = "Please enter a number."
  
 } else{
// if the bill value is between 30 and 100 The tip will be 15%. Otherwise the tip will be 20%.
let tip = 0;
bill >=30 && bill<= 100? tip = bill * .15: tip = bill*.20;;


let totalValue= Number(bill)+Number(tip);
document.getElementById("result").innerHTML = "The bill was " + bill + ", the tip was "+ tip+", and the total value " + totalValue;
 }
}

//Part C: Create two arrows functions to convert temperature
 const convertCelciusToFahrenheit = (temp) =>{ return [(temp*9/5)+32]; };
 const convertFahrenheitToCelcius = (temp) => {return [(temp-32)*5/9];}
function tempConverter(){
 let tempCelcius = document.getElementById("inpt2").value;
 
 if(tempCelcius == " " || isNaN(tempCelcius)){
   document.getElementById("result2").innerHTML = "Please enter a number.";
 }else{
 let fahrenheit = convertCelciusToFahrenheit(tempCelcius);
 document.getElementById("result2").innerHTML = tempCelcius + " C is " + fahrenheit + " F.";
 }

  }
  function tempConverterF(){
 let tempFahrenheit = document.getElementById("inpt3").value;
 
 if(tempFahrenheit == " " || isNaN(tempFahrenheit)){
   document.getElementById("result3").innerHTML = "Please enter a number.";
 }else{
 let fahrenheit = convertFahrenheitToCelcius(tempFahrenheit);
 document.getElementById("result3").innerHTML = tempFahrenheit + " F is " + fahrenheit + " C.";
 }
  }