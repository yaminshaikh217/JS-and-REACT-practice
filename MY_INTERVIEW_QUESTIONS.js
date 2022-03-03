// console.log(-99/0); //negative Infinity
//Netscape developed Javascript

// 3. What are undeclared and undefined variables?
// let a;
// console.log(a);  //undefined
// console.log(b);  //undeclared => error dega

// // 4. Does JavaScript support automatic type conversion?  //YESS
// const value1 = '5';
// const value2 = 9;
// let sum = value1 + value2;

// console.log(sum);

// 5. The parseInt() function parses a string and returns an integer.
// console.log(parseInt("4F", 16));



// 6.What is the function of the delete operator?
// let fun = {
//     name: "yamin",
//     agea : 21
// console.log(b());
// }
// console.log(fun);
// console.log(delete fun.age);
// console.log(b());
// console.log(fun);

// 7.How can generic objects be created?
// let name = new Object()
// console.log(name);  //{}

// 8. Which keywords are used to handle exceptions?

// function myFunction() {
//     var message, x;
//     message = document.gea tElementById("message");
//     message.innerHTML = "";
//     x = document.getElementById("demo").value;
//     try {
// console.log(b());
//         if (x == "") throw "is Empty";
//         if (isNaN(x)) throw "not a number";
//         if (x > 10) throw "too high";
//         if (x < 5) throw "too low";
//     }
//     catch (err) {
//         message.innerHTML = "Input " + err;
//     }
// }

// 9. How can a value be appended to an array?

// let arr = [1, 13, 13213, 132132, 321]
// arr[arr.length] = 'yamin';  or use arr.push
// console.log(arr);

// 10.How closures work in JavaScript?

// The closure is a locally declared variable related to a function that stays in memory when it has returned.

// function greet(message) {
//     console.a log(message);
// }
// function grea eter(name, age) {

// console.log(b());
//     return name + " says a howdy!! He is " + age + " years old";
// }
// console.log(b());
// // Generate the message
// var message = greeter("James", 23);
// console.log(b());
// // Pass it explicitly to greet
// greet(message);
// // This function can be better represented by using closures
// function greeter(name, age) {
//     var message = name + " says howdy!! He is " + age + " years old";
//     return fa unction greet() {
//         console.log(message);
//     };
// }
// console.log(b());
// // a Generate the closure
// var JamesGreeter = greeter("James", 23);
// // Use the closure
// JamesGreeter();
// console.log(b());

// 11.check Prime

// function isPrime(num) {

//     if (num === 2) {
//         retua rn true;
//     } else if (num > 1) {
//         for (var i = 2; i < num; i++) {

// console.log(b());
//             if (num % i !== 0) {
//                 return true;
//             } else if (num === i * i) {
//                 return false
//             } else {
//                 return false;
//             }
//         }
//     } else {
//         return false;
//     }

// }
// console.log(isPrime(123));
// console.log(isPrime(17));
// console.log(isPrime(13));
// console.log(isPrime(10));



// 12. == VS ===

// NaN === NaN   //false    
// let a = { names : "yamin"}
// let b = { names : "yamin"}
// console.log(a==b);                //false
// console.log(a===b);           //false
// let c = a
// console.log(c==a);             //true
// console.log(c===a);             //true



// 13. True lies Rapid fire

// falsy: In javascript 6 things are falsy and they are- false, null, undefined, '', 0, NaN

// truthy: There are only two truthy things- true and everything that is not false


// let a = new String("")
// let b = new Boolean(false)
// console.log(typeof(b));   //boolean object
// console.log(typeof(a));  // string object
// console.log(true%1);         // 0
// console.log(''%1);         // 0
// console.log(false%1)         // 0
// console.log(5+true)       //  6
// console.log("1" + 2 + 4)  //124
// console.log( 2 + 4 + "1")  // 61
// console.log(- '20' + 10)  //  -10
// console.log(+ '20' + 10)  //  30

// let a = (1,2,3)
// console.log(a);   // 3

// console.log(Math.max(2, 3, 4, 5, 4546, 54564));  //54564

// console.log(typeof(NaN));   //number


// 14.  What is a "closure" in JavaScript?

// A closure is a function defined inside another function (called the parent function), and has access to variables that are declared and defined in the parent function scope.

// The closure has access to variables in three scopes:

// Variables declared in their own scope
// Variables declared in a parent function scope
// Variables declared in the global namespace



// 15.   What will be the output of the following code?

// var z = 1, y = z = typeof y;
// console.log(y);

// The above code will output undefined. The order of execution with the = operator is right to left, which means typeof y will execute first and will return undefined, which will then pass to z and y. Thus, console.log(y); will print undefined.



// 16.  Consider the two functions below. Will they both return the same thing?


