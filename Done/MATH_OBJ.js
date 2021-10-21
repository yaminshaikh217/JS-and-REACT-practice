/**** Section 9👉 Math Object in JavaScript ****/

// The JavaScript Math object allows you to perform mathematical tasks on numbers.

// console.log(Math.PI);  // 3.14


// Math.round() 🙋‍♂️
// returns the value of x rounded to its nearest integer

// console.log(Math.round(10.56));    //  11
// console.log(Math.round(10.4565));  // 10


// Math.pow() 🙋‍♂️
// Math.pow(x, y) returns the value of x to the power of y

// console.log(Math.pow(3,3));  //27

// console.log(Math.sqrt(4));  // 2



// Math.abs() 🙋‍♂️
// Math.abs(x) returns the absolute (positive) value of x

// console.log(Math.abs(-15.565));  // 15.565

// Math.ceil() 🙋‍♂️

//  Math.ceil(x) returns the value of x rounded up to its nearest integer

// console.log(Math.ceil(11.1));  // 12


// Math.floor()  🙋‍♂️

// Math.floor(x) returns the value of x rounded down to its nearest integer

// console.log(Math.floor(12.999));  //  12


// Math.min() 🙋‍♂️

// Math.min() can be used to find the lowest value in a list of arguments

// console.log(Math.min(13,64,-456,798,-798998));  // gives the minimum number -798998

// Math.max() 🙋‍♂️

// Math.max() can be used to find the highest value in a list of arguments

// console.log(Math.max(13,64,-456,798,-798998));  // 798


// Math.random() 🙋‍♂️

// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)

// console.log(Math.floor(Math.random() * 10) );  // generate number from 0 to 9

// let i = 0
// while (i < 20) {
//     console.log(Math.floor(Math.random() * 10));
//     i++;
// }


// Math.trunc()  🙋‍♂️

// The trunc() method returns the integer part of a number

// console.log(Math.trunc(4.99));   // 4 
// console.log(Math.trunc(-456.99))  // -456


// Practice Time 

// if the argument is a positive number, Math.trunc() is equivalent to  Math.floor(),

// console.log(Math.trunc(7.99));  // 7  => work as floor()

// otherwise Math.trunc() is equivalent to Math.ceil().

// console.log(Math.trunc(-12));  // 12  =>  works as ceil()    