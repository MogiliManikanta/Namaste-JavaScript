# Understanding How JavaScript Works

JavaScript operates in an "execution context," which is the environment where the code is executed. The execution context has two main components:

### 1. Memory Component (Variable Environment)
This is where all variables and functions are stored as key-value pairs.

For example:
```javascript
{
  key: value,
  n: 2
}
```

### 2. Code Component (Thread of Execution)
This is where the code is executed, line by line, allowing JavaScript to process one command at a time.

**Note:** JavaScript is a synchronous, single-threaded language.

- **Single-threaded** means JavaScript can execute only one command at a time.
- **Synchronous** means that JavaScript executes code one line at a time in a specific order.

## Call Stack in JavaScript

The call stack is a data structure that keeps track of the functions being executed. Here’s a basic example of how it works:

```javascript
function first() {
  console.log("First");
}

function second() {
  console.log("Second");
  first();
}

function third() {
  console.log("Third");
  second();
}

third();
```

When `third()` is called, it gets pushed onto the stack. Within `third()`, `second()` is called and added to the stack, followed by `first()`. Each function runs in a Last In, First Out (LIFO) order, where the last function called is the first to finish and be removed from the `stack`.;



### How JavaScript Code is executed?

1. Whenever any JavaScript code is executed an execution context is created and it is the Global Execution Context.
2. An Execution Context is basically a box which has two components called Memory Component(Variable Environment) and Code Component(Thread Of Execution).
3. The Execution context is created in two phases
   a. Memory Creation Phase : In this Phase, Memory is allocated to all the variables and functions which are present in the global scope. Special keyword     
      Undefined in case of variables and literally the whole function in case of functions.
   b. Code Execution Phase : In this Phase, code is executed line by line.

4. Whenever there is a function invocation an all new execution context is created and same process is followed again.
5. If there is any function parameter then it is also allocated memory while creating the execution context of the function.
6. Whenever return keyword is encountered , it means the task of function is over and it returns back the control of the program back to the place where it was invoked. and with this this execution context is deleted from stack.

7. Call Stack is basically a stack which maintains the order of execution of execution context. Whenever a code is executed the Global Execution Context is pushed into the stack first and later on as per the function invocation the execution context is pushed into the stack. When the function code is done executing the execution context is popped out and last the Global Execution Context s also deleted.

**Hoisting in JavaScript 🔥(variables & functions) | Namaste JavaScript Ep. 3**

1. In JS, before the code is executed, the variables get initialized to undefined.
2. Arrow functions enact as variables and get "undefined" during the memory creation phase while functions actually get run.
3. Hoisting: Mechanism in JS where the variable declarations are moved to the top of the scope before execution. Therefore it is possible to call a function before initializing it.
4. Whenever a JS program is run, a global execution block is created, which comprises of 2: Memory creation and Code execution.
5. Variable declarations are scanned and are made undefined
6. Function declarations are scanned and are made available
   For arrow functions, we are storing function inside a variable, and when memory is allocated to variables it store undefined, so when we try to invoke the variable as a function, js finds undefined instead of a function, so it shows error that getName() is not a function as that is actually a normal variable that you're are trying to access as a function............

**How functions work in JS ❤️ & Variable Environment**

1. We learnt how functions work in JS.
2. At first a global execution context is created, which consists of Memory and code and has 2 phases: Memory allocation phase and code execution phase.
3. In the first phase, the variables are assigned "undefined" while functions have their own code.
4. Whenever there is a function declaration in the code, a separate local execution context gets created having its own phases and is pushed into the call stack.
5. Once the function ends, the EC is removed from the call stack.
6. When the program ends, even the global EC is pulled out of the call stack.

### SHORTEST JS Program 🔥window & this keyword

• window object is created by the JS engines of the respective browsers when global execution context is created.

•whenever an execution context is created a `"this"` variable is also created. • at the global level `"this"` points to the global object( window object in case of browsers).

 • anything that is not inside a function is the "global space". 
 
 • whenever we create any variables or functions in the "global space", they get attached to the global object( window object in case of browsers).so to access the variables/function defined in the global space , we can use any of the below: 
 
 ```console.log(window.a); console.log(a); console.log(this.a)``` 

 at the global space level, where this points to the window object 1. Shortest Program in JS: Empty file. Still, browsers make global EC and global space along with Window object. 
 
 2. Global Space: Anything that is not in a function, is in the global space. 
 
 3. Variables present in a global space can be accessed by a "window" object. (like window.a) 
 
 4. ```In global space, (this === window) object. and if you defined a variable (eg. a=10) : this.a===10; global.a===10;```

