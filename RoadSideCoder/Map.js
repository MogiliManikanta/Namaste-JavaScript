// map
//polyfill

// Array.map((num,i,arr)=>{})

Array.prototype.myMap = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i], i, this));
  }
  return temp;
};

const nums = [1, 2, 3, 4, 5];

const multiply = nums.myMap((num, i, arr) => {
  return num * 3;
});

console.log(multiply);

//Question 1 : map vs forEach

const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const newarr = arr.map((num) => {
  return ar + 2;
});

console.log(newarr);

arr.forEach((num) => {
  return num + 2;
}); // it will modify the original array will not return new array

arr.forEach((num, i) => {
  arr[i] = num + 2;
});

// we can chain the map like map.filter.reduce
// forEach cannot do it

//question2 :  return only name of students in capital

let students = [
  { id: 1, name: "john", age: "18", marks: "80" },
  { id: 2, name: "merry", age: "20", marks: "90" },
  { id: 3, name: "tom", age: "19", marks: "70" },
  { id: 4, name: "tony", age: "18", marks: "80" },
];

let names = [];
for (let i = 0; i < students.length; i++) {
  names.push(students[i].name.toUpperCase());
}
console.log(names);

let names2 = students.map((stu) => stu.name.toUpperCase());
console.log(names2);

// Question 3 : Return only details of those who scored more than 60

let names3 = students.filter((stu) => stu.marks > 60);
console.log(names);

// Question 4 : Return only names of those who scored more than 60 in upper case

let names4 = students
  .filter((stu) => stu.marks > 60)
  .map((stu) => stu.name.toUpperCase());
console.log(names4);

// question 5 : sum of marks of all students

const sum = students.reduce((acc, curr) => acc + curr.marks, 0);
console.log(sum);

// question 6 : count of students who scored more than 60
let count = students.filter((stu) => stu.marks > 60).length;
console.log(count);

//question 7 : Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

const totalmarks = students
  .map((stu) => {
    if (stu.marks < 60) {
      stu.marks += 20;
    }
    return stu;
  })
  .filter((stu) => stu.marks > 60)
  .reduce((acc, curr) => acc + curr.marks, 0);

console.log(totalmarks);

// question 8 : Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

const totalmarks2 = students
  .filter((stu) => stu.marks < 60)
  .map((stu) => {
    stu.marks += 20;
    return stu;
  })
  .filter((stu) => stu.marks > 60)
  .reduce((acc, curr) => acc + curr.marks, 0);

console.log(totalmarks2);

// question 9 : Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

const totalmarks3 = students
  .filter((stu) => stu.marks < 60)
  .map((stu) => {
    stu.marks += 20;
    return stu;
  })
  .filter((stu) => stu.marks > 60)
  .reduce((acc, curr) => acc + curr.marks, 0);

console.log(totalmarks3);
