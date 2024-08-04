const { json } = require("body-parser");

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB Calls, network, Cryptography etc...
  setTimeout(() => {
    console.log("Async task 1 is complete");
    resolve();
  }, 1000);
});
promiseOne.then(() => {
  console.log("Promise 1 consumed");
});
// ------------------------------------------------------------------------
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 2 is complete");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise 2 consumed");
});
// ------------------------------------------------------------------------

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "Manoj", email: "example122@gmail.com" });
  }, 1000);
});
promiseThree.then((user) => {
  console.log(user);
  console.log(user.username);
});

// ------------------------------------------------------------------------

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    // let error = false
    if (!error) {
      resolve({ username: "Manoj", email: "example122@gmail.com" });
    } else {
      reject("ERROR: Something Went Wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise is either resolved or rejected");
  });

// --------------------------------((((( Async await ))))))----------------------------------------

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "JS", password: "123" });
    } else {
      reject("ERROR: JS Went Wrong");
    }
  }, 1000);
});

async function consumePromise() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromise();

// --------------------------------------------async await---------  try catch --------------------------------

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log((response));
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
// getAllUsers()

// ----------------------------------------Promise---------------------------------------------

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
