/*
Debouncing and Throttling Interview Questions
What is Debouncing
What is Throttling
Difference between Debounce and Throttle functions
Web performance optimization by Debouncing
Rate limiting of function calls by Throttling
Example 1: How Search bar of ecommerce site uses Debouncing and Throttling
Example 2: Debouncing and Throttling effect on Resizing of Window
Example 3: Shooting Game scenario using throttling and Debouncing
Which is better Debouncing or Throttling
*/

/*Shooting game analogy:
Deboucing:  When the user clicks on the shoot button 10 times (Number of Bullets) Reload the gun for more shooting.
Throttle: When the user clicks on the shoot button, bullets runs out, but going to have to wait for the interval before it reloads by itsself


From JS engine's perspective
throttling: I am working on something which might take x milliseconds, so don't disturb me for next x milliseconds
debouncing: first you finish your action (typing, clicking) & then after x milliseconds I will fetch the required data



Throttling:
Baby: Mom give me a piece of chocolate cake
Mom: No you can get one, only after 1 hour
(baby wont get a piece of cake no matter how many times she asked, but only after each hour)

Debouncing:
Baby: Mom give me a piece of chocolate cake, . . .Mom give me a piece of chocolate cake ... mom give me ...
Mom: No, You will get a piece of cake only after 1 hour from LAST time you asked for one. 😃


*/
// <button class="increment_btn">Increment</button>
// <p class="increment_pressed">Button Pressed <span>0</span> Times</p>
// <p class="increment_count">Triggered<span>0</span></p>

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_count");
const count = document.querySelector(".increment_pressed");

var pressedCount = 0;
var triggerCount = 0;
//we need to add load ash cdn links
const debounceCount = _.debounce(() => {
  count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  //   debounceCount();
  throttleCount();
});

const throttleCount = _.throttle(() => {
  count.innerHTML = ++triggerCount;
}, 800);

//polyfill

const myDebounce = (cb, d) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

//throttle
const myThrottle = (cb, d) => {
  let last = 0;
  return (...args) => {
    let now = Date.now();
    if (now - last < d) {
      return;
    }
    last = now;
    return cb(...args);
  };
};
