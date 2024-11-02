#  1. what will be logged to console
```
let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1;
    console.log(count); //1
  }
  console.log(count); //0
})();
```
# 2.write a function that would allow you to do this
```
var addSix = createbase(6);
addSix(10); // return 16
addSix(21); // return 27

//solution

function createbase(x) {
  return function (y) {
    console.log(x + y);
  };
}
```
# 3. Time Optimization
```
function find() {
  let a = [];
  for (let i = 0; i < 1e5; i++) {
    a[i] = i * i;
  }
  console.log(a[index]);
}

console.ltime("6");
find(6);
console.timeEnd("6");
console.time("12");
find(50);
console.timeEnd("12");

//solution

function find() {
  let a = [];
  for (let i = 0; i < 1e5; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("50");
closure(50);
console.timeEnd("50");
```
#  how would you create a closure function that would have access to the global scope?
```
function outer() {
  let count = 0;
  function inner() {
    count++;
  }
  return inner;
}

const closure1 = outer();

closure1();
closure1();
closure1();
```
# how would you use a closure to create a private counter?
```
function counter() {
  var _count = 0;

  function add(increment) {
    _count += increment;
  }

  function retrieve() {
    return "count = " + _count;
  }
  return {
    add,
    retrieve,
  };
}

const c = counter();
c.add(5);
c.add(10);
console.log(c.retrieve());
```
# Module pattern
```
var Module = (function () {
  function privateMethod() {
    console.log("private");
  }

  return {
    publicMethod: function () {
      console.log("public");
    },
  };
})();

Module.publicMethod();
Module.privateMethod();
```
 # make this run only once
 ```
let view;
function likeTheVideo() {
  view = "Roadside coder";
  console.log("subscribe to ", view);
}

likeTheVideo();
likeTheVideo();
likeTheVideo();
likeTheVideo();
likeTheVideo();

let view1;
function likeTheVideo() {
  let called = 0;
  return function () {
    if (called == 0) {
      view1 = "Roadside coder";
      console.log("subscribe to ", view1);
      called++;
    } else {
      console.log("Already subscribed");
    }
  };
}

likeTheVideo()();
likeTheVideo()();
likeTheVideo()();
likeTheVideo()();
likeTheVideo()();

function once(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

const hello = once((a, b) => console.log("hello", a, b));
hello(1, 2);
hello();
hello();
hello();
hello();
```
# implement caching/memoize function
```
const clumsysquare = (num1, num2) => {
  for (let i = 1; i <= 1e6; i++) {}
  return num1 * num2;
};

console.time("First call");
console.log(clumsysquare(9467, 7649));
console.timeEnd("First call");
console.time("Second call");
console.log(clumsysquare(9467, 7649));
console.timeEnd("Second call");

//solution

function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    if (!res[args]) {
      res[args] = fn.call(context || this, args);
    }
    return res[args];
  };
}
// res ;:{
// 5,6 :30}

const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 1e6; i++) {}
  return num1 * num2;
};

const memoizedClumsyProduct = myMemoize(clumsyProduct);
console.time("First call");
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd("First call");
console.time("Second call");
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd("Second call");
```
//difference between closure and scope