**undefined vs not defined in JS**

# 1. Undefined is like a placeholder till a variable is not assigned a value. 2. undefined !== not defined 3. JS- weakly typed language since it doesn't depend on data type declarations.

1.Undefined is a Special Placeholder which is used to reserve memory for the variables in the memory creation phase. Even before a single line of code is executed JS engine assigns undefined to the variables.

2.Not Defined means if we try to console or access any variable which is not declared in the code then we get Not Defined error.

3. JS is a loosely typed language or weakly typed language means it does not attaches its variables to specific data types like in C++ and java.

4.Remember undefined !== not defined.

1. Undefined is an Special Keyword and Placeholder Which is kept inside the Variable until some Values are not defined to it. It will stay inside the variables if no value is not Assigned.
2. undefined!=not defined, Because undefined means variable is declared but no value is Assigned and not defined means Variable is not even declared.
3. JS is an Loosely Typed Language or Weakly Typed Language, You can Use same variable to store String, Integer, Boolean type Values in same.
   Example:
   var a;
   console.log(a);
   a=10;
   console.log(a);
   a="hello JS";
   console.log(a);


# Scope Chain, 🔥 Scope & Lexical Environment in JavaScript

### Scope of a Variable
The scope of a variable in JavaScript is directly dependent on its **lexical environment**.

### Lexical Environment
- Whenever an execution context is created, a **lexical environment** is also created.
- A lexical environment consists of:
  - The local memory.
  - A reference to the lexical environment of its parent.
- **Lexical** means in hierarchy or sequence. The child or local function can access all variables and functions defined in its parent’s lexical environment.

### Scope Chain
The **Scope Chain** is the mechanism by which JavaScript searches for a variable in its lexical environment and, if not found, continues to search through the lexical environments of its parents until it finds the variable or reaches the global scope.

1. The JavaScript engine first looks for a variable in the function’s local memory.
2. If the variable is not found, it searches in the parent’s lexical environment.
3. The process continues through subsequent lexical environments until the variable is found or until the chain reaches **NULL** (the global execution context holds a reference to null).
4. If the variable is not found anywhere in the scope chain, a "variable is not defined" error is thrown in the browser's console.

### Lexical Environment Structure
Each lexical environment is defined as:
- **Lexical Environment = Execution Context's Local Memory + Reference to the Parent's Lexical Environment**

### Example of Lexical Environment and Scope
- The **lexical environment of a function's parent** refers to the scope where a function is physically defined.
- For example, if function `x()` is defined in the **Global Execution Context (GEC)**, its execution context will hold a reference to the GEC's lexical environment when invoked.

### Execution Context and Scope Chain
- When a new **Execution Context** is pushed onto the Call Stack, it includes a reference to its parent’s lexical environment.
- The **Global Execution Context (GEC)** holds a reference to `null`.

The **Scope Chain** mechanism ensures that the JavaScript engine can access variables and functions up through the chain of lexical environments, adhering to a structured and sequential search hierarchy.
`;

# let & const in JavaScript 🔥 Temporal Dead Zone

### Key Concepts of `let` and `const`:
- `let` and `const` are **hoisted**, but they cannot be accessed before initialization, resulting in the **Temporal Dead Zone (TDZ)**.
- JavaScript uses a different memory space than the **Global Execution Context (GEC)** to store variables declared with `let` and `const`, which causes the TDZ.
- Levels of strictness: `var` < `let` < `const`.

### Characteristics:
- **var**: 
  - No Temporal Dead Zone.
  - Can be redeclared and re-initialized.
  - Stored in the **Global Execution Context** (GES).
- **let**:
  - Uses TDZ.
  - Cannot be redeclared but can be re-initialized.
  - Stored in a separate memory.
- **const**:
  - Uses TDZ.
  - Cannot be redeclared or re-initialized.
  - Stored in a separate memory.

### Temporal Dead Zone (TDZ)
- TDZ exists for variables declared with `let` and `const` until they are assigned a value.
- Variables declared with `let` or `const` do not become properties of the global `window` object, so accessing them as `window.variable` or `this.variable` will not work.
- The TDZ prevents accessing `let` or `const` variables before their declaration, resulting in a ReferenceError.

### Error Types in JavaScript
1. **SyntaxError**: Occurs when JavaScript syntax is violated (similar to compile-time errors).
2. **ReferenceError**: Happens when attempting to access a variable that has no memory allocation (like accessing a variable in TDZ).
3. **TypeError**: Raised when trying to reinitialize a `const` variable or performing an operation on a type that is not allowed.

### Best Practices:
- Always use `const` whenever possible, followed by `let`. Avoid using `var` unless absolutely necessary.
- Declaring variables at the top of their scope helps shrink the Temporal Dead Zone to zero.
- **`const`** requires declaration and initialization to occur on the same line.

---

Using `const` and `let` effectively helps prevent runtime errors and maintains clean code structure by reducing reliance on the global execution context and minimizing unintentional variable mutations.
`;

