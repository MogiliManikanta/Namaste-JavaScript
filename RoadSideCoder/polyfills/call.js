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

purchaseCar.call(car1, "$", 10000);

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }

  context.fn = this;
  context.fn(...args);
};
purchaseCar.myCall(car1, "$", 10000);
