document.querySelector("#grandparent").addEventListener(
  "click",
  function () {
    console.log("grandparent");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  function () {
    console.log("parent");
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  function () {
    console.log("child");
  },
  true
);

// grandparent
// parent
// child

document.querySelector("#grandparent").addEventListener(
  "click",
  function () {
    console.log("grandparent");
  },
  true
); // capturing

document.querySelector("#parent").addEventListener(
  "click",
  function (e) {
    console.log("parent");

    e.stopPropagation();
  },
  false
); // bubbling

document.querySelector("#child").addEventListener(
  "click",
  function () {
    console.log("child");
  },
  true
); // capturing

// first will happen capturing later bubbling
// grandparent
// child  // capturing
// parent  // bubbling

/* Capturing aka Trickling

if propagation occurs from the child to the parent
it will stop the propagation of the event

child
parent


Capturing phase – the event goes down to the element.
Target phase – the event reached the target element.
Bubbling phase – the event bubbles up from the element.

elem.addEventListener( event, callack,  capture)
If it’s false (default), then the handler is set on the bubbling phase.
If it’s true, then the handler is set on the capturing phase.

event.stopPropagation() stops the bubbling*/

//modal container

const container = document.querySelector(".modalContainer");
const button = document.querySelector(".openModal");

button.addEventListener("click", () => {
  toggleModal(true);
});
function toggleModal(toggle) {
  container.style.display = toggle ? "flex" : "none";
}

container.addEventListener("click", (e) => {
  if (e.target === container) {
    toggleModal(false);
  }
});
