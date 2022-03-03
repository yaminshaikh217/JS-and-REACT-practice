// 👉  JavaScript Timing Events

// **********************************************************************





// setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.

// setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously.

// 1️⃣ setTimeout()

// 2️⃣clearTimeout()

// 3️⃣ setInterval()

// 4️⃣ clearInterval()



// **********************************************************************

// 👉 object oriented Javascript

// **********************************************************************


// 1️⃣ What is Object Literal?

// Object literal is simply a key:value pair data structure. 

// Storing variables and functions together in one container, 
// we can refer this as an Objects.



// How to create an Object?

// 1st way 

// let bioData = { 
//     myName : "thapatechnical",
//     myAge : 26,
//     getData : function(){
//       console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }

// bioData.getData();

// 2nd way no need to write functions as well after es6

// let bioData = { 
//   myName : "thapatechnical",
//   myAge : 26,
//   getData (){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

// bioData.getData();


// 👉 What if we want object as a value inside an Object 


// let bioData = { 
//   myName : {
//     realName : "vinod",
//     channelName : "thapa technical" 
//   },
//   myAge : 26,
//   getData (){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

// console.log(bioData.myName.channelName );





// 2️⃣ What is this Object?

// The definition  of "this" object is that it contain the current context. 

// The this object can have different values depending on where it is placed.  


// // For Example 1 
// console.log(this.alert('Awesome'));
// // it refers to the current context and that is window global object 


// // ex 2 
// function myName() {
//     console.log(this);
// }
// myName();



// // ex 3 

// var myNames = 'vinod';
// function myName() {
//     console.log(this.myNames);
// }
// myName();


// // ex 4 
// const obj = {
//     myAge : 26,
//     myName() {
//       console.log(this.myAge);
//     }
// }
// obj.myName();

// // ex 5 
// // this object will not work with arrow function bcz arrow function is bound to class.

// const obj = {
//     myAge : 26,
//     myName : () => {
//       console.log(this);
//     }
// }
// obj.myName();



// // ex 6

// let bioData = {
//     myName : {
//         realName : "vinod thapa",
//         channelName : 'thapa technical'
//     },
//     // things to remember is that the myName is the key and the object is act like a value 
//     myAge : 26,
//     getData (){
//       console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
//     }
//   }

//   bioData.getData();


// // call method is used to call the method of another object 
// // or with call(), an object can use a method belonging to another object 

// // But as per other it is simply the way to use the this keyword or another object 






// // **********************************************************************

// // 👉 How JavaScript Works? Advanced and Asynchronous JavaScript

// // **********************************************************************


// // Advanced JavaScript Section

// // 1️⃣: Event Propagation (Event Bubbling and Event Capturing)

// // check html file 


// // 2️⃣: Higher Order Function
// // function which takes another function as an arguments is called HOF 
// // wo function jo dusre function ko as an argument accept krta hai use HOF 


// // 3️⃣: Callback Function
// // function which get passed as an argument to another function is called CBF 
// // A callback function is a function that is passed as an argument to 
// // another function, to be “called back” at a later time. 

// // Jis bhi function ko hum kisi or function ke under as an arguments passed 
// // krte hai then usko hum CallBack fun bolte hai 


// // // we need to create a calculator 

// const add = (a,b) => {
//     return a+b;
// }
// // console.log(add(5,2));

// const subs = (a,b) => {
//     return Math.abs(a-b);
// }
// const mult = (a,b) => {
//     return a*b;
// }

// const calculator = (num1,num2, operator) => {
//   return operator(num1,num2);
// }

// calculator(5,2,subs)

// console.log(calculator(5,2,subs));





// // // Now instead of calling each function indivisually we can call it
// // // by simply using one function that is calculator 

// console.log(calculator(5,6,add));
// console.log(calculator(5,6,subs));
// console.log(calculator(5,6,mult));

// // In the above example, calculator is the higher-order function, 
// // which accepts three arguments, the third one being the callback.
// // Here the calculator is called the Higher Order Function because it takes
// // another function as an argument 

// // and add, sub and mult are called the callback function bcz they are passed 
// // as an argument to another fucntion 

// // InterView Question 
// // Difference Between Higher Order Function and Callback Function ?


// // 🏁🏁Asynchronous JavaScript


// // 6️⃣:   Synchronous JavaScript Prog 

// 1work = 10min
// 2work = 5s

// const fun2 = () => {
//   console.log(`Function 2️⃣ is called`);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }

// fun1();


// Asynchronous JavaScript Prog 

// const fun2 = () => {
//   setTimeout(()=> {
//       console.log(`Function 2️⃣  is called`);
//   }, 2000);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }

// fun1();


// //👻 What is Event Loop in JavaScript?
// // ppt explain 


// // 5️⃣ Hoisting in JavaScript 

