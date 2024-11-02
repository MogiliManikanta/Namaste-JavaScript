# 1.why should we use currying?
 - Following are the reasons why currying is good :

- ✅ It makes a function pure which makes it expose to less errors and side effects.

- ✅ It helps in avoiding the same variable again and again.

- ✅ It is a checking method that checks if you have all the things before you proceed.

-  ✅ It divides one function into multiple functions so that one handles one set of responsibility.

```
 sum(1)(2)(3)

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(2)(3)(4));
```
```
 evaluate("sum")(1)(2)(3);
// evaluate("subtract")(1)(2)(3);
// evaluate("multiply")(1)(2)(3);
// evaluate("divide")(1)(2)(3)

function evaluate(operation) {
  return function (a) {
    return function (b) {
      return function (c) {
        if (operation === "sum") {
          return a + b + c;
        }
        if (operation === "subtract") {
          return a - b - c;
        }
        if (operation === "multiply") {
          return a * b * c;
        }
        if (operation === "divide") {
          return a / b / c;
        }
      };
    };
  };
}

console.log(evaluate("sum")(1)(2)(3));

//reuseing of currying

const mul = evaluate("multiply");

console.log(mul(1)(2)(3));

console.log(mul(4)(5)(6));

//infinite currying => sum(1)(2)(3)(4)(5).....(n)

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(5)(2)(3)(4)(8)());

// currying vs partilar application

// partial application

function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}
const x = sum(1);
const y = x(2, 3);
console.log(y);

// or

console.log(sum(20)(1, 4));

// manipulating dom

function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}

const updateHead = updateElementText("heading");

updateHead("new heading");

// 6. curry implementation

// converts f(a,b,c) into f(a)(b)(c)

function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c, d) => a + b + c + d;

const totalSum = curry(sum);

console.log(totalSum(1)(2)(3)(4));
```
