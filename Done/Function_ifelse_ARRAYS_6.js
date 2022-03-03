//  Section 6👉 Control Statement (Loops)

// 1. If...else

// let age = prompt('Enter your Age');
// if (age >= 18) {
//     console.log("You can enter the Club");   
// } else {
//     console.log("Go Home Kid");
// }

// Challenge Time 

// write a program that works out whether if a given year is a leap year or not?
// A normal year has 365 days, leap years have 366, with an extra day in February.

// let year= prompt('enter age')
// let leap = year%4

// if (leap==0) {
// console.log('Its Leap Year');
// } else {
//     console.log('Not a leap year');
// }



// What is truthy and falsy values in Javascript?

//There are 6 falsy value  in JS
// i.e  0 , "" , undefined, null, NaN ,false


// Conditional Operator (ternary)
// it is the only operator which takes three operands


// let age = 20;
// console.log((age>=18) ? "you can Vote" : "you cant Vote");


// 2.Switch Statement
// here case value is checked by === that means (case === (new Date().getDay()) )

//instead of multiple if..else  we can use switch statement

// Switch cases use strict comparison (===).
// The values must be of the same type to match.


// let Dates = new Date().getDay() 
// switch (Dates) {
//     case 0:
//         day = "Sunday";
//         console.log(day);
//         break;
//     case 1:
//         day = "Monday";
//         console.log(day);
//         break;
//     case 2:
//         day = "Tuesday";
//         console.log(day);
//         break;
//     case 3:
//         day = "Wednesday";
//         console.log(day);
//         break;
//     case 4:
//         day = "Thursday";
//         console.log(day);
//         break;
//     case 5:
//         day = "Friday";
//         console.log(day);
//         break;
//     case 6:
//         day = "Saturday";
//         console.log(day);
// }

//Break :  it terminates the  current switch/loop when the the conditions is satisfied


// continue : it skips the value at its specific condition 
// var i;
// for (i = 0; i < 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log('number is ' + i );
// }


// 4. While Loop Statement
//  its creates loop that keep executed as long as the condition is true

// var a = 2000
// while (a >1000) {
//     console.log(a);
//     a--
// }

// 5️. Do-While Loop Statement
// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

// var num = -5
// do {
//     console.log(num);
//     num++
// } while (num>20);

// 6️⃣ For Loop 

// for(initialize ; conditon ; increment/decrement)

// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }

// 😀6: challenge Time 🏁
// JavaScript program to print table for given number (8)?

// output :  8 x 1 = 8
// let table = 85
// 
// for (let num = 0; num <= 10; num++) {
//     console.log(`${table} x ${num}  =  ${table * num}`);
// }

/**** Section 5 👉 Functions in JavaScript ****/

// A function is a block of Code designed to perform particular task
// Function can be called as many time as we want

//  1️⃣Function Definition 
// first function is define . it is also called function declaration. function is created by:

// function(keyword) functionname(parameters) {
// }

// function sum() {    //defining function
//         var a = 10, b = 40;
//         let total = a + b;
//         return total
//     }
//     sum()  // // 2️⃣Calling functions//  [function:sum]
//     console.log(sum()); // 50

// 3️⃣ Function Parameter vs Function Arguments 
// Function parameters are the names listed in the function's definition. 

// Function arguments are the  values passed to the function at the time of calling

// function sum(a,b){    // (a,b) are parameters
//     let total = a+b;
//     console.log(total);
// }
// sum(10,20)    // here (10,20) are arguments


//4. Default parameter

// function multi(x=1,y=10) {                     // here (x=1,y=10) are default parameters . when user dont pass any argument they take there default values
//     console.log(x*y);
// }
// multi()



// 🙋‍👨‍🏫 Interview Question 🙋‍👨‍🏫 

// Why Functions? 

// function can be used many time as we want (reuse code)
//use same code with different arguments to get different results

// A function is a group of reusable code which can be called anywhere in your program. This eliminates the need of writing the same code  again and again.
//  DRY => do not repeat yourself


// 4️⃣ Function expressions

// "Function expressions simply means 
// create a function and put it into the variable "

// function sum(x,y) {
//     let total = x+y
//     return total
// }
// let addition = sum(50,20)
// console.log(addition);


// 5️⃣ Return Keyword
// When JavaScript reaches a return statement, 
// the function will stop executing.

// Functions often compute a return value.
// The return value is "returned" back to the "caller"

// function sum(x,y) {
//     let total = x+y
//     return total
// }
// let addition = sum(50,20)
// console.log(addition);

// 6️⃣ Anonymous Function

// let sum = function (x=1){
//     return ("the value is "+ x)
// }
// console.log(sum());
// let a = sum(5)
// console.log(a);

// let Anonymous = function (x,y) {
//             return sum = x+y
// }

// let num1 = Anonymous(30,60)
// let num2 = Anonymous(12, 62)
// console.log(num1>num2);

// 👻 Now It's Time for Modern JavaScript 😍😍 

// 🙏🙏 Features of ECMAScript 2015 also known as ES6 🙏🙏


// 1️⃣ LET VS CONST  vs  VAR
//done in sec 1-5

