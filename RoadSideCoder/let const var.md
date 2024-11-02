```
var a = "hello"; // var is function scoped

console.log(a);

{
  var b = "hello"; // var is function scoped
  console.log(b);
}
```
# variable shadowing
```
function test() {
  let c = "hello"; // let is block scoped
  if (true) {
    let c = "hai";
    console.log(c);
  }
  console.log(c);
}
test();
```
```
function test1() {
  // it will work using var => let
  var a = "hello";
  if (true) {
    let a = "hai";
    console.log(a);
  }
  console.log(a);
}
test1();
```

# illegal shadowing with var wil give error already defined
```
function test2() {
  //   let a = "hello";
  if (true) {
    var a = "hai";
    console.log(a);
  }
  console.log(a);
}
// test2();

//Uncaught SyntaxError: Identifier 'a' has already been declared (at let const var.js:37:9)
```

**var can be redeclare in the same scope**
**let and const cant be redeclare in the same scope**

**const canttont be declared with initialization**

**we cant change the value of const variable**
