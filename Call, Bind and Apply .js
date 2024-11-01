// what is call?
var obj = { name: "Manikanta" };

function sayHello(age) {
  return "Hello " + this.name + " you are " + age;
}

console.log(sayHello.call(obj, 24)); //Hello Manikanta you are 24

// what is apply?
console.log(sayHello.apply(obj, [24])); //Hello Manikanta you are 24

// what is bind?
var func = sayHello.bind(obj, 24);
console.log(func()); //Hello Manikanta you are 24

//output 1:

const person = { name: "Manikanta" };
function sayHi(age) {
  return `${this.name} says hi to ${age}`;
}

console.log(sayHi.call(person, 24)); //Manikanta says hi to 24
console.log(sayHi.bind(person, 24)()); // return function

//output2

const age = 24;

var person1 = {
  name: "Manikanta",
  age: 20,
  getDetails: function () {
    console.log(this.age);
  },
};

var person2 = { age: 24 };
console.log(person1.getDetails.call(person2)()); //24

//output3

var status = "😎";
setTimeout(() => {
  const status = "😍";

  const data = {
    status: "🥑",
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus()); // 🥑
  console.log(data.getStatus.call(this)); // 😎
}, 0);

// call printAnimals such that it prints all animals in object

const animals = [
  { species: "dog", name: "elmo" },
  { species: "cat", name: "kiki" },
  { species: "fish", name: "nemo" },
];

function printAnimals(i) {
  this.print = function () {
    console.log("#", i, " ", this.species, " : ", this.name);
  };
  this.print();
}
//solution
for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}

// append an array to another array

const array = ["a", "b", "c"];

const elements = [0, 1, 2, 3, 4, 5];

array.push.apply(array, elements);
console.log(array);

const numbers = [1, 2, 3, 4, 5];

console.log(Math.max(numbers)); // does not work on arrays nan=>output

console.log(Math.max.apply(null, numbers));

//bound function

function f() {
  console.log(this); //points to window object
}
let user = {
  g: f.bind(null),
};
user.g();

function f() {
  console.log(this.name); //Manikanta
}

f = f.bind({ name: "Manikanta" }).bind({ name: "Vishal" });
// bind changing does not work
f();

//fix the line 22 to make code work properly

function checkPassword(success, failed) {
  let password = prompt("Enter your password");
  if (password == "Roadside Coder") success();
  else failed();
}

let user4 = {
  name: "Manikanta",

  loginsuccessful() {
    console.log(`${this.name} logged in successfully`);
  },

  loginfailed() {
    console.log(`${this.name} failed to login`);
  },
};

checkPassword(user4.loginsuccessful, user4.loginfailed);

// right one
checkPassword(user4.loginsuccessful.bind(user4), user4.loginfailed.bind(user4));

//partial application for login function

function checkPassword(ok, fail) {
  let password = prompt("Enter your password");
  if (password == "Roadside Coder") {
    ok();
  } else {
    fail();
  }
}

let user5 = {
  name: "Manikanta",
  login(result) {
    console.log(
      this.name + (result ? " logged in successfully" : " failed to login")
    );
  },
};
//wrong answer
checkPassword(user5.login(true), user5.login(false));

// correct answer
checkPassword(user5.login.bind(user5, true), user5.login.bind(user5, false));

// explicitly bind function with arrow function

const age1 = 10;
var person2 = {
  name: "Piyush",
  age: 20,
  getAgeArrow: () => console.log(this.age), // undefined
  getAge: function () {
    console.log(this.age); //24
  },
};

var person2 = { age: 24 };

person.getAgeArrow.call(person2); // arrow function takes from the parent normal function
person.getAge.call(person2); //24