// let name1 = 'yamin1'
// var name2 = 'yamin2'
// const name3 = 'yamin3'
// function names() {
//     let name4 = 'yamin4'
//     const name5 = 'yamin5'
//     if (true) { const name6 = 'yamin6' }
// }
// console.log(name6);
// names()


// ********************************************************************************************************


/**** Section 7👉 Arrays in JavaScript  ****/

// When we feel like storing multiple values in one variable then 
// instead of var, we will use an Array.

// In JavaScript, we have an Array class, and 
// arrays are the prototype of this class. 


// ********************************************************************************************************


// 1️⃣ Array Subsection 1 👉 Traversal in array✌ 

// let cars = ['lambo', 'BMW', 123, 'buggati', 'toyota', 'nano', 'BMW']
// console.log(cars[cars.length - 1]);
// console.log(cars.length);

// we use for loop to navigate  ( for in & for of)

// for ( let i in cars ){
//     console.log(i);
// }
// for in loop gives only index of each Element

// for (let elements of cars) {
//     console.log(elements);h
// }
// for of loop print every element of the array

// Array.prototype.forEach() 🙋‍♂️
// Calls a function for each element in the array.

// cars.forEach((currelem , index , cars ) => { 
//     console.log(`${currelem} Index at  :  ${index}  : ${cars} `);
// })



// ********************************************************************************************************


// 2️⃣ Array Subsection 2 👉 Searching and Filter in an Array 

// Array.prototype.indexOf() 🙋‍♂️

// Returns the first (least) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element from the 
// 0th index number 

// console.log(cars.indexOf('BMW'));    => 1
// console.log(cars.indexOf('BMWd'));  => -1
// console.log(cars.indexOf("BMW",3)); => it will start BMW from index 3


// ********************************************************************************************************


// Array.prototype.lastIndexOf() 🙋‍♂️

// Returns the last (greatest) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element last to first

// console.log(cars.lastIndexOf("BMW")); => starts search backward output = 5
// console.log(cars.lastIndexOf('bmw'));  => -1


// ********************************************************************************************************


// Array.prototype.includes() 🙋‍♂️

// Determines whether the array contains a value, 
// returning true or false as appropriate.


// console.log(cars.includes("BMW")); => true
// console.log(cars.includes("bmw")); => false


// ********************************************************************************************************

// Array.prototype.find() 🙋‍♂️

// arr.find(callback(element[, index[, array]])[, thisArg])
// Returns the FOUND ELEMENT in the array, if some element in the 
// array satisfies the testing function, or UNDEFINED if not found.
// Only problem is that it return only one element

// let prices = [200, 300, 350, 400, 450, 500, 600];

// let find = prices.find((element, index, prices) => {
//     return element> 1 
// })

// let find = prices.find((elem) => { return elem > 3635450 } ) //undefined
// console.log(find);
// console.log(prices.find((elem) => elem > 1)); //200


// ********************************************************************************************************


// Array.prototype.findIndex() 🙋‍♂️

// let findIndex = prices.findIndex((elem, index, prices) => { return elem > 400 })

// console.log(findIndex);

//  Returns the found index in the array, if an element in the 
// array satisfies the testing function, or -1 if not found.


// ********************************************************************************************************



// Array.prototype.filter() 🙋‍♂️

// Returns a new array containing all elements of the calling 
// array for which the provided filtering function returns true.

// let names = ["yamins", "shaikh", "cow", "fdsrgferfew"]
// let result = names.filter((word) => { return word.length > 3 })
// console.log(result);

// let result = prices.filter((elem) => { return elem > 400 })
// console.log(result);

//Filter method solve the problem of find & findIndex bcoz they both return only one value and filter method returns all the possible values as per the condition


// ********************************************************************************************************

// 3️⃣ Array Subsection 3 👉 How to sort an Array

//returns the sorted array. The default sort order is ascending, built 
//upon converting the elements into strings, 
// then comparing their sequences of UTF-16 code units values.

// let num = [12, 7, 6749, 87463, 9871, 10007,]
// let word = ['yamin', 'shaikh', 'smash', 'ironman']

// console.log(num.sort());
// console.log(word.sort());

// ********************************************************************************************************

// 😀7: challenge Time  🏁

// 1: How to Sort the numbers in the array in ascending (up) and descending (down) order?

// compareFunction	Optional. 
// A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
// function(a, b){return a-b}

// for asecnding order 
// array1.sort(function(a,b){
//     console.log(a,b);
//     if(a>b){
//         return 1;
//         // b comes first and then a 
//     }
//     if(a<b){
//         // a comes first and then b 
//         return -1;
//     }
//     if(a==b){
//         // No changes
//         return 0;
//     }
// });

// for desecnding order 
// array1.sort(function(a,b){
//     console.log(a,b);
//     if(a>b){
//         return -1;
//         // b comes first and then a 
//     }
//     if(a<b){
//         // a comes first and then b 
//         return 1;
//     }
//     if(a==b){
//         // No changes
//         return 0;
//     }
// });

// console.log(array1);








// ********************************************************************************************************


