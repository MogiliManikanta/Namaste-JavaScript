console.log("start"); //synchronous code

const promise1 = new Promise((resolve, reject) => {
  console.log(1); //synchronous code
  resolve(2); //asynchronous code
});
promise1.then((res) => {
  console.log(res); //asynchronous code
});

console.log("end"); //synchronous code

// js engine will run first synchronous code after asynchronous code
// start 1 end 2

console.log("start"); //synchronous code

const promise2 = new Promise((resolve, reject) => {
  console.log(1); //synchronous code
  resolve(2); //asynchronous code
  console.log(3);
});
promise1.then((res) => {
  console.log(res); //asynchronous code
});

console.log("end");

//output start 1 3 end 2

// 2 . output

console.log("start"); //synchronous code

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

console.log("middle");
fn().then((res) => {
  console.log(res);
});

console.log("end");
// output : atart middle 1 end success

function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

let promise = job();
promise
  .then(function () {
    console.log("success 1");
  })
  .then(function () {
    console.log("success 2");
  })
  .then(function () {
    console.log("success 3");
  })
  .catch(function () {
    console.log("error");
  })
  .then(function () {
    console.log("success 4");
  });

//output : error success 4

function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise3 = job(true);
promise3
  .then(function (data) {
    console.log("success");
    return job(false);
  })
  .catch(function (error) {
    console.log("error");
    return "Error caught";
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })

  .catch(function () {
    console.log("error");
  });

// success
//error
// error caught

function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise4 = job(true);
promise
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat";
    }
    return job(true);
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
    return job(false);
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch(function (error) {
    console.log(error);
    return "Error caught";
  })
  .then(function (data) {
    console.log(data);
    return new Error("test");
  })
  .then(function (data) {
    console.log("success", data.message);
  })
  .catch(function (error) {
    console.log(error);
  });
// success
// Defeat
// error
// error caught
// success

// 7. promise changing

const firstPromise = new Promise((resolve, reject) => {
  resolve("first");
});

const secondPromise = new Promise((resolve, reject) => {
  resolve(firstPromise);
});

secondPromise
  .then((data) => {
    return res;
  })
  .then((data) => {
    console.log(data);
  });
// output : first

//promises recurssion

function promRecurse(funcPromises) {
  if (funcPromises.length === 0) return;

  const currPromise = funcPromises.shift();

  currPromise
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
  promRecurse(funcPromises);
}

promRecurse([firstPromise, secondPromise]);

//promise.all polyfill
PromisePolyFill.all = (promises) => {
  let fulfilledPromises = [],
    result = [];

  function executor(resolve, reject) {
    promises.forEach((promise, index) =>
      promise
        .then((val) => {
          fulfilledPromises.push(true);
          result[index] = val;

          if (fulfilledPromises.length === promises.length) {
            return resolve(result);
          }
        })
        .catch((error) => {
          return reject(error);
        })
    );
  }
  return new PromisePolyFill(executor);
};
