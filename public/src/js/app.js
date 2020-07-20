if ("serviceWorker" in navigator) {
  // navigator is the browser
  navigator.serviceWorker
    .register("/sw.js")
    .then(function () {
        console.log('Service worker registered!');
     });
}
