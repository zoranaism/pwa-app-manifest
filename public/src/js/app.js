var deferredPrompt;

if ("serviceWorker" in navigator) {
  // navigator is the browser
  navigator.serviceWorker
    .register("/sw.js")
    .then(function () {
        console.log('Service worker registered!');
     });
}

window.addEventListener("beforeinstallprompt", function(event) {
  console.log("before install prompt fired");
  event.preventDefault(); 
  deferredPrompt = event;
  return false;
})