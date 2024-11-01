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

purchaseCar.apply(car1, ["$", 10000]);

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  if (!Array.isArray(args)) {
    throw new TypeError("Error");
  }

  context.fn = this;
  context.fn(...args);
};
purchaseCar.myApply(car1, ["$", 10000]);
