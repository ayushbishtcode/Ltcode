// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

function createHelloWorld() {
  return function hello() {
    return "Hello World";
  };
}

const fn = createHelloWorld();
document.getElementById("output").innerHTML = fn();

console.log(fn());
