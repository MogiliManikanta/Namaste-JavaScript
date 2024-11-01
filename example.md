**Async Await | Ep 01 Season 02 - Namaste JavaScript**

// always returns a promise

const p = new Promise((resolve, reject) => {
resolve("Hello JavaScript");
});
async function getData(params) {
// return "namaste";
return p;
}

const data = getData();
console.log(data);

data.then((res) => console.log(res));

/_ before async and await_/

- const p = new Promise((resolve, reject) => {
  resolve("Hello JavaScript");
  });
- function getData(params) {
  p.then((res)=>console.log(res));
  }

**using async and await**

const p = new Promise((resolve, reject) => {
resolve("Hello JavaScript");
});
**await only be useein async function**
async function getData() {
const val = await p;
console.log(val);
}
getData();

**Traditional way**
const p = new Promise((resolve, reject) => {
setTimeout(()=>{
resolve("Hello JavaScript");
},100000);
});

function getData(params) {
p.then((res)=>console.log(res));
console.log("javascript");
}
**output**
javascript
Hello Javascript
**using async and await**
const p = new Promise((resolve, reject) => {
setTimeout(()=>{
resolve("Hello JavaScript");
},100000);
});

async function getData() {
// js engine will m=not wait for promise to be resolved
const val = await p;
after resolving promise it will go to next line
console.log("Javascript");
console.log(val);
}
**output**
after 10 seconds output will print
Javascript
hello Javascript

**Example1**
const p1 = new Promise((resolve, reject) => {
setTimeout(()=>{
resolve("Hello JavaScript");
},100000);
});

const p2 = new Promise((resolve, reject) => {
setTimeout(()=>{
resolve("Hello JavaScript");
},200000);
});

async function getData() {
const val = await p;
console.log("Javascript");
console.log(val);

const val2 = await p2;
console.log("Javascript");
console.log(val);
}

**Fetch Data**
const API_URI = "https://invalidurl"
async funtion handlePromise(){
try{
const data = await fetch(API_URI);
const jsonValue = await data.json();
console.log(jsonValue);
}
catch(err){
console.log(err);
}}
handlePromise();
**Another Way**
const API_URI = "https://invalidurl"
async function handlePromise(){
const data = await fetch(API_URI);
const jsonValue = await data.json();
console.log(jsonValue);
}
handlePromise().catch(err=>console.log(err));

Those who are Seeking for Note of the videos here it is...
\*Basic HTML/CSS

#1 Basics of JavaScript

# Variables (how this variables work)

     - Var, Let Const

# Hoisting of variables

#2 Functions

- Arrow Functions
- Higher Order FUnctions

#3 Arrays and Objects

- Array Destructuring
- Object Destructuring
- rest operator
- spread operator

#4 Conditions in JavaScript

- if else
- ternary operators
- using && and ||
- Optional chaining

#5 Array Methods

- map(),
- filter()
- reduce()
- sort()

#6 Event Listeners

- onClick
- onBlur
- onChange
- onFocus
  setTimeout() & setInterval()
- EventBubling and EventCapturing method

#7 Asynchronous Events

- Callbacks
- Callback Hell
- Promises
- Promise APIS

#8 Async Await
#9 Try Catch

All the best for your JS Journey

**THIS KEYWORD**

# this in global space

console.log(this) => // global object => window object

# inside function

function x() { // in strict mode vlue undefined
console.log(this);// value depends on strict and non strict Modern
}
x(); // in non strict mode value is window

this inside non strict mode - (this substitution)

if the value of this keyword is undefined or null this keyword will be replaced with globalobject only in strict mode

this keyword value depends on how this is called (window)

x(); // undefined
window.x(); // window object

# this inside object method

const obj = {
a:10,
x:function () {
console.log(this);
}
}
obj.x();
inside object method this refers to the method

# call apply bind methods (sharing methods)

student.printfull.call(student2) // value of this = student2

# this inside arrow function

const obj = {
a:10,
x:()=>{
console.log(this);
}
}
obj.x();