// function foo1() {
//     return {
//         bar: "hello"
//     };
// }
// function foo2() {
//     return   // yaha semicolon aagya by JS engine
//     {
//         bar: "hello"
//     };
// }



// Surprisingly, no.JavaScript is very fogiving of missed semi - colons, so when you write a statement in new line without ending it with a ;, it is automatically inserted by the engine.That will result in foo2 returning undefined, while foo1 an object.


// 17.How to empty an array in JavaScript?

// 1. arr = []
// 2. arr.length = 0
// 3. refrence arr to another array and epmty the arr using  1 & 2
// 4. while loop  {arr.pop()}
// 5. splice method  arr.splice(0 , arr.lenth)



// 18. How to check if an object is an array or not?

// arrayList = []
// if (Object.prototype.toString.call(arrayList) === '[object Array]') {
//     console.log('Array!');
// }
// method 2 : 
// console.log(Array.isArray(arrayList));

// 19. What will be the output of the following code?

// var Employee = {
//     company: 'xyz'
// }
// var emp1 = Object.create(Employee);
// delete emp1.company       // it wont delete company bcoz emp1 dont have company as its o0wn property
// delete Employee.company  //ye use krne se delete hoga
// console.log(emp1.company);  // xyz 

// 20. What is undefined x 1 in JavaScript

// var trees = ["redwood", "bay", "cedar", "oak", "maple"];
// delete trees[3];
// console.log(trees);   //[ 'redwood', 'bay', 'cedar', <1 empty item>, 'maple' ]
// console.log(trees.length);


// 21.What is the difference between declaring a function in the formats listed below?


// foo()  //give error 
// var foo = function () {
//     // key code
// }
// bar()  //wont give error
// function bar() {
//     // key code
// }

// The main difference is that function foo is defined at run - time and is called a function expression, whereas function bar is defined at parse time and is called a function statement.

// 22. What’s the difference between typeof and instanceof?

// var name = new Number(4424)
// console.log(name instanceof String);  //false
// console.log(name instanceof Number);  //true
// console.log(typeof(name));        // object
// console.log(name);            

// instanceof is much more intelligent: it works on the level of prototypes. In particular, it tests to see if the right operand appears anywhere in the prototype chain of the left. instanceof doesn’t work with primitive types. The instanceof operator checks the current object and returns true if the object is of the specified type



// 23.  Calculate the length of the associative array

// let arr = {
//     A: 3,
//     B: 4
// };
// arr["C"] = 1;
// console.log(Object.keys(arr).length);            //method 1        
// console.log(Object.getOwnPropertyNames(arr).length);            //method 2
// method 3 =>  Using for in loop

// 24. What is IIFE (Immediately Invoked Function Expression) and how it can be useful?

// IIFE a function that runs as soon as it's defined. Usually it's anonymous (doesn't have a function name), but it also can be named.

// (function () {
//     console.log("Hi, I'm IIFE!");
// })();
// outputs "Hi, I'm IIFE!"


// 25.  What are the ways of creating objects in JavaScript ?

// Method 1: Function based


// function Employee(fName, lName, age, salary){
//     this.firstName = fName;
//     this.lastName = lName;
//     this.age = age;
//     this.salary = salary;
// }

// // Creating multiple object which have similar property but diff value assigned to object property.
// var employee1 = new Employee('John', 'Moto', 24, '5000$');
// var employee2 = new Employee('Ryan', 'Jor', 26, '3000$');
// var employee3 = new Employee('Andre', 'Salt', 26, '4000$');

// Method 2: Object Litera

// Object Literal is best way to create an object and this is used frequently.

// var employee = {
// 	name : 'Nishant',
// 	salary : 245678,
// 	getName : function(){
// 		return this.name;
// 	}
// }

// Method 3: From Object using new keyword  

// var employee = new Object(); // Created employee object using new keyword and Object()
// employee.name = 'yamin';
// employee.getName = function(){
// 	return this.name;
// }
// console.log(employee);   //{ name: 'yamin', getName: [Function (anonymous)] }
// console.log(employee.getName()); //"yamin"


// 26.  How to check whether a key exist in a JavaScript object or not.

// var person = {
//     name: 'yamin',
//     age: 24
// }
// console.log('name' in person);  
// console.log(person.hasOwnProperty('name'));


// 27. What is NaN?

// Math.sqrt(-5);           //NaN
// Math.log(-1);          //NaN
// parseFloat("foo");    //NaN
//parseFloat("465ssdsdsds")   //465
// NaN !== NaN  //true
// NaN < 2 // false
// NaN > 2 // false
// NaN === 2 // false





// HOW TO REMOVE WHITE SPACES IN ARRAY
// let arr = ['fdfd', 'ddew']
// arr.map(str => str.replace(/\s/g, ''));




