let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

//output 10

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

//output 15

let multiplyByFour = multiply.bind(this);

multiplyByFour(4, 5);

//using closures

let multiply1 = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyByTwo1 = multiply1(2);
multiplyByTwo1(5);

/**
 * 
 * The video explains two ways to achieve function currying in JavaScript - through the use of bind functions and through closures. Currying allows for creating multiple versions of a function by pre-setting some of its arguments.

[00:00](https://www.youtube.com/watch?v=vQcCNpuaJO8&t=0) This section introduces the concept of function currying in JavaScript using bind method.
- Function currying can be achieved in JavaScript using bind functions and closures.
- The bind method is used to create a copy of a function with preset arguments.
- The copied function can be invoked later with the remaining arguments.
- The bind method sets the preset arguments as the initial values of the copied function's parameters.
[02:04](https://www.youtube.com/watch?v=vQcCNpuaJO8&t=124) Function currying in JavaScript allows us to create copies of a function with predefined arguments.
- By passing an argument to the curried function, it behaves as if the argument was the first parameter.
- Currying can be done for any number of arguments.
- The bind method is used to create curried functions in JavaScript.
[04:08](https://www.youtube.com/watch?v=vQcCNpuaJO8&t=248) Currying in JavaScript allows us to create new functions with pre-set arguments using either method chaining or function closures.
- Method chaining involves creating new methods by pre-setting arguments inside the function.
- Function closures involve returning a new function that has access to pre-set arguments even after it's returned.
- Currying allows for more flexibility and reusability in code.
[06:12](https://www.youtube.com/watch?v=vQcCNpuaJO8&t=372) The video explains two ways to implement function currying in JavaScript: using the bind method and using closures.
- One way to implement currying is by using the bind method.
- Another way to implement currying is by using closures.
- The video demonstrates creating a multiply by 3 function using the closure concept.
- The video concludes by encouraging viewers to give feedback and suggesting future topics for the channel.
 */
