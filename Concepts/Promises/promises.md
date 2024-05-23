# Promises
### Synchronous  Vs Asynchronous 

#### Synchronous
```
console.log("start");
console.log("completing");
console.log("finish");

```
#### Asynchronous 


 - Javascript is Single threaded - Synchronous by default. Then how is Js executing asynchronously
 - Js executes synchronous code first 
 - Then executes asynchronous code later
 
```
console.log("start");

setTimeout( () => {
console.log("completing");
}, 1000);

console.log("finish");

```





