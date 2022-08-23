
const submit=()=>{
  var user_input=document.getElementById('input').value;
 
  var input_number=document.getElementById('number').value;

if(user_input==1){

if(input_number%2==0){

document.getElementById('res').innerHTML="input number is even number";

}else{

document.getElementById('res').innerHTML="input number is odd number";
  
}
} else if(user_input==2){

let square=Math.pow(input_number,2);
document.getElementById('res').innerHTML=`the square of  number is ${square}`;
} else if(user_input==3){


 let fact=1;
  for(let i=1;i<=input_number;i++){
 fact=fact*i;
document.getElementById('res').innerHTML= `the factorial of the number is ${fact}`;

}
} else if(user_input==4){

for(let i=1;i<=10;i++){
var table=input_number*i;


document.getElementById('res').innerHTML=`the table is${table}`;

}

}else {

document.getElementById('res').innerHTML="sorry...please enter valid input between 1 to 4";

}


}
