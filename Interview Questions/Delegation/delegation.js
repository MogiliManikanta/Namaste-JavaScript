// document
//   .querySelector("#categories")
//   .addEventListener("click", function (event) {
//     if (event.target.nodeName === "LI") {
//       if (event.target.id) {
//         // Ensure there's an id
//         console.log(event.target.id);
//         window.location.href = "/" + event.target.id;
//       } else {
//         console.error("LI element clicked does not have an id");
//       }
//     }
//   });

document
  .querySelector("#categories")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      console.log(event.target.id); // Log the id of the clicked LI
      window.location.href = "/" + event.target.id; // Navigate to new URL
    }
  });

document.querySelector("#form").addEventListener("keyup", (e) => {
  console.log(e);
  if (e.target.dataset.uppercase !== undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});

/*
What is Event Delegation?
A quick demo and examples of this techniques
Benefits of Event Delegation?
Limitations of Event Delegation?

Benefits of event delegation:
1) improves memory space
2) mitigates risk of performance bottle neck
3) Dom manipulation
4) when elements get added dynamically, the process of adding events is slow
Limitations:
1) All the events are not bubbled up, some events like blur, focus are not bubbled up
2) if e.stopPropogation is used in child, then events are not bubbled up


Benefits of event delegation.
1.Less memory usage.
2.Mitigates risk of performance bottleneck.
3.Instead of writing multiple event listener task can be done in single event listener so writing less code is also a benefit 
4.When elements are dynamically added ,so adding events to the element is slow so event delegation eventually takes care of it.
Limitation 
1.Not all events support event delegation.
2.If stoppropogation is used on child elements eventually event delegation would not work.
*/
