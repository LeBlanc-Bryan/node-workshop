function sayHello() {
    console.log("Hello World!");
    setTimeout(function() {
      console.log("Hello World Again!!");
    } ,1000);
}
sayHello();

function sayHelloTen() {
    setTimeout(function() {
        console.log("Hello World");
        sayHelloTen();
    }, 3000);
}
sayHelloTen();

