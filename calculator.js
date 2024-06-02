const numbtns = document.querySelectorAll(".numbers");
const screen = document.querySelector(".result");
const delbtn = document.querySelector(".del");
const opbtns = document.querySelectorAll(".operator");
const eqalbtn = document.querySelector(".eqalbtn");
let ScreenValue = "";
let int1;
let int2;
let operator;
let currentOP;
let outcome;

//adds 2 numbers 
function add(a,b){
          return a + b
}

//subtracts 2 numbers 
function sub(a,b){
          return a - b
}

//multiplys 2 numbers 
function mult(a,b){
          return a * b
}

//divides 2 numbers 
function divide(a,b){
          if(b === 0){
                    return "nope"
          }
          else {
                    return a/b
          }
}

//picks one of the functions above 
//console sytax example : operate(5,"+",5)
function operate(int1,operator,int2){
 if(operator === "+"){
           outcome = add(int1,int2)
 }
 else if(operator === "-"){
          outcome = sub(int1,int2)
 }
 else if(operator === "*"){
          outcome =mult(int1,int2)
 }
 else if(operator === "/"){
          outcome = divide(int1,int2)
 }
}

//populates the screen whenever a number button is pressed 
numbtns.forEach((numbtn) => {
 numbtn.addEventListener("click",() =>{
   let currentVal = ScreenValue;
   ScreenValue = currentVal + numbtn.id;
   screen.textContent = ScreenValue;
 })
});

//refreshes the screen COMPLETLY (screen value gets deletet too)
 function refresh_screen(){
  ScreenValue = "";
  screen.textContent = "";
 }
 delbtn.addEventListener("click",refresh_screen);

opbtns.forEach((opbtn)=> {
 opbtn.addEventListener("click",()=>{
   ScreenValue = ScreenValue + opbtn.id;
   currentOP = opbtn.id;
   let arr1 = ScreenValue.split(currentOP);
   if(arr1.length > 2){
          screen.textContent = ""
          ScreenValue = "";
   }
   else{
   screen.textContent = ScreenValue;
   }
 });
});

//converts the string in to three values and passes them into the operate function and displays the outcome 
function Eqalbutton(){
let arr = ScreenValue.split(currentOP);
int1 = Number(arr[0]);
int2 = Number(arr[1]);
operator = currentOP;
operate(int1,operator,int2);
screen.textContent = outcome;
ScreenValue = "";
};


eqalbtn.addEventListener("click",Eqalbutton);
