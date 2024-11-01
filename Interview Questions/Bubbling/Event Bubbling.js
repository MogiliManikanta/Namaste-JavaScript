// 1. What is Event Bubbling, Capturing, Trickling explained thoroughly
// 2. Which order are event handlers are called while Event Trickling & Bubbling?
// 3. How to Capture instead of Bubbling?
// 4. Demo of code to demonstrate each of them with examples
// 5. How to stop the propagation of events while Event bubbling and Capturing?

document.querySelector("#grandparent").addEventListener("click", function () {
  console.log("grandparent");
});

document.querySelector("#parent").addEventListener("click", function () {
  console.log("parent");
});

document.querySelector("#child").addEventListener("click", function () {
  console.log("child");
});

document.querySelector("#grandparent").addEventListener(
  "click",
  function () {
    console.log("grandparent");
  },
  false
);

document.querySelector("#parent").addEventListener(
  "click",
  function () {
    console.log("parent");
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  function () {
    console.log("child");
  },
  false
);

// output :

// child
// parent
// grandparent
