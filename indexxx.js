//switch 
let day=3
switch(day){
    case 1:
       console.log("monday")
       break;
    case 2:
       console.log("tuesday");
       break;
    case 3:
       console.log("wednesday");
       break;
    default:
        console.log("invalid day")
        break;
}
//smple calculator
let operator="+";
let a=10;
let b=8;
switch (operator){
    case "+":
       console.log(a+b);
       break;
    case "-":
       console.log(a-b);
        break;
    default:
        console.log("unknown answer");
}

//stirng slicing
let fullname="haiqa naveed";
let firstname=fullname.slice(0,5);
console.log(5=="5");//true
console.log(5==="5");//false

//string method
let name="haiqa";
console.log(name.toUpperCase());


let sentence="javascript is okay";
console.log(sentence.includes("okay"));//true

//print 1 to 5
for(let i = 1;i<=5;i++){
   console.log(i);
}

//print even number 1 to 10
for(let i = 1;i<=10;i++){
   if(i% 2==0){
   console.log(i);
   }
}
//sum
let sum=0;
for(let i = 1;i<=10;i++){
   sum+=i;
}
console.log("sum:", sum);

//function
function greet() {
   console.log("Hello, Welcome!");
}

//greeting user
function greetuser(name) {
   console.log("Hello " + name);
}
greetuser("Haiqa")

//add two number
function add(a,b) {
   console.log(a+b);
}
add(6,7);
add(34,33)

//sum using function
function calculateSum(limit) {
   let sum=0;
   for(let i=1; i<=limit;i++){
      sum+= i;
   }
   return sum;
}
   console.log(calculateSum(10));
