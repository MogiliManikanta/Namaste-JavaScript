let name = {
  firstname: "Vishal",
  lastname: "Kumar",
  fullName: function () {
    console.log(this.firstname + " " + this.lastname);
  },
};

name.fullName();

let name2 = {
  firstname: "Vishal",
  lastname: "Kumar",
};

// function borrowing

name.fullName.call(name2);

// another way to write remove the fullname in the name object

let fullname = function (hometown, city, country) {
  console.log(this.firstname + " " + this.lastname + " " + hometown);
};

fullname.call(name, "Chandigarh", "Delhi", "India");

fullname.call(name2, "Chandigarh", "Delhi", "India");

fullname.apply(name2, ["Chandigarh", "Delhi", "India"]);

fullname.apply(name, ["Chandigarh", "Delhi", "India"]);

// bind method
// it will return a new function which will be invoke later
let printMyName = fullname.bind(name, "Chandigarh", "Delhi", "India");
printMyName();