//  sort the array in DESCENDING  order

// // The reverse() method reverses an array in place. 
// // The first array element becomes the last, and 
// // the last array element becomes the first.


// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.reverse());   //['Mango', 'Apple', 'Orange', 'Banana']

// ********************************************************************************************************

// 4️⃣ Array Subsection 4 👉 Perform CRUD


// Array.prototype.push() 🙋‍♂️

// RETURNS THE NEW LENGTH OF ARRAY

// let word = ['a', 'b', 'c', 'd']
// word.push("e");  // will add e to the end of the array 
// console.log(word);  
// console.log(word.push('something'));  //push() return new length of array i.e 6

// ********************************************************************************************************

// Array.prototype.unshift() 🙋‍♂️

// The unshift() method adds one or more elements to the 
// beginning of an array and RERURNS  the new length of the array.

// console.log(word.unshift("e", "f"));
// console.log(word);


// ********************************************************************************************************

// Array.prototype.pop() 🙋‍♂️

// The pop() method removes the last element from an array and RETURNS 
// that element. This method changes the length of the array.

// console.log(word.pop());  // d
// console.log(word);   // [a,b,c]

// ********************************************************************************************************

// Array.prototype.shift() 🙋‍♂️

// The shift() method removes the first element from an array and RETURNS 
// that removed element. This method changes the length of the array.

// console.log(word.shift()); // a
// console.log(word);      // ['b', 'c', 'd']


// ********************************************************************************************************

//SPLICE

// Adds and/or removes elements from an array.

// 😀8: challenge Time 🏁

// Array.prototype.splice() 🙋‍♂️
// Adds and/or removes elements from an array.

// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method?
// 3: update march to March (update)?
// 4: Delete June from an array?


// const months = ['oct', 'march', 'April', 'june', 'july'];

// let sol1 = months.splice(months.length  , 0 , "Dec")
// console.log(months);
// console.log(sol1);

// sol2 => splice returns  a NEW array of deleted items without changing the original array

// const find = months.indexOf("march")
// if (find != -1) {
//     let sol3 = months.splice(find, 1, "MARCH")
//     console.log(sol3);
//     console.log(months);
// }

// let indexOfMonth = months.indexOf('April')
// if (indexOfMonth != -1) {
//     let sol4 = months.splice(indexOfMonth , 1)
//     console.log(sol4);
//     console.log(months);
// }


// ********************************************************************************************************


// Array.prototype.map() 🙋‍♂️

// const arr = [2, 8, 9, 7, 3,]

// RETURNS a new array containing the results of calling a 
// function on every element in this array. 

// MAP is chainable method . 
//MAP RETURN NEW ARRAY WITHOUT TOUCHING ORIGINAL ARRAY ,,, WHILE forEach mutated original array.

// let newArr = arr.map((currElem, index, array) => {
//     return `Index no = ${index} and the value is ${currElem} belong to ${array} `
// });


// let foreach = arr.forEach((elem, index, array) => {
//     return `Index no = ${index} and the value is ${elem} belong to ${array} `
// })


// console.log(newArr);  //return new array without muting original array
// console.log(foreach); //undefined 
// console.log(arr);  



// ********************************************************************************************************


// 😀9: challenge Time 🏁

//  1: Find the square root of each element in an array?
//  2: Multiply each element by 2 and return only those 
//     elements which are greater than 10?

//Sol 1 :

// let arr = [25, 36, 49, 64, 81, 15, 28];
// let Sqrt = arr.map((curElem) => {
//     let sqroot = Math.sqrt(curElem)
//     sqroot = Math.floor(sqroot)
//     return sqroot;
// })
// console.log(Sqrt);


//Sol 2 :

// let arr = [2, 10, 13, 20, 3, 4, 6, 8];

// let sol2 = arr.map((curElem) => { return  curElem * 2}).filter((curElem)=>{ return  curElem > 10})

// let sol2 = arr.map((curElem) => curElem * 2).filter((curElem) => curElem > 10)
// console.log(sol2);


// ********************************************************************************************************

// 👉 Reduce Method 


// flatten an array means to convert the 3d or 2d array into a 
// single dimensional array 

// let reduce = arr.reduce((accumulator , current , index ,array) => {   code here  }) 

// let sum = [5, 9, 4, 7, 9, 6, 1, 3]

// let reduce = sum.reduce((accum, currElem, index, array) => {
//     return   accum += currElem

// })
// console.log(sum);
// console.log(reduce);


// *****************************************************


// How to fatten an array 
// converting 2d and 3d array into one dimensional array 

// const arr = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_5', 'zone_6'],
//     ['zone_7', ['zone_7', ['zone_7', 'zone_8']]]
// ];

// let flatArr = arr.reduce((accum ,curr) => {
//     return  accum.concat(curr)
// })

// console.log(flatArr);

// ES6 MEthod

// let flat = arr.flat(Infinity)
// console.log(flat);


// for in
// for of
// for each
// indexof
// lastindexof
// includes
// find
// findIndex
// filter
// sort
// push
// unshift
// pop
// shift
// splice (CRUD)
// map
// reduce
// flat
