// functions in javascript
//q1 : what is function declarations?

function add(a, b) {
  return a + b;
}

// q2 : what is function expressions?

let add2 = function (a, b) {
  return a + b;
};

// q3 : what is hoisting?

function add3(a, b) {
  return a + b;
}

//q4 : what is first class functions?
//q5 : what is IIFE?
(function (a, b) {
  return a + b;
})(1, 2);

(function (x) {
  return (function (y) {
    console.log(x); //1
  })(2);
})(1);

//q6 : what is closure?

function add4(a, b) {
  let sum = a + b;
  return function () {
    console.log(sum);
  };
}

add4(1, 2)();

// q7 : hoisting

funtionName();

function funtionName() {
  console.log("hello");
}

var x = 21;
var fun = function () {
  console.log(x); // output will be undefined
  var x = 20;
};
fun();

// params vs arguments
function square(num) {
  // params
  console.log(num * num);
}
square(5); //arguments

// spread vs rest operators

function multiply(...nums) {
  console.log(nums);
}
var arr = [5, 61, 4];
multiply(...arr);

// rest

function sum(...nums) {
  // rest operator we can also write(sum(nums[0],nums[1],nums[2]))
  console.log(nums);
}

var arr = [5, 61, 4];
sum(arr[0], arr[1], arr[2]);
sum(...arr); //spread operator


// output based question

const fn = (a,x,...numbers,y) => {
    console.log(x,y); // A rest parameter must be last in a parameter list
}

fn(1,2,3,4,5,6)

const fn1 = (a,x,y,...numbers)=>{
    console.log(x,y);
}

fn1(1,2,3,4,5,6)

// q12 : call back functions
//examples
/**
 * map,
 * filter,
 * reduce,  
 * eventListeners,
 * setTimeout,
 * setInterval
 * 
 */

// q12 : Arraow functions
 
const sum = (a, b) => a + b;

const multiply = (a, b) => a * b;

// q14 : Arrow functions vs regular functions

//1 . Syntax

function sum(num){
    return num*num;
}

const sum1 = (num) => {
    return num*num
}


//Implicit "return" keyword

const sum2 = (num) => num*num

// arguments

function fn(){
    console.log(arguments);
}


fn(1,2,3,4,5)

const fnarr = () => console.log(arguments) ;
fnarr(1,2,3,4,5) // output error in arrow functions arguments keyword not present


// this key word

let user ={
    username : "roadsidecoder",
    rc1 : ()=>{
        console.log("subscribe to " + this.username);
    },
    rc2(){
        console.log("subscribe to " + this.username);   
    }
}
user.rc1();
user.rc2();