# Block Scope & Shadowing in JavaScript 🔥

### What is a Block in JavaScript?
A **block** in JavaScript is a group of statements enclosed in curly brackets `{ }`, allowing multiple statements to be executed as one.

### Why Use Blocks?
JavaScript sometimes expects a single statement to execute. Blocks allow us to group multiple statements together, letting them run in cases where only a single statement is expected (e.g., in `if`, `else`, loops, and functions).

### Scope and Block Scope
- **Scope**: The area where a variable or function is accessible.
- **Block Scope**: Variables declared within a block (using `let` or `const`) are confined to that block and follow the **lexical scope chain** when accessed.
- Variables declared with `let` and `const` are **block-scoped**, while `var` variables are **global-scoped** or **function-scoped**.

### Hoisting with let, const, and var
- **let & const**: Hoisted within their block scope but are inaccessible before initialization due to the **Temporal Dead Zone (TDZ)**.
- **var**: Hoisted globally or to the nearest function scope, so it can be accessed outside the block where it’s defined.

### Shadowing
**Variable Shadowing** occurs when a variable in an inner scope has the same name as a variable in an outer scope, effectively hiding the outer variable within that inner scope.

**Example 1: Shadowing with `let` and `const`**
```javascript
let x = 10; // Outer scope
function example() {
    let x = 20; // Shadows outer x
    console.log(x); // Prints 20
}
example();
console.log(x); // Prints 10
```

### Illegal Shadowing
Shadowing a `let` or `const` variable with `var` is considered **illegal shadowing** because `var` is global or function-scoped, while `let` and `const` are block-scoped. Attempting to redeclare a `let` variable with `var` causes a syntax error.

**Example of Illegal Shadowing**
```javascript
let a = 200;
{
    var a = 20; // SyntaxError: Identifier 'a' has already been declared
}
```

### Example 2: Overwriting with `var`
Variables declared with `var` inside a block can override outer variables of the same name due to lack of block scope.

```javascript
var a = 199;
{
    var a = 10; // Overrides outer 'a'
}
console.log(a); // Prints 10
```

### Key Points:
- **Block (Compound Statement)**: Groups multiple statements together.
- **Global Environment**: `var` variables reside here, allowing access outside blocks.
- **Block Environment**: `let` and `const` reside here, providing block-level scope.
- Use `let` and `const` inside blocks to avoid conflicts and ensure block-specific variables.
- Variable shadowing helps manage variables at different scope levels but requires careful usage to avoid illegal shadowing.

---

JavaScript block scope, shadowing, and lexical environments ensure code behaves predictably in nested contexts. Using `let` and `const` helps prevent accidental variable access and keeps code cleaner.

# Closures in JS 🔥

**Closure :**
 - Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure and that's where it becomes interesting 
 ```javascript
 function a() {
    function b() { 
        let x = 3; 
    } 
    function c() { 
        let y = 4; 
    } 
    function d() { 
        console.log(x, y); // This will throw a ReferenceError
    } 
}

```
- now how to change this code to access the x and y variables inside d(), I simply told change let to var, but the suggested answer was we can write like below

 - In this code, trying to access x and y inside function d() will result in an error because d() does not have access to the variables defined in b() and c().

 - To allow d() to access x and y, you can restructure the functions as follows:
``` javascript
function a() {
    function b() { 
        let x = 3; 
        return x; // Returning x
    } 
    function c() { 
        let y = 4; 
        return y; // Returning y
    } 
    function d() { 
        console.log(b(), c()); // Now it can access x and y
    } 
}
```
**Key Points :** 
-  Function bundled with lexical scope is called closure.
- Even if we return the function, it still remembers its original lexical environment and local storage so it can access values.
- If we write return function x(){.....} --- this automatically returns the value.
- The function that is returned is reference so any change in value of that variable inside function will be reflected as such.

