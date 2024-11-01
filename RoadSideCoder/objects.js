// objects in javascript

const user = {
  name: "roadsidecoder",
  age: 22,
  "my name is": "Manikanta",
};

delete user["my name is"];
user.name = "Manikanta";
delete user.age; // delete keyword for properties only
console.log(user);

console.log(user["my name is"]);

const func = (function (a) {
  delete a;
  return a;
})(10);
console.log(func);

// computed properties
const property = "firstname";
const name = "Manikanta";

const user = {
  [property]: name,
};
console.log(user);
//iterate through an object

for (let key in user) {
  console.log(key, user[key]);
}

//output
const obj = {
  a: "one",
  b: "two",
  c: "three",
};

console.log(obj);
//output
// {a:'three', b :'two'}

//output2 :
// create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2.

let nums = {
  a1: 100,
  b1: 200,
  title1: "hello",
};

function multiplyByTwo(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
  return obj;
}
console.log(multiplyByTwo(nums));

//output of the following code

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); // output 456

a["[object Object]"] = 123;
a["[object Object]"] = 456;

console.log(a["[object Object]"]); //456

// what's JSON.stringify and JSON.parse ?

const user = {
  name: "Piyush",
  age: 24,
};
console.log(JSON.stringify(user)); // returns {"name":"Piyush","age":24} object as a string

console.log(JSON.parse(JSON.stringify(user))); //returns name: "Piyush", age: 24 string as an object

localStorage.setItem("test", user);

console.log(localStorage.getItem("test"));

// cookies localstorage session storage

console.log([..."Lydia"]);

// ['L', 'y', 'd', 'a']

const user = { name: "Manikanta", age: 22 };
const admin = { admin: true, ...user };

console.log(admin);

//{admin: true, name: "Manikanta", age: 22}

const settings = {
  username: "roadsidecoder",
  level: 10,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);
//{"level":10,"health":90}

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); //in arrow methods this refers to gloabal object means window object => undefined

// destructuring in objects
let user = {
  name1: "manikanta",
  age: 24,
  fullname: {
    first: "Manikanta",
    last: "mogili",
  },
};
const { name1: myName } = user;
console.log(myName); //manikanta

const {
  fullname: { first },
} = user;
console.log(first); //Manikanta

//output

function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}

console.log(getItems(["apple", "banana"], "orange", "grapes", "mango"));
// ['apple', 'banana', 'orange', 'grapes', 'mango']

let c1 = { greeting: "hello" };

let d;
d = c1; // we are sharing reference
c.greeting = "hi"; // we are changing the value d will also change

console.log(d.greeting); // heelo

console.log({ a: 1 } == { a: 1 }); //false
// console.log({ a: 1 } === { a: 1 }); //false

let person = { name: "Lydia" };
const members = [person];
person = null;
console.log(members); // print the array

//output
person.name = null;
console.log(members); // print the null

const value = {number : 10};

const multiply = (x={...value})=>{
    console.log(x.number*=2));
};

multiply();//20
multiply();//20
multiply(value);//20 but it will change the value number to 20
multiply(value);//40

function changeAgeAndReference(person){
    person.age=25;
    person = {
        name: "john",
        age :50,
    };
    return person;
}

const personObj1 = {
    name : "alex",
    age : 24,
};


const personObj2 = changeAgeAndReference(personObj1);


console.log(personObj1); // {name: "alex", age: 25}
console.log(personObj2);// {name: "john", age: 50}


//shallow copy
//deep copy

//clone an object
let user = {
    name : "manikanta",
    age : 24,
};

const objClone = Object.assign({}, user);
objClone.name="vishal";
// will not affect the original array
console.log(user);//{ name: 'manikanta', age: 24 }
console.log(objClone);//{ name: 'vishal', age: 24 }

const objClone1 = JSON.parse(JSON.stringify(user));
const objClone2 = {...user};
