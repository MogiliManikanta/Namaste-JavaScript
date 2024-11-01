let user = {
  name: "Manikanta",
  age: 22,
  getDetails() {
    console.log(this.name);
  },
};
user.getDetails(); // Manikanta

let user1 = {
  name: "Manikanta",
  age: 22,
  childObj: {
    newName: "vishal",
    getDetails() {
      console.log(this.newName, "and", this.name); // vishal and undefined
    }, // this keyword refers to childObj object not user1 object itself
  },
};

user1.childObj.getDetails();

let user2 = {
  name: "Manikanta",
  age: 22,
  getDetails: () => {
    console.log(this.name); //no output
    console.log(this); // window object
  },
};
user2.getDetails();

let user3 = {
  name: "Manikanta",
  age: 22,
  getDetails() {
    const nestedArrow = () => console.log(this.name); //manikanta
    nestedArrow();
  },
}; // this will pint to the function of its parent

user3.getDetails();

//output1

const user4 = {
  firstName: "piyush!",
  getName() {
    const firstname = "Manikanta";
    return this.firstName;
  },
};

console.log(user4.getName()); //piyush

//output2

function makeUser() {
  return {
    name: "john",
    ref: this,
  };
}

let user5 = makeUser();
console.log(user5.ref.name); //no uutput

console.log(user5); // name: "john", ref: { name: "john", ref: window }

function makeUser1() {
  return {
    name: "john",
    ref() {
      return this;
    },
  };
}

let user6 = makeUser1();
console.log(user6.ref().name); //john

const user7 = {
  name: "piyush Agarwal!",
  lowMessage() {
    console.log(this.name);
  },
};

setTimeout(user7.lowMessage, 1000); /// no output or undefiend logmessage is call back function it s code will be palced in set timeout and it point s to global object

const user8 = {
  name: "Manikanta",
  logMessage() {
    console.log(this.name); //Manikanta
  },
};
setTimeout(function () {
  user8.logMessage();
}, 1000);

const user9 = {
  name: "Manikanta",
  greet() {
    return `Hello ${this.name}`;
  },
  farewell: () => {
    return `Goodbye ${this.name}`;
  },
};

console.log(user9.greet()); // Hello Manikanta
console.log(user9.farewell()); // Goodbye

// create an object calculator

const calculator = {
  read() {
    this.a = +prompt("a = ", 0);
    this.b = +prompt("b = ", 0);
  },
  sum() {
    return +this.a + +this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

var length = 4;
function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(fn) {
    fn();
  },
};
object.method(callback);

//output 4

var length = 4;
function callback() {
  console.log(this.length);
}
const object2 = {
  length: 5,
  method: function () {
    // arguments = [callback,2,3]
    arguments[0](); //parent is array and array has length property so answer is 3
  },
};
object.method(callback, 2, 3);

// implement this code

const calc = {
  total: 0,
  add(value) {
    this.total += value;
    return this;
  },
  multiply(value) {
    this.total *= value;
    return this;
  },
  subtract(value) {
    this.total -= value;
    return this;
  },
  divide(value) {
    this.total /= value;
    return this;
  },
};

const result = calc.add(10).multiply(30).subtract(30).add(12).divide(10);
console.log(result.total);
