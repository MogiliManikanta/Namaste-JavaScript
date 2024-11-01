let name = {
  firstname: "Vishal",
  lastname: "Kumar",
};

let printName = function (hometown, city, country, pincode) {
  console.log(
    this.firstname +
      " " +
      this.lastname +
      " " +
      hometown +
      " " +
      city +
      " " +
      country +
      " " +
      pincode
  );
};

let printMyName = printName.bind(name, "Chandigarh", "Delhi", "India");
printMyName(533349);

Function.prototype.myBind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.myBind(name, "Chandigarh", "Delhi", "India");
printMyName2(533449);
/**
 * 
 * The bind() method creates a new function, when invoked, has the this sets to a provided value.
The bind() method allows an object to borrow a method from another object without making a copy of that method. This is known as function borrowing in JavaScript.
 */