**Uses of Closures :**
- 1.Module Design pattern 
- 2.Currying 
- 3.Functions like once 
- 4.memoize 
- 5.maintaing state in async world 
- 6.setTimeouts 
- 7.Iterators 
- 8.and many more

# SetTimeout + Closures Interview Questions 🔥

## Question 1: Understanding `setTimeout` with `var`

### Code Snippet:
```javascript
function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste JavaScript");
}
x();
Namaste JavaScript
6
6
6
6
6
```
**Explanation:**
In this code, the for loop completes before any of the setTimeout callbacks execute. Since var is function-scoped, the value of i is 6 when the callbacks are executed, leading to the output of 6 five times.

## Question 2: Understanding setTimeout with let
```javascript
function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste JavaScript");
}
x();

Namaste JavaScript
1
2
3
4
5
```
Here, let creates a new block scope for each iteration of the loop. As a result, each setTimeout callback retains the correct value of i for that particular iteration.

## Question 3: Using a Closure to Capture i
``` 
function x() {
    for (var i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(function() {
                console.log(x);
            }, x * 1000);
        }
        close(i);
    }
    console.log("Namaste JavaScript");
}
x();
Namaste JavaScript
1
2
3
4
5
```

 ## Quiz: Understanding Closures and References
**Statement:**
`Closures keep reference, not the actual value.` **(Repeat it 10 times)**
```
for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
        i = i + 1;
    }, i * 1000);
}
console.log("outside: ", i);
if (i < 10) i = 10;

outside:  6
10
11
12
13
14
```
The for loop executes completely before any setTimeout function runs. By the time the callbacks execute, i is 6. The value of i is incremented in each callback due to the closure keeping a reference to i.

## Question 4: Nested Functions and Closures
```
function outest() {
    var c = 20;
    function outer(b) {
        function inner() {
            console.log(a, b, c);
        }
        let a = 10;
        return inner;
    }
    return outer;
}

var close = outest()("hello world");
close();
10 hello world 20
```
**Explanation:**
- The variable a is defined inside the outer function's scope and is accessible in the inner function.
- b is passed as an argument to outer, and c is defined in the scope of outest.
Thus, the output correctly logs the values of a, b, and c.

## Examples of Data Encapsulation

### Example 1: Basic Counter with Closure

```javascript
function counter() {
  var count = 0;
  function incrementFunction() {
    count++;
    console.log(count);
  }
  return incrementFunction;
}

var counter1 = counter();
counter1(); // Output: 1
counter1(); // Output: 2

var counter2 = counter();
counter2(); // Output: 1
```

### Explanation

In this example:
- The variable `count` is enclosed within the `counter` function and can't be accessed directly from outside.
- Each call to `counter` creates a new instance of `count`, preserving its own state across multiple calls.

### Example 2: Using Function Constructor for Counter

```javascript
function Counter() {
  var count = 0;
  
  this.incrementFunction = function() {
    count++;
    console.log(count);
  };
  
  this.decrementFunction = function() {
    count--;
    console.log(count);
  };
}

var counter1 = new Counter();
counter1.incrementFunction(); // Output: 1
counter1.incrementFunction(); // Output: 2
counter1.decrementFunction(); // Output: 1
```

### Explanation

Here:
- The `Counter` constructor function creates private variables by defining `count` inside its scope.
- Both `incrementFunction` and `decrementFunction` have access to `count` but encapsulate it, so it’s hidden from outside access.

## Key Concepts in JavaScript Closures and Data Encapsulation

1. **Closures for Data Hiding**: A closure allows a function to retain access to its lexical scope even after the outer function has completed. This helps with encapsulation and data hiding.

2. **Garbage Collection**:
   - Unused variables are deleted by JavaScript’s garbage collector.
   - However, closures can sometimes allocate memory that isn’t deleted immediately, which may impact memory usage.
   - Some modern browsers have optimized garbage collection to better handle closures.

## Additional Notes

- **Direct Invocation of Inner Functions**: Inner functions in JavaScript can be called immediately by using `()` twice, like this: `someFunction()()`.
- **Passing Parameters to Inner Functions**: Parameters can also be passed in this way, but remember that the inner function needs to be returned to allow direct invocation.

