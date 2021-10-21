
// var _name = "ajsdj"
// var $name= 111
// var name22 = 1212
// console.log(_name);
// console.log($name);
// console.log(name22);

//section 4 Data type 


// Boolean type
// Null type
// Undefined type
// Number type
// BigInt type
// String type


// name = 'yamin'
// age = 21
// boolean = true
// var a 
// console.log(typeof(a));
// console.log(a);
// console.log( typeof(name));
// console.log( typeof(age));
// console.log( typeof(boolean));

//practice

// console.log(7 + '9');
// console.log('yamin' +  " Shaikh");
// console.log('    '+ 9);  
// console.log('yamin'- 'shaikh');  //NaN

// console.log(true+ true);  // true = 1  and false = 0
// console.log(true+ false);
// console.log(true- false);
// console.log(false+ true);
// console.log(false- true);
        
// Null VS undefined

// let zero = null;
// console.log(zero);
// console.log(typeof(zero)); //object its a Bug // also null means it will never have a vale i.e zero 
//null means zero 0

// let myName    // undefined means initially it dont have any value but later on it will have some value assigned by the user  #standBy
// console.log(typeof(myName));
// myName= '4487'
// console.log(typeof(myName));


//NaN?  Not a Number
// let num= 65454;
// console.log(isNaN(num));  //false
// let Name='yamin'
// console.log(isNaN(Name));  //true


// console.log(NaN===NaN);  //false 
// console.log(isNaN===isNaN); //true


// console.log(NaN === NaN )  
// console.log(Number.NaN === NaN); 
// console.log(isNaN(NaN))  
// console.log(isNaN(Number.NaN))  
// console.log(Number.isNaN(NaN))

  //var vs let vs const

  //** var is globally scoped and blocked scope
  //let and const are only blocked scoped 
  //var can be updated and re-declared
  // let can only be updated
  // const cant be updated nor re-declared, const should have some value initialized
// var is initializd as undefined
// all three of them are hoisted at the top of their scope

// var a
// let b 
// const c = 'Yamin'
// b =787
// b =c
// console.log(b);
// console.log(a);
// console.log(c);


//Operators Section

// 1.Assignement operator (=,==,===)
// let x = 98;
// let operand operator(= or + or - or * or / or %) operand
// let y= 2;
// x = x+y;
// console.log(x);

// x= 77
// y = '77'
// console.log(x==y);
// console.log(x===y);

// 2. Arithmetic operator (+,-,*,/,%)
// console.log(5-55);
// console.log(20/10);
// console.log(5%2);  //gives remainder i.e 1

// 3. increment and Decrement (++x,x++,x--,--x)

// let num = 10

// let newnum= num++ + 5   // Postfix increment operator means the expression is evaluated 
// first using the original value of the variable and then the variable is incremented(increased).

// let num1= ++num + 5   //prefix (++x) first it will increment the number 

// console.log(num);  //11
// console.log(newnum);  //15
// console.log(num1);  // 16


// let num = 10
// let newnum= num-- + 5
// let num1= --num + 5 

// console.log(num);  //9
// console.log(newnum); //15
// console.log(num1);  //14


// 4. Comparison operator
// A comparison operator compares its operands and 
//  returns a logical value based on whether the comparison is true.

// let x = 12
// let y= 2

// Equal (==)
// console.log(x==y);

// Strictly Equal (===)
// console.log(x===y);

// Not Equal (!=)
// console.log(x!=y);

// Greater than (>)
// console.log(x>y);

// less than (<)
// console.log(x<y);

//  Greater than or equal (>=)
// console.log(x>=y);

 // Less than or equal (<=)
//  console.log(x<=y);

// console.log(55 == '55');
// console.log(55 ==='55');

// 5.Logical operators ( && , || , !)(AND , OR , NOT)
// Logical operators are typically used with Boolean (logical) values ,they return a Boolean value.

// 1. Logical AND if all conditions are true than only it will return true

// let c = 12
// let d = 32
// console.log(c<d && c>0 && d>989);

// 2. Logical OR if any one condition is true than it return true

// let c = 12
// let d = 32
// console.log(c<d || c>332 || d>989);

// 3. Logical NOT it will make true value to false and false to true

// let a = 12
// let b = 1233
// console.log(!(a<b || b>0));
// console.log(!false);

// 6. String Concatenation(operators) (+)
 
// console.log('shaikh'+ ' yamin');
// let name= 'yamin'
// console.log(name + ' Shaikh');
// console.log('yamin' - 'shaikh');  //NaN
// console.log('yamin'- 2);   //NaN
// console.log('yamin' + 5);  //yamin5

// challenge Time
// console.log(3**3); //27  3*3*3
// console.log(10**2);  //100  10*10

// Write a program to swap two numbers?

// let a = 13
// let b = 5
// // output b= 13 a= 5

// let c = a
// a = b
// b = c
// console.log(a);
// console.log(b);

// Write a program to swap two numbers without using third variable?

// let a = 13
// let b = 7
//  output a = 7 b =13

// a = a+b  //20
// b = a-b  //13
// a= a-b   //7
// console.log(a);
// console.log(b);

// Interview Question
// What is the Difference between == vs === ?

// let num = 12;
// let string = '12'
// console.log(typeof(num));
// console.log(typeof(string));
// console.log(num == string); // it checks only value i.e 12 and '12'
// console.log(num === string); // it checks value and data type also









