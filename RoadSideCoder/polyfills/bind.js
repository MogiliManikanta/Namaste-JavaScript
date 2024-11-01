// polyfill for call method

let car1 = {
  color: "red",
  company: "ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `you have purchased ${this.color} ${this.company} ${currency} ${price}`
  );
}

const newfunc1 = purchaseCar.bind(car1, "$", 10000);
newfunc1();
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};
const newFunc = purchaseCar.myBindl(car1, "$", 10000);
newFunc();