// points to the global object enclosing with the lexical analysis

# this inside nested function

const obj2 = {
a:20,
x:function () {
const y = () =>{
console.log(this);
}
y();
}
}
obj2.x();

this points to the obj2 a:20,x :f

c=20
const obj2 = {
a:20,
x:function () {
b:20,
const y = () =>{
console.log(this);
console.log(c);
console.log(b);
}
y();
}
}
obj2.x();

let c = 20;
const obj2 = {
a: 20,
x: function () {
let b = 20; // Corrected to let for local scope
const y = () => {
console.log(this); // Refers to obj2 because x is a method of obj2
console.log(c); // Accesses c from the outer scope
console.log(b); // Accesses b from the outer function x()
}
y();
}
}
obj2.x();

//output
{ a: 20, x: [Function: x] }
20
20

# this inside the DOM Element ==> Reference to html element

<button onClick=()=>{
alert(this)
}>clickMe</button>

@venkat.sairam
9 months ago
🎯 Key Takeaways for quick navigation:

00:00 🔑 JavaScript's "this" keyword can be confusing for many and behaves differently in various scenarios.
00:55 🔑 The behavior of the "this" keyword depends on the context, such as whether it's in a function, global space, or an arrow function.
04:17 🔑 In the global space, the value of "this" is the global object, which can vary depending on the JavaScript runtime environment (e.g., window in browsers, Global in Node.js).
07:30 🔑 Inside a function, the value of "this" can be undefined in strict mode or the global object in non-strict mode.
10:06 🔑 JavaScript uses a mechanism called "this substitution," where "this" is replaced with the global object when it's undefined or null in non-strict mode.
16:11 🔑 Inside an object's method, "this" refers to the object itself where the method is called.
21:11 🔑 "call," "apply," and "bind" are important functions used to manipulate the value of "this" when calling methods and sharing them between objects.
26:23 🔑 It's essential to understand "call," "apply," and "bind" to effectively control the value of "this" in JavaScript methods.
27:30 🔑 In global space, the 'this' keyword refers to the global object (e.g., 'window' in the browser).
28:08 🔑 In strict mode, 'this' inside a function is undefined; in non-strict mode, it refers to the global object.
35:23 🔑 Understanding "this" substitution: When 'this' is undefined or null inside a function, it becomes the global object.
39:59 🔑 Inside an object's method, 'this' refers to the object itself.
44:12 🔑 The 'call' method can be used to invoke a function with a specific 'this' context.
46:01 🔑 Arrow functions do not have their own 'this' binding and take the value of the enclosing lexical context.
48:46 🔑 In the context of DOM elements, 'this' refers to the specific HTML element being interacted with.

Made with HARPA AI

I have watched the call, apply and bind methods video.
Here is my brief explaination-  
All these methods are used for method/function borrowing or sharing.

- call method is used to call the function with the given this value and arguments can be passed individually.
  printFullName.call(student, "Jammu", "J&K");
- apply method is similar to call, the only difference is that instead of passing the arguments indvidually we pass the arguments in a list/array.
  printFullName.apply(student, ["Jammu", "J&K"]);
- bind method is also used to override the this value but unlike call and apply it does not invoke the function instantly but returns a function with attached this and arguments which can be called later.
  const printStudent = printFullName.bind(student, "Udhampur", "J&K");
  printStudent();

1. "this" in global scope always points to the globalObject (globalObject depends on javascript runtime env)
2. "this" in a function depends on 2 things
   a. strict / non strict mode (in strict mode, "this" is undefined, in non strict mode, "this substitution" takes place and "this" points to globalObject)
   b. how the function is being invoked (if we invoke the function using the global object in strict mode, then "this" will point to that globalObject)
3. "this" in a method always points to the object that is used to invoke the method.
4. call, apply & bind are used to share a method with another object (hence the "this" keyword reference would also change accordingly)
5. "this" inside arrow function refers to the enclosing lexical context
6. "this" in DOM points to the HTML element itself on which it is being used
