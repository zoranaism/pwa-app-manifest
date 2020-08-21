var deferredPrompt;

// ONLY IF BROWERS DO NOT HAVE PROMISE SUPPORT, IT WILL USE PROMISE.JS PACKAGE 
if (!window.Promise) {
  window.Promise = Promise;
}

if ("serviceWorker" in navigator) {
  // navigator is the browser
  navigator.serviceWorker
    .register("/sw.js")
    .then(function () {
      console.log("Service worker registered!");
    })
    .catch(function (err) {
      console.log(err);
    });
}

window.addEventListener("beforeinstallprompt", function (event) {
  console.log("before install prompt fired");
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve("this is executed once the timer is done");
    reject({ code: 500, message: "Error occurred" });
  }, 3000);
});

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://httpbin.org/get");
// xhr.responseType = "json";

// xhr.onload = function () {
//   console.log(xhr);
// };

// xhr.onerror = function() {
//   console.log("Error");
// }

// xhr.send()

// IN ORDER TO FETCH IN THE OLDER BROWSERS WE CANT USE FETCH() OR ANY ASYNC FUNCTION
// IN THAT CASE WE USE POLYFILLS

fetch("http://httpbin.org/get")
  .then(function (response) {
    // console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });

fetch("http://httpbin.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  mode: "cors",
  body: JSON.stringify({
    message: "Does this work?",
  }),
})
  .then(function (response) {
    // console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
// promise
//   .then(function (text) {
//     return text;
//   }, function(err) {
//     console.log(err.code, err.message);
//   })
//   .then(function (newText) {
//     console.log(newText);
//   });

promise
  .then(function (text) {
    return text;
  })
  .then(function (newText) {
    console.log(newText);
  })
  .catch(function (err) {
    console.log(err.code, err.message);
  });

console.log("This is executed right after the set timeout");
