// Part A: The temperature converter

let celcius = 28;

let fahrenheit = 50;

function tempToFa (deg){
 return (deg *9/5)+32;
 
}
function tempToCel(deg){
 return (deg-32)*5/9;
}

let celToFa = tempToFa(celcius);

alert(celcius + ' C is '+ celToFa +" F.");
 
let faToCel = tempToCel(fahrenheit);
alert( fahrenheit + " F is "+ faToCel + " C.");

// Part B: BMI question
//BMI = [WEIGHT / (HEIGHT*HEIGHT)]*703
let johnBMI = [120/(85*85)]*703;
let lucasBMI = [150/(75*75)]*703;
if(lucasBMI >= johnBMI){
 console.log("lucas's BMI "+ lucasBMI + " is higher than john's BMI "+ johnBMI + ".");
}else if(johnBMI > lucasBMI){
  console.log("John's BMI "+ johnBMI + " is higher than lucas' BMI "+ lucasBMI + ".");
}
//Part C: prompt()

user = prompt("Enter a number: ");
if(user == ""){
  console.log("Please enter a number!");
} else if( user == 10){
  console.log("You win 10 points.");
}else if(user == 8 ){
  console.log("You win 8 points.");
}else{
  console.log("NOT MATCHED!!");
}

