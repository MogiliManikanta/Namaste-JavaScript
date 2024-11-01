//polyfill for reduce method

// arr.reduce((acc,curr,i,arr)=>{},initialValue)

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialvalue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callback(accumulator, this[i], i, this)
      : this[i];
  }
  return accumulator;
};

const nums = [1, 2, 3, 4, 5];

const sum = nums.myReduce((acc, num, i, arr) => {
  return acc + num;
}, 0);

console.log(sum);