// // we have a creation phase and execution phase.

// // Hoisting in Javascript is a mechanism where variables and functions
// // declarations are moved to the top of their scope before the code execute.

// For Example 👇
// console.log(myName);
// let myName;
// myName = "thapa";

// // How it will be in output during creation phase 

// 1: var myName = undefined;
// 2: console.log(myName);
// 3: myName = "thapa";


// //😲 In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword 
// // instead of var. (The other difference is that variables declared 
// // with let are local to the surrounding block, not the entire function.)



// // 6️⃣ What is Scope Chain and Lexical Scoping in JavaScript? 

// // The scope chain is used to resolve the value of variable names 
// // in JS.

// // scope chain in js is lexically defined, which means that we can 
// // see what the scope chain will be by looking at the code. 

// // At the top, we have the Global Scope, which is the window Object
// // in the browser.

// // Lexical Scoping means Now, the inner function can get access to 
// // their parent functions variables But the vice-versa is not true.


// // For Example 👇

// let a = "Hello guys. "; // global scope

// const first= () => {
//   let b = " How are you?"

//     const second = () => {
//       let c = " Hii, I am fine thank you🙏";
//       console.log(a+b+c);
//     }
//     second();
//     console.log(a+b+c); //I can't use C 
// }

// first();



// // 7️⃣ What is Closures in JavaScript 🤔

// // A closure is the combination of a function bundled together (enclosed) with references 
// // to its surrounding state (the lexical environment). 

// // In other words, a closure gives you 
// // access to an outer function’s scope from an inner function. 

// // In JavaScript, closures are created every time a function is created, at function creation time.

// // For Example 👇

// const outerFun = (a) => {
//     let b = 10;
//     const innerFun = () => {
//       let sum = a+b;
//       console.log(`the sum of the two no is ${sum}`);
//     }
//     innerFun();
// }
// outerFun(5);

// // it same like lexical scoping 

// // One more Example 👇

// const outerFun = (a) => {
//   let b = 10;
//   const innerFun = () => {
//     let sum = a+b;
//     console.log(`the sum of the two no is ${sum}`);
//   }
//   return innerFun;
// }
// let checkClousure = outerFun(5);
// console.dir(checkClousure);

// "use strict"

// let x = "vinod";
// console.log(x);


// //🏁🏁🏁 Back To Advanced JavaScript 




// Currying


// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3); 
// const sum = (a) => { return (b) => { return (c) => { console.log(a + b + c); } } }
// sum(5)(3)(8);





// // 8️⃣: CallBack Hell 

// setTimeout(()=>{
//     console.log(`1️⃣ works is done`);    
//     setTimeout(()=>{
//         console.log(`2️⃣ works is done`); 
//         setTimeout(()=>{
//             console.log(`3️⃣ works is done`);  
//             setTimeout(()=>{
//                 console.log(`4️⃣ works is done`); 
//                 setTimeout(()=>{
//                     console.log(`5️⃣ works is done`);   
//                     setTimeout(()=>{
//                         console.log(`6️⃣ works is done`);    
//                     }, 1000) 
//                 }, 1000)   
//             }, 1000)  
//         }, 1000)   
//     }, 1000)
// }, 1000)



// // **********************************************************************

// // 👉 // 🤩 Bonus JSON 🤩

// // **********************************************************************


// // 👉 JSON.stringify turns a JavaScript object into JSON text and 
// stores that JSON text in a string, eg:

// var my_object = { key_1: "some text", key_2: true, key_3: 5 };

// var object_as_string = JSON.stringify(my_object);  
// // "{"key_1":"some text","key_2":true,"key_3":5}"  

// console.log(object_as_string);

// typeof(object_as_string);  
// "string" 


// // 👉 JSON.parse turns a string of JSON text into a JavaScript object, eg:

// var object_as_string_as_object = JSON.parse(object_as_string);  
// // {key_1: "some text", key_2: true, key_3: 5} 

// typeof(object_as_string_as_object);  
// // "object" 



// // 7️⃣ AJAX Call using XMLHttprequest 

// // how to handled with the events and callback 

// // XMLHttpRequest (XHR) objects are used to interact with servers. 
// You can retrieve data from a URL without having to do a full 
// // page refresh. This enables a Web page to update just part 
// // of a page without disrupting what the user is doing. 
// // XMLHttpRequest is used heavily in AJAX programming.

// const request = new XMLHttpRequest();
// // we need to call the api or request the api using GET method ki, me jo
// // url pass kar kr rha hu uska data chaiye 
// request.open('GET', "https://covid-api.mmediagroup.fr/v1");
// request.send(); // we need to send the request and its async so we need to 
// // add the event to load the data adn get it

// // to get the response 
// request.addEventListener("load", () => {
//     console.log(this.responseText);
// });