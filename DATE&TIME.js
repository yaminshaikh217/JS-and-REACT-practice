/**** Section 8👉 Date and Time in JavaScript ****/

// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number  that represents milliseconds since 1 January 1970 UTC.


// 👉 Creating Date Objects

// There are 4 ways to create a new date object:

//  1 . new Date()
// 2. new Date(year, month, day, hours, minutes, seconds, milliseconds)
//3.  new Date(milliseconds)
// // we cannot avoid month section 
// 4. new Date(date string)

// ******************************************************************************

// new Date() 🙋‍♂️

// new Date() its called a constructor

// let date = new Date()    // 2021-09-09T05:33:38.373Z  => in terminal
// let date1 = Date()      //Thu Sep 09 2021 11:03:38

// console.log(new Date().toLocaleString());   //   9/9/2021, 11:06:03 am
// console.log(new Date().toString());        //  Thu Sep 09 2021 11:07:05 GMT+0530  

// ******************************************************************************

// Date.now() 🙋‍♂️

//RERURNS  Total milliseconds elapsed since JANUARY 1 , 1970

// console.log(Date.now());

// ******************************************************************************

// new Date(year, month, day , hours , minutes ,secoonds , millisec) 🙋‍♂️
//In this method Month  value is mandatory 
// Note : In JS months start from 0 to 11

// let date = new Date(2021)
// console.log(date.toLocaleDateString());    // Date dega sirf
// console.log(date.toLocaleTimeString());    // time dega sirf

// ******************************************************************************

// new Date(dateString) 🙋‍♂️

// let date = new Date(' May 23 ,  2020 11:20:12')
// console.log(date.toLocaleString());

// ******************************************************************************

// new Date(milliseconds) 🙋‍♂️

// let date = new Date(16649354866)
// console.log(date);


// *********************************************************************************************************************************************

//👉 DATES Method

// ALL GET METHODS 

// let date = new Date()
// console.log(date.getDate());      //  11 
// console.log(date.getDay());       // 6 ( saturday)
// console.log(date.getMonth());     //  8 (september) => 0 to 11
// console.log(date.getFullYear());  // 2021


// // how to set the indivisual date  ALL SET METHODS  => they all gives milliseconds

// console.log(date.setFullYear(2021 , 8, 17));  //  (year , month , day)
// console.log(date.setMonth(8));
// console.log(date.setDate(7));


// *****************************************************************************************

//👉 Time Methods  ALL GET METHODS

// let time = new Date();

// console.log(time.getTime());  // give milliseconds since 1 JAN , 1970
// console.log(time.getHours());    // 11 baje
// console.log(time.getMinutes());  // 55 min
// console.log(time.getSeconds());  
// console.log(time.getMilliseconds());


// // how to set the indivisual Time  (SET METHODS) 

// console.log(time.setHours(12 , 17 , 21,31));
// console.log(time.setHours(1));
// console.log(time.setMinutes(27));
// console.log(time.setSeconds(17));
// console.log(time.setMilliseconds(31));


// **********************************************************

// // Practice Time 

// console.log( new Date().toLocaleTimeString()); // 11:18:48 AM
// console.log( new Date().toLocaleDateString());  // 11/16/2015
// console.log( new Date().toLocaleString());    // 11/16/2015, 11:18:48 PM