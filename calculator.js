let int1;
let int2;
let operator;

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
          return a / b
}

//picks one of the functions above 
//console sytax example : operate(5,"+",5)
function operate(int1,operator,int2){
 let outcome;
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
 return outcome
}



