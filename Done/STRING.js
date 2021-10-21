/**** Section 7👉 Strings in JavaScript  ****/

// A JavaScript string is zero or more characters written inside quotes.

// JavaScript strings are used for storing and manipulating text.
// You can use single or double quotes

// Strings can be created as primitives, 
// from string literals, or as objects, using the String() constructor

// let str = 'yamin'
// let str1 = "yamin"
// let str2 = new String("yamin")


// String.prototype.length 🙋‍♂️

// let string = "a string"
// console.log(string.length);

// 👉 Escape Character

// let esc = "yami\\n \'shaikh\'   \"hello\"   "
// console.log(esc);  =>  yami\n 'shaikh'  "hello"
//   (\\   => \  ) ( \'  => '  ) ( \""  => "")

// ******************************************************************************

// 👉 Finding a String in a String

// String.prototype.indexOf(searchValue [, fromIndex]) 🙋‍♂️

// let str = "Yamin Shaikh"
// let find = str.indexOf("a",2)   //8
// console.log(find);

// The indexOf() method returns the index of (the position of) the first
//  occurrence of a specified text in a string
// *********************************************************
// // String.prototype.lastIndexOf(searchValue [, fromIndex]) 🙋‍♂️
// // Returns the index within the calling String object of the 
// // last occurrence of searchValue, or -1 if NOTTT found.

// console.log(str.lastIndexOf('a',6));  //1

// ****************************************************************************

// 👉 Searching for a String in a String

// String.prototype.search(regexp) 🙋‍♂️

// The search() method cannot take a second start position argument.

// console.log(str.search("min"));  //gives index 2   ,, -1 if not found

// ******************************************************************************

// 👉 Extracting String Parts

// There are 3 methods for extracting a part of a string:

// slice(start, end) => end Not included
// substring(start, end)
// substr(start, length)

// The slice() Method 🙋‍♂️

// slice() extracts a part of a string and RETURNS the extracted part 
// in a NEWWW string.

// let str = "Javascript ,Html , abc"

// let slice = str.slice(0,-1)  // => it takes NEGATIVE VALUE TOO
// console.log(slice);  // => Javascript ,Html , ab 
// console.log(str);

// Note: The original array will not be changed.

// **************************************************************************

// 😀11: challenge Time 🏁

// Display only 280 characters of a string like the 
// one used in Twitter?


// let Twitter  = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? ";

// let myActualTweet = Twitter.slice(0,280)
// console.log(myActualTweet);  
// console.log(myActualTweet.length);  //280
// console.log(Twitter.length);   //459

// ************************************************************************

// The substring() Method 🙋‍♂️

// substring() is similar to slice().
// The difference is that substring() CANNOT accept 
// negative indexes.

// let str = "Javascript ,Html , abc"
// let substring = str.substring(0,10) // Javascript

// let substring = str.substring(10,-2) // Javascript => bcoz  If we give negative value then the characters are  counted from the 0th pos 

// console.log(substring);

// ************************************************************************

// The substr() Method 🙋‍♂️

// substr() is similar to slice().
// The difference is that the second parameter specifies the  length of the extracted part

// let str = "Javascript,Html,abc"
// let substr = str.substr(0, 3)  // Jav
// let substr = str.substr(-5)   // => l,abc  
// console.log(substr);

// ************************************************************************

// 👉 Replacing String Content() 
// String.prototype.replace(searchFor, replaceWith) 🙋‍♂️

// let Bio = " yamin shaikh here yamin"

// let repeat = Bio.repeat(2)  // => it will repeat Bio 2 times
// let replace = Bio.replace("yamin" , 'YAMIN')
// let replaceAll = Bio.replaceAll("yamin" , "dw")
// console.log(replace);
// console.log(replaceAll); // works in browser not in terminal


// It returns a NEW string.
// By default, the replace() method replaces only the first match. its case sensitive

// ************************************************************************

//👉 Extracting String Characters

// charAt(position)
// charCodeAt(position)
// Property access [ ]


// The charAt() METHOD 🙋‍♂️

// it dont take NEGATVE VALUE

// let str = "helo there";

// let charAt = str.charAt(1)
// console.log(charAt);   // => e

// ************************************************************************

// The charCodeAt() Method 🙋‍♂️


// let str = "helo there";
// let charCodeAt = str.charCodeAt(1)
// console.log(charCodeAt);  // gives character code of e => 101


// The charCodeAt() method returns the unicode of the 
// character at a specified index in a string: (an integer between 0 and 65535).
// The Unicode Standard provides a unique number for every 
// character, no matter the platform, device, application, 
// or language. UTF-8 is a popular Unicode encoding which
//  has 88-bit code units.


// ************************************************************************

// 😀12: challenge Time 🏁

// Return the Unicode of the last character in a string

// let str = "helo there"
// let lastCode = str.charCodeAt(str.length-1)
// console.log(lastCode);

// Property Access []

// let str = "helo there"
// console.log(str[0]);   // h

// ************************************************************************

//👉  Other useful methods 

// let nam = "Yamin"
// let lname = "Shaikh"

// console.log(nam.toUpperCase());
// console.log(nam.toLowerCase());
// console.log(nam.concat(" ", lname));

// let triming = "                hello           hii          !!"
// console.log(triming.trim())

// ************************************************************************

// Converting a String to an  ARRAY

// A string can be converted to an array with the split() method

// let str = " a , b , c , d "

// console.log(str.split(","));       // Split on commas
// console.log(str.split(" "));       // Split on spaces
// console.log(str.split(""));       // Split on pipe


