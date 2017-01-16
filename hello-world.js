function helloWorld() {
  console.log("Hello World!");
  setTimeout(function() {
  console.log("Hello World Again!");
}, 3000)
}
helloWorld();

function helloWorld10() {
  console.log("Hello World");
    setTimeout(hello10, 3000);
}
setTimeout(hello10, 3000);

function helloWorld11() {
  setInterval(function() {
    console.log("Hello World!");
  }, 3000);
}
helloWorld11();