1. An inner function can be directly called using two parenthesis ()().
2. Even parameters can be passed this way (Remember that the function needs to be returned to do this)
3. Closures can also be used for data hiding and encapsulation. So other code cannot access this value.
4. Unused variables are automatically deleted in High Level Programming language by garbage collector. Closures allocate a lot of memory which cannot be deleted so this acts as a disadvantage.
5. Some browsers now have smart garbage collectors that automatically deletes variables that are not used outside closures.

# FIRST CLASS FUNCTIONS 🔥ft. Anonymous Functions**
**Function Statement**
```
function a(){
console.log("a called"")
}
```
**Function declaration**
```
var b = function () {
console.log("b called")
}
```
**Difference between function statement and function declaration**
difference in them is Hoisting
```
a()//output is a called
b()//typeError
function a(){
console.log("a called"")
}
var b = function () {
console.log("b called")
}
```
**Anonymous Functions**
Anonymous functions are functions that functions used as values
```
function () {

}//syntax error function statement require a function name
var b = function (){}
```
**Named function Expression**
ormal function with its name assigned to a variable !!In this case you cannot call function by its name in outer scope!! (Scope Chain)
```
var b = function xyz(){
console.log("b called");
}
b()//b called
xyz()//error reference error xyz is not defined
```
**Difference between parameters and arguments**
```
function a(param1,param2){

}
var ab=a(arg1,arg2);
```
**First class functions**
The Ability of use function as value,
Can be passed as an Argument,
Can be executed inside a closured function &
Can be taken as return form.
For Ex - 
```
var b = function(param){
                               return function xyz(){
                                       console.log(" F C F ");
                               }
                       }
```
  **first class Functions / first class citizens :**

1. used as values
2. can be passed as argument
3. can be executed inside a closured function
4. can be taken as return
**5. What is Function Statement ?**
   A. A normal function that we create using Naming convention. & By this we can do the Hoisting.
  ```
For Ex - function xyz(){
   console.log("Function Statement");
   }
````
**6. What is Function Expression ?**
   A. When we assign a function into a variable that is Function Expression. & We can not do Hoisting by this becz it acts like variable.
   ```
 For Ex - var a = function(){
   console.log("Function Expression");
   }
```

**7. What is Anonymous Function ?**
   A. A Function without the name is known as Anonymous Function. & It is used in a place where function are treated as value.
   For Ex - function(){
   }

**8. What is Named Function Expression ?**
   A. A function with a name is known as Named Function Expression.
  ```
 For Ex - var a = function xyx(){
   console.log("Names Function Expression");
   }
