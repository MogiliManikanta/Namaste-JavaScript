# Callback Hell | Ep 01 Season 02 - Namaste JavaScript
Two issues while using callbacks

**1 - Callback hell**
When a function is passed as an argument to another function, it becomes a callback function. This process continues and there are many callbacks inside another's Callback function.
This grows the code horizontally instead of vertically. That mechanism is known as callback hell.

**2 - Inversion of control**
The callback function is passed to another callback, this way we lose the control of our code. We don't know what is happening behind the scene and the program becomes very difficult to maintain.
That process is called inversion of control.

JavaScript is synchronous single threaded language, just do one thing at a time.
The callback function do the asynchronous code in js.

1. Callback hell - Callback passed into another function as an argument and another function passed into the callback function as nested callback. So code go horizontally inside vertically. So the callback code as unmaintainable ans unreadable. It's also known as pyramid doom

2. Inversion of control - The callback function is passing to another function as an argument. So our callback function blindly trust the other function. Whether this will execute or not.

**Promises**

1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
2. Inversion of control is overcome by using promise.
   2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
   2.2) A promise has 3 states: pending | fulfilled | rejected.
   2.3) As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
   2.4) A promise resolves only once and it is immutable.
   2.5) Using .then() we can control when we call the cb(callback) function.

3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()

Before promise we used to depend on callback functions which have two disadvantages
1.) Callback Hell (Pyramid of doom)
2.) Inversion of control

1. Inversion of control is overcome by using promise
   promise is object represent the eventual completion of asynchonous operation
   a)A promise has 3 states: pending | fulfilled | rejected.
   b) As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
   c) A promise resolves only once and it is immutable in nature.
   d) Using .then() we can attached the cb(callback) function.
2. - To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'

- A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()

1. What are Promises?
   Promises are objects which are used to perform asynchronous operations. They are just like placeholders to store a future value that will be returned after some time. They contain two properties: PromiseState and PromiseResult.

2. Importance of Promises:
   a) Promises can help us to write trust worthy code.
   b) Promises are used to solve the problems of callbacks like inversion of control and callback hell.
   c) They give us the result prompt in three states: 1) Pending 2) Fulfilled 3) Rejected
   d) We can attach function to promise object and retrieve its value unlike callbacks no need to pass the function.
   e) Nesting can be done in Promises and with the help of that we can return the values in each individual chain.
```
createOrder(cart)
.then(() => placeOrder(cart))
.then(() => shipOrder(cart))
.then(() => deliverOrder(cart))
.then(() => returnOrder(cart))
```
**Creating a Promise, Chaining & Error Handling**
```
const cart =["shoes","pants","kurta"];

const promise = createOrder(cart);

promise.then(function (){
proceedToPayment(orderId);
})
.catch(function(err){
console.log(err.message);
})

function createOrder(cart){

const pr = new Promise(function(resolve,reject){
if(!validateCart(cart)){
const err = new Error("Cart is empty");
reject(err);
}

      const orderId = "123456";
      if(orderId){
         resolve(orderId);//
         setTimeout(function(){
            resolve(orderId);
         })
      }

});

return pr;
}
function validateCart(cart){
return true;
}
```
1. Promise can be created using a new Promise() constructor function.
2. This constructor function takes a callback function as argument.
3. The callback function has 2 arguments named 'resolve' and 'reject'. Resolve and reject are the keywords provided by JS.
4. We can only resolve or reject a promise. Nothing else can be done.
5. An error can also be created using new Error('error message').
6. There is also .catch() which is used to attach a failure callback function that handles any error that pops up during the execution of promise chain.
7. .catch only handles error of .then() that are present above it. If there is any .then() below it, catch will not handle any error for that, also that ,then will get executed no matter what.
8. It can be useful in a way if we want to catch error for a particular portion of a chain.
9. We can have multiple catch based on requirement and then a general catch at the end.
10. Always remember to return a value in the promise chain for the next .then to use .
11. If it returns a value => It will be used as an argument in next function. If it is a promise then the next .then in the promise chain is attached to the promise returned by the current callback function.

Homework:
```
const cart = ['shoes', 'pants', 'kurta'];

createOrder(cart)
.then(function(orderId) {
console.log(orderId);
return orderId;
})
.then(function(orderID) {
return proceedToPayment(orderID)
})
.then(function({ message, amt }) {
console.log(message, 'of amount:', amt);
return showOrderSummary(message, amt);
})
.then(function({ message, amt }) {
console.log('Your wallet has beed debited by:', amt);
})
.catch(function(err) {
console.log(err.message);
})
.then(function() {
console.log('No matter what happens, I will get executed');
});

function createOrder(cart) {
const pr = new Promise(function(resolve, reject) {
// create order
// Validate Cart
// orderId
if (!validateCart(cart)) {
const err = new Error('Cart is not valid!');
reject(err);
}
// logic for createOrder
const orderId = '12345';
if (orderId) {
setTimeout(function() {
resolve(orderId);
}, 5000)
}
});

return pr;
}

function proceedToPayment(orderID) {
// Logic for handling payment.
// This function returns a promise
return new Promise(function(resolve, reject) {
// logic
resolve({ message: `Payment Successful for order id: ${orderID}`, amt: 2500 });
})
}

function showOrderSummary(paymentInfo, amt) {
return new Promise(function(resolve, reject) {
// console.log(amt);
if (amt >= 2000) {
resolve({ message: 'You have ordered items that cost ${amt} RS', amt });
} else {
reject(new Error('Please buy more for discount'));
}
})
}

function validateCart(cart) {
// code to validate cart.
return true;
// return false;
}

**Promise APIs + Interview Questions 🔥 | S.02 Ep.05 - Namaste JavaScript | all, allSettled, race, any**

const p1 = new Promise((resolve, reject) => {
setTimeout(() => {
resolve(1);
}, 1000);
});

const p2 = new Promise((resolve, reject) => {
setTimeout(() => {
resolve(2);
}, 2000);
});

const p3 = new Promise((resolve, reject) => {
setTimeout(() => {
resolve(3);
}, 3000);
});
Promise.all([p1,p2,p3])
.then((res)=>{
console.log(res);
})
.catch((err)=>{
console.log(err);
})
```