```
**9. Difference b/w Parameters and Arguments ?**
   A. When we creating a function & put some variabels in this ( ) that is our Parameters.
   ```
 For Ex - function ab( param1, param2 ){
   console.log("
   }
   & When we call this function & pass a variabel in this ( ) that is our Arguments
   For Ex - ab( 4, 5 );
```
**10. What is First Class Function Or First class citizens?**
    A. The Ability of use function as value,
Can be passed as an Argument,Can be executed inside a closured function &    Can be taken as return form.
      ``` 
      For Ex - var b = function(param){
                             return function xyz(){
                                     console.log(" F C F ");
                             }
                     }

```

7. Function are heart of JS. They are called first class citizens or first class functions because they have the ability to be stored in the variables, passed as parameters and arguments. They can also be returned in the function.

For Revision

**Function statement / Function Declaration : the function is normally defined and can be used later on**
**Function expression : the function is first created and assigned to a variable so that it can be called by its variable name and unless it is defined, it cannot be executed otherwise it throws out "Uncaught TypeError"

Anonymous function : function where there is no need to define name for the function, it just can be assigned to variable

Named function : Normal function with its name assigned to a variable !!In this case you cannot call function by its name in outer scope!! (Scope Chain)

first class Functions / first class citizens :

1. used as values
2. can be passed as argument
3. can be executed inside a closured function
4. can be taken as return

**Callback Functions in JS ft. Event Listeners 🔥**
setTimeout(function () {
console.log("timer");
},5000);

function x(y){
console.log("x);
y();
}
x(function y() {
console.log("y");
});

**EventListeners**
""function attachEventListeners() {""
let count=0;
document.getElementById("click", function xyz(){
console.log("button clicked",++count);
});
}""
attachEventListeners();
<button id="click">click me </button>

1. Function that is passed on as argument to another function is called callback function.
2. setTimeout helps turn JS which is sinhlethreaded and synchronous into asynchronous.
3. Event listeners can also invoke closures with scope.
4. Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used.

we already know that function are first class citizens in JavaScript.
that means we can take a function and pass it to another function.
when we a pass a function to another function, whatever the function that we are passing as an argument that we call it as call back function.

Example:-

function x(y) {
console.log("x");
y();
}
x(function y() {
console.log("y");
});

in the above example function y is the call back function to the function x.
in the above example it is up to function x on when it wants to execute function y, means in the code function y will get called by function x after some time, that’s the reason we got the naming convention as call back function , these function will get called after a while back.

setTimeout(function a() {
console.log("Hi")
}, 5000)

in the above example function a() is the call back function to the function setTimeout.

these call back functions are very powerful in JavaScript.
it gives us access to the whole asynchronous world in a synchronous single threaded language.
JavaScript is a synchronous single threaded language. That means it can do one thing at a time in a single order.

but using call backs we can do asynchronous operation in JavaScript.

for example if any function or operation takes lot of time (may be 20 to 30 seconds),
and if we try to execute this function using main thread (JavaScript has only one main thread), then the JavaScript won’t be able to do any other things in these 20 to 30 seconds.
we should never block our main thread.
that’s the reason we should always try to choose async operation which takes time.

without the concept of call back function we won’t be able to achieve async operation in JavaScript.

**Asynchronous JavaScript & EVENT LOOP from scratch 🔥**

**Microtask Queue** => .then(()=>{}); => arrow part will go into microtask Queue

.catch(()=>{}); => arrow part will go into microtask queue

.finally(()=>{}) =>arrow part will go into microtask queue

async function ayncFunc(){
await ...
function body execution following await =>arrow part will go into microtask queue

}
queueMicrotask(()=>{}) =>arrow part will go into microtask queue

new MutationObserver(()=>{}) =>arrow part will go into microtask queue

Wow, these are some of the best doubts. ❤️

1. When does the event loop actually start? - Event loop, as the name suggests, is a single-thread, loop that is `almost infinite`. It's always running and doing its job. ❤️
2. Are only asynchronous web API callbacks are registered in the web API environment? - YES, the synchronous callback functions like what we pass inside map, filter, and reduce aren't registered in the Web API environment. It's just those async callback functions that go through all this.
3. Does the web API environment stores only the callback function and pushes the same callback to queue/microtask queue? - Yes, the callback functions are stored, and a reference is scheduled in the queues. Moreover, in the case of event listeners(for example click handlers), the original callbacks stay in the web API environment forever, that's why it's advised to explicitly remove the listeners when not in use so that the garbage collector does its job.
4. How does it matter if we delay for setTimeout would be 0ms. Then callback will move to queue without any wait?
   No, there are trust issues with setTimeout() 😅. The callback function needs to wait until the Call Stack is empty. So the 0 ms callback might have to wait for 100ms also if the stack is busy. It's a very beautiful concept, and I've covered this in detail in the next episode of Namaste JavaScript. 🔥

In JavaScript, the event loop, microtask queue, callback queue, and call stack are all key components that help manage the asynchronous nature of the language.

Call Stack:

The call stack is a data structure that keeps track of the function calls in your code. It follows the Last In, First Out (LIFO) principle, meaning the last function that gets pushed onto the stack is the first one to be popped off when the function completes.
Callback Queue (Task Queue):

The callback queue, also known as the task queue, holds tasks (callbacks or events) that are ready to be executed. These tasks usually come from asynchronous operations, such as DOM events, HTTP requests, or timers.
Event Loop:

The event loop is responsible for continuously checking the call stack and the callback queue. If the call stack is empty, the event loop takes the first task from the callback queue and pushes it onto the call stack for execution.
Microtask Queue:

The microtask queue holds tasks that are also ready to be executed but has a higher priority than the callback queue. Microtasks are usually scheduled by JavaScript promises, mutation observers, and other similar mechanisms.
Here's how they work together:

When an asynchronous operation is encountered, such as a setTimeout or a Promise, the callback associated with that operation is sent to the callback queue after the specified time or when the Promise settles.

When the call stack is empty (no functions being executed), the event loop takes the first task from the microtask queue and pushes it onto the call stack.

If the microtask queue is empty, the event loop looks at the callback queue and pushes the first task onto the call stack.

This process repeats, allowing JavaScript to handle asynchronous operations without blocking the main thread.

Understanding these concepts is crucial for writing efficient and responsive asynchronous JavaScript code, as it helps you manage the order of execution and prevent blocking the user interface.

**JS Engine EXPOSED 🔥 Google's V8 Architecture 🚀**
Basic idea about Mark & Sweep Algo:
It comprise of 2 phases -

1. Mark phase
2. Sweep phase

All objects are marked as 0 initially (at creation) and in mark phase the objects that will be accessible are marked as 1 (reachable) by a DFS graph traversal.

During sweep phase, the objects marked with 0 are removed from heap memory. and also all reachable objects are again initialized with 0 (made unreachable) because the algorithm will run again.

So, it's basically tracing garbage collector concept. :)
Things learned:

1. JS runtime environment contains all elements required to run JS.
2. It contains JS engine, set of API's, callback queue, microtask queue, event loop.
3. JS engine is a piece of code.
4. Process includes Parsing ---> Compilation -----> Execution.
5. Parsing breaks code into tokens and converts it into AST(Abstract Syntax Tree).
6. Modern JS engine follows JIT compilation, it interprets while it optimises code as much as it can.
7. Execution and Compilation are done together.
8. Execution has Garbage collector and other optimisation such as inlining, copy elusion, inline caching etc.
9. Fell in love with JS. ❤❤

**Higher-Order Functions ft. Functional Programming**
const area = function (radius){
return 2*Math.PI*radius;
}

const diameter = function (radius) {
return 2 \* radius;
}

const circumference = function (radius) {
return 2*Math.PI*r\*r;
}

const calculate = function (arr,logic) {
const output=[];
for(let i=0;i<arr.length;i++){
output.push(logic(arr[i]));
}
return output;
}

console.log(radius.map(area));
console.log(calculate(radius,area));

Array.prototype.calculate = function (logic) {
const output = [];
for(let i=0;i<this.length;i++;i++){
output.push(logic(this[i]));
}
return output;
}

console.log(radius.calculate(area));

First-class functions are JavaScript functions that can behave like variables. They can also be passed as arguments to higher-order functions.

Higher-order functions are functions that return a function or take in a function as an argument.

1. Follow DRY(Don't Repeat Yourself) principle while coding.
2. Use function to stop writing repeating line of codes.
3. Function that takes another function as argument(callback function) is known as Higher order functions.
4. It is this ability that function can be stored, passed and returned, they are called first class citizens.
5. If we use Array.property.function-name. This function is accessible to any array in your code.

**reduce Function**

const users = [
{firstName : "Manikanta",lastName : "Mogili",age : 22},
{},
{}
];

//output : {26 : 2,22:2,56:1}

const output = users.reduce(function (acc,curr){
if(arr[curr.age]){
arr[curr.age]=++arr[curr.age];
}
else{
arr[curr.age]=0;
}
return acc;
},{});
console.log(output);

//output age less than 30 their firstName

users.filter(()=> x.age <30>).map((x)=>x.fistname);

1. map method is used when we want transformation of whole array.
2. filter is used when we want to filter the arrar to obtain required value.
3. reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).
4. reduce passes two arguments one function(which includes accumulator and initial value as argument itself) and another initial value of accumulator.
5. Homework:
   const output = user.reduce(function(acc, curr){
   if (curr.age < 30){
   acc.push(curr.firstName);
   }
   return acc;
   }, [ ])
   Here is my solution:
   const output = users.reduce(function(acc, curr){
   if(curr.age < 30){
   acc.push(curr.firstName); //if age of current user is < 30, push there firstName into the acc array
   }
   return acc;
   }, [ ]); //initially, the acc will be an empty array

console.log(output);
Thanks Akshay for such a crystal clear explanation!!

I just finished your "Namaste JavaScript - series 1" course. I can't say how much confident I am in JavaScript now just because of you.
Thank you so much for making this amazing video series on JavaScript.

Homework solution:
const users = [
{ firstName: "Akshay", lastName: "Saini", age: 26 },
{ firstName: "Donald", lastName: "Trump", age: 75},
{ firstName: "Elon", lastName: "Must", age: 50},
{ firstName: "Deepika", lastName: "Padukone", age: 28}
];

const output = users.reduce(function(acc, curr) {
if (curr.age < 30) {
acc.push(curr.firstName);
}
return acc;
} , [ ] );
console.log(output);

P.S - from today onwards, I am naming you "The Amazing - Akshay Saini"

Regards,
