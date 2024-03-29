// for declaring variables - var, let, const 

// 2 types of writing variable : a) How to write/create - declare; b) how to use - initialize

// Declaration... 
var x; var y; var z;
var x1;
var x2;
var x3;
var x2, y2, z2;

// console.log(x, y, z, x1, x2, x3, y2, z2);  // undefined...


// var - keyword; x,y,z, x1, x2, x3, x2, y2, z2 - different variables..

// initialize 
var a; a = "Maggi1";
var b; b = "Maggi2";
var c; c = "Maggi3";
// console.log(a, b, c);


var a = "Maggi4"; // Dynamic Initialization...


// to write values - Fixed (Literails); Variable(vlc - var, let, const) 
// Fixed = Numbers, String 

// console.log(10, "Harsh");

// keyword             variable                value
// var                 firstName        =        "Harsh"
// var                 fN              =         "Harsh"


// var harsh; harsh1; harsh_1; harsh$1; 
// var harsh2; _harsh; $harsh; 
// var 2harsh - wrong..
// var Harsh, harsh 
// var function;





// Difference between var, let & const - a) Redeclare/Reassign, b) Scope, c) Hoisting..


// var sport1;  // Declare - undefined
// sport1 = "Cricket"  // Initialize
// var sport2 = "Football"  // Dynamic Initialize [Declare + Initialize]


// a] Redeclare/Reassign =>

// var - Redeclare, Reassign - Both Works
var sports = "Cricket"
// console.log(sports);

var sports = "Football";   // Redeclare
sports = "Badminton"       // Reassign
// console.log(sports);



// let - Redeclare(Can't work); Reassign(work)
let sports1 = "Cricket"
// let sports1 = "Football";   // Redeclare
sports1 = "Badminton"       // Reassign
// console.log(sports1);


// const - Redeclare / Reassign(Can't work);
const sport2 = "Cricket"
// const sport2 = "Football";
// sport2 = "Badminton";
// console.log(sport2);



// b) hoisting - var... 

// console.log(sport5);

var sport5 = "Cricket"
// let sport5 = "Cricket";
// const sport5 = "Cricket"


// c) Scope - block, function, global(parent)...

// 3 - GS(Global Scope - var, let & const, [FS , BS]);
// FS(Function Scope - var);    func f1(){}
// BS(Block Scope - let & const);    {}


var GS1 = "Global scope with var";
let GS2 = "Global scope with let"
const GS3 = "Global scope with const";

// console.log(`Global Scope outside function or block -->
// Var Keyword => ${GS1};
// Let Keyword => ${GS2};
// Const Keyword => ${GS3};`
// );


// block scope - let & const doesnt support... 
if (true) {
    // console.log(`Global Scope inside block -->
    // Var Keyword => ${GS1};
    // Let Keyword => ${GS2};
    // Const Keyword => ${GS3};`
    // );

    var BS1 = "Block scope with var";
    let BS2 = "Block scope with let"
    const BS3 = "Block scope with const";

    // console.log(`Block Scope inside block -->
    // Var Keyword => ${BS1};
    // Let Keyword => ${BS2};
    // Const Keyword => ${BS3};`
    // );
}

// console.log(`Block Scope outside block with var-->
// Var Keyword => ${BS1};`
// );

// console.log(`Block Scope outside block -->
// Var Keyword => ${BS1};
// Let Keyword => ${BS2};
// Const Keyword => ${BS3};`
// );



function f2() {
    // console.log(`Global Scope inside function -->
    // Var Keyword => ${GS1};
    // Let Keyword => ${GS2};
    // Const Keyword => ${GS3};`
    // );


    var FS1 = "Function scope with var";
    let FS2 = "Function scope with let"
    const FS3 = "Function scope with const";

    // console.log(`Function Scope inside function -->
    // Var Keyword => ${FS1};
    // Let Keyword => ${FS2};
    // Const Keyword => ${FS3};`
    // );

}
var function1 = f2();


// console.log(`Function Scope outside function -->
//     Var Keyword => ${FS1};
//     Let Keyword => ${FS2};
//     Const Keyword => ${FS3};`
//     );


// Assignment operator:-   (=)

let q = 15;
// console.log(q);

/* JavaScript Arithmetic Operators */

let num1 = 5, num2 = 10, num3 = 2;

let result = num1 + num2;
let result1 = num2 - num1;
let result2 = num1 * num2;
let result3 = num1 ** num3;
let result4 = num2 / num1;
let result5 = num1 % num3;
// console.log(`${result},${result1},${result2},${result3},${result4},${result5}`)


/*  Postfix & Prefix operators:- */

// Postfix

let digit1 = 5;
let r1 = digit1++;  // post fix increment
let r2 = ++digit1;  // pre fix increment
let r3 = digit1--;  // post fix decrement
let r4 = --digit1;  // pre fix decrement
// console.log(`Postfix increment => ${r1} , Prefix increment =>  ${r2}, Postfix decrement =>  ${r3} , Prefix decrement =>  ${r4}`);


// JavaScript Assignment Operators:-

let d1 = 15, d2 = 20, d3 = 25, d4 = 30, d5 = 33, d6 = 10;
// d1 += 5;          
// d2 -= 5;         
// d4 *= 5;  
// d3 /= 5;  
// d5 %= 5;  
// d6 **= 2;  
// console.log(`${d1} , ${d2} , ${d4} , ${d3} , ${d5} , ${d6}`)


/* JavaScript Comparison Operators */

let c1 = 5, c2 = 10, c3 = 15, c4 = "5";
//   let t = c1 == c4;      
//   let t1 = c1 === c4;        
//   let t2 = c1 != c2;      
//   let t3 = c1 !== c4;     
//   let t4 = c1 > c2;        
//   let t5 = c1 < c3;       
//   let t6 = c1 >= c3;       
//   let t7 = c2 <= c1;       
//   console.log(`${t} , ${t1} , ${t2} , ${t3} , ${t4} , ${t5} ,  ${t6} , ${t7}`)


/* JavaScript Logical Operators */

let t4 = c1 > c2 && c1 < c2;
let t5 = c1 > c2 || c1 < c2;
let t6 = !(c1 > c2);
// console.log(`${t4} , ${t5} , ${t6}`)


/*if, else, and else if Conditions*/


//  if else condition:-

// var contri = 500;
// if (contri > 500) {
//     console.log(`I had money, I will  give my money.`);
// } else {
//     console.log(`Else - My friend will give my money.`);
// };

//  if else if else condition:-

// var contri = 250;
// if (contri >= 500) {
//     console.log(`I had money, I will give my money.`);
// } else if (contri >= 250) {
//     console.log(`Else if -  So half money i will give.`);
// }
// else {
//     console.log(`Else - My friend will give my money.`);
// };

/* Switch Condition */


// let ranks1 = 2;

// switch (ranks1) {
//     case 0:
//         console.log(`Rank1 => Football is best`);
//         break;
//     case 1:
//         console.log(`Rank1 => Cricket is best`);
//         break;
//     case 2:
//         console.log(`Rank1 => Badminton is best`);
//         break;
//     case 3:
//         console.log(`Rank1 => Hockey is best`);
//         break;
//     case 4:
//         console.log(`Rank1 => Chess is best`);
//         break;
//     case 5:
//         console.log(`Rank1 => Carrom is best`);
//         break;
//     default:
//         console.log(`Rank1 => Other games are best but not in top 5 like - Ludo, Kabaddi, Golf....`)
// }


// JavaScript For Loop for number:-

const n = 10;

for (let i = 1; i <= n; i++) {
    // console.log(`Loop Runs => ${i}`);
};

// JavaScript For Loop for array:-

const array1 = ['Raj', 'Harsh', 'Tarun', 'Vedant'];

for (let i = 0; i < array1.length; i++) {
    // console.log([i], array1[i]);
};


// JavaScript For in Loop for array:-

for (let result in array1) {
    // console.log(result)
};


// JavaScript For of Loop for array:-

for (let result of array1) {
    // console.log(result)
};


// while loop:-

let no = 0;

while (no < 5) {
    no++;
    // console.log(no);
}

// do while loop:-

let no11 = 10;

do {
    no11++;
    // console.log(no1);
} while (no11 < 5)


/* Data Types in Javascript:-
1] Primitive[immutable] Vs Non primitive[mutable].
In JS, datatypes are represented as primitive[immutable/pass by value], non-primitive[mutable/pass by reference].

Primitive[Value & Immutable] -> 
Primitive data types include numbers, strings, booleans, null, and undefined, (not necessary - symbol & bigint). They are immutable, which means their values cannot be changed once they are created. When you perform operations on primitive values, you're actually creating new values rather than modifying the original ones.
eg. 
let str1 = "Hello";
let str2 = str1; // Creating a new reference to the same value
str2 = "Hi"; // A new string is created with the value "Hi", but str1 remains "Hello"

let num1 = 5;
let num2 = num1;
num2 = 10; // A new number is created with the value 10, but num1 remains 5


Non-Primitive[Reference & Mutable] {array, object, function}->
Non-primitive data types include objects (including arrays and functions), and these values are mutable. When you work with non-primitive data types, you are working with references to the underlying data. Modifying the reference will affect the data itself.

let arr1 = [1, 2, 3];
let arr2 = arr1; // Both arr1 and arr2 refer to the same array
arr2.push(4); // Modifies the original array, both arr1 and arr2 show [1, 2, 3, 4]

let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob"; // Modifies the original object, both obj1 and obj2 now have { name: "Bob" }

The distinction between mutable and immutable only refers to whether the original value can be changed. For non-primitive types, like arrays and objects, the variables actually hold references to memory locations where the data is stored, not the data itself. This is why modifying the reference affects the underlying data.


eg.
const str = "Mango, Banana, Orange";
// console.log("Orignal string => ", str);
// console.log("Orignal string Before Change => " +  str);
// console.log(str.slice(0,5));
// console.log("Orignal string After Change => " + str);


const arr = ["Mango", "Banana", "Orange", "Mango"];
// console.log("Orignal array Before Change => " +  arr);
// console.log(arr.indexOf(0,2));
// console.log(arr.indexOf("Mango"));
// console.log(arr.slice(0,2));
// console.log("Orignal array After Change => " + arr);


let str1 = "Hello";
console.log(str1)
let str2 = str1; // Creating a new reference to the same value
console.log(str1 + " " + str2)
str2 = "Hi"; // A new string is created with the value "Hi", but str1 remains "Hello"
console.log(str1 + " " + str2)


let arr1 = [1, 2, 3];
console.log(arr1)
let arr2 = arr1; // Both arr1 and arr2 refer to the same array
console.log(arr1 + "-"+ arr2)
arr2.push(4); // Modifies the original array, both arr1 and arr2 show [1, 2, 3, 4]
console.log(arr1 + "-"+ arr2)
*/


/*
8] Strings => 
[
String is zero or more characters written inside quotes. It are used for storing and manipulating text. We can use single or double quotes.
Strings can be created as primitives, from string literals, or as objects, using the String() constructor. String can hold only one value in a variable. [eg. let car = "Audi",(Right) let car = "Audi", "BMW"(Wrong)]
].

Escape Character[\' => ' ==> Single Quote; \" => " ==> Double Quote; \\ => \ ==> Backslash; \b => backspace; \f => form feed; \n => New Line; \r => Carriage Return; \t => Horizontal Tabular; \v => Vertical Tabulars]

Strings - [Properties - value (sq.length = ""); Methods - action/function(sq.indexOf());]

Finding a String in String <--> [indexOf(), lastIndexOf(), .length - property]
Searching for String in String <--> [search(regex)]
Extracting String Parts <--> [slice(start, end); substring(start, end); substr(start, length)]
Replacing String Content <--> [replace(), replaceAll()]
Extracting String Characters <--> [charAt(position); charCodeAt(position), property access [ ] ].
Other useful methods <--> [upperCase(); lowerCase(); concat(); trim(); pad;]; Convert String to an array using split method
*/


// 1] Finding(We can't find by regex) --> indexof("searchvalue", "fromwhere[optional]")  <--> get(return indexno.) [FD], notget(-1); lastIndexof("searchvalue", "fromwhere[optional]") <--> get(return) [BD], notget(-1)   ==>
// Difference in Search & indexof() -
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).


// Indexof & lastIndexOf can't use regex...
let mbg1 = "BGMI is the best game";
let res1_1 = mbg1.indexOf("t");
let res1_2 = mbg1.indexOf("t", 5);
let res1_3 = mbg1.indexOf("t", 10);
let res1_4 = mbg1.indexOf("t", 18);
let res1_5 = mbg1.indexOf("T");
let res1_6 = mbg1.indexOf(/T/i);
// console.log(`res1_1 => ${res1_1},
// res1_2 => ${res1_2},
// res1_3 => ${res1_3},
// res1_4 => ${res1_4},
// res1_5 => ${res1_5},
// res1_6 => ${res1_6}
// `);

let mbg2 = "FF is the best game";
let res2_1 = mbg2.lastIndexOf("t");
let res2_2 = mbg2.lastIndexOf("t", 5);
let res2_3 = mbg2.lastIndexOf("t", 10);
let res2_4 = mbg2.lastIndexOf("t", 16);
// console.log(`res2_1 => ${res2_1},   
// res2_2 => ${res2_2},
// res2_3 => ${res2_3},
// res2_4 => ${res2_4},
// `);

// RegEx => /i - Case Sensitive; /g - Global Search

let mbg3 = "CR is the best game";
let res3_1 = mbg3.search("t");
let res3_2 = mbg3.search("t", 5);
let res3_3 = mbg3.search("t", 10);
let res3_4 = mbg3.search("t", 16);
let res3_5 = mbg3.search(/T/i);
// console.log(`res3_1 => ${res3_1},   
// res3_2 => ${res3_2},
// res3_3 => ${res3_3},
// res3_4 => ${res3_4},
// res3_5 => ${res3_5},
// `);




// 2] Extracting - [slice(start, end); substring(start, end); substr(start, length)]    ==>

// start main include, end main doesn't include

let progLang1 = "Python, Javascript, C++, Pandas";

let slice1 = progLang1.slice(1, 9);
let slice2 = progLang1.slice(6, 14);
let slice3 = progLang1.slice(6);
let slice4 = progLang1.slice(-3);
let slice5 = progLang1.slice(-3, -10);
let slice6 = progLang1.slice(-5, -3);
let slice7 = progLang1.slice(14, 10);
let slice8 = progLang1.slice(14, -3);

// console.log(`slice1 -> ${slice1} 
// slice2 -> ${slice2}
// slice3 -> ${slice3}
// slice4 -> ${slice4}
// slice5 -> ${slice5}
// slice6 -> ${slice6}
// slice7 -> ${slice7}
// slice8 -> ${slice8}
// original string -> ${progLang1}
// `);


let progLan2 = "SQL, MySQL, MongoDB, PostgreSQL";

let substring1 = progLan2.substring(1, 6);
let substring2 = progLan2.substring(6, 13);
let substring3 = progLan2.substring(6);
let substring4 = progLan2.substring(-3);
let substring5 = progLan2.substring(-3, -10);
let substring6 = progLan2.substring(-5, -3);
let substring7 = progLan2.substring(14, 10);
let substring8 = progLan2.substring(14, -3);

// console.log(`substring1 -> ${substring1} 
// substring2 -> ${substring2}
// substring3 -> ${substring3}
// substring4 -> ${substring4}
// substring5 -> ${substring5}
// substring6 -> ${substring6}
// substring7 -> ${substring7}
// substring8 -> ${substring8}
// original string -> ${progLan2}
// `);

// Start => Length - 1, IndexNo - 0

let progLan3 = "Angular, React, Node, Express";
let substrSlice1 = progLan3.substr(0, 4);
let substrSlice2 = progLan3.substr(7, -2);
let substrSlice3 = progLan3.substr(-4);
let substrSlice4 = progLan3.substr(-4, 7);
let substrSlice5 = progLan3.substr(-4, -10);

// console.log(`substr1 -> ${substrSlice1} 
// substr2 -> ${substrSlice2}
// substr3 -> ${substrSlice3}
// substr4 -> ${substrSlice4}
// substr5 -> ${substrSlice5}
// original string -> ${progLan3}
// `)


/* Replacing String Content <--> [
     replace() syntax is => replace(searchFor, replaceWith) 
     , replaceAll()]*/


let langData = "Programming language javascript is easy but javascript is not too easy for bigenners.";
let resOne = langData.replace('javascript', 'python');
let resTwo = langData.replace('JAVASCRIPT', 'python');
let resThree = langData.replace(/JAVASCRIPT/i, 'python');
let resFour = langData.replace(/JAVASCRIPT/g, 'PHP');
let resFive = langData.replace(/javascript/g, 'PHP');
//  let resSix = langData.replace(/javascript/i/g,'PHP'); 
let resSeven = langData.replaceAll("javascript", 'PHP');
let resEight = langData.replaceAll('JAVASCRIPT', 'PHP');
//  let resNine = langData.replaceAll(/JAVASCRIPT/i,'PHP');
//  let resTen = langData.replaceAll(/JAVASCRIPT/g,'PHP');

// console.log(`
//     Result One => ${resOne}
//     Result Two => ${resTwo}
//     Result Three => ${resThree}
//     Result Four => ${resFour}
//     Result Five => ${resFive}
//     Result Seven => ${resSeven}
//     Result Eight => ${resEight}`)



/* Extracting String Characters <--> [
    1. charAt(position)  => It returns the character at a specified index (position) in a string. It doesn't work with negative index values.

     2 charCodeAt(position) => 
     // charCodeAt(position) - It returns the unicode of the character at a specified index in a string:
     // The method returns a UTF-16 code(an integer between 0 and 65535).
     // The Unicode Standard provides a unique number for every character, no matter the platform, device, application, or language. UTF-8 is a popular Unicode encoding which has 88-bit code units. But if we provide negative index it will return as NaN.
     3. property access [ ] => Property Access (ECMAScript 5 - 2009) - It allows property access [ ] on a strings..].*/

let DataLanguage = "MongoDB";
let data1 = DataLanguage.charAt(2);
let data2 = DataLanguage.charAt(5);
let data3 = DataLanguage.charAt(7);

// console.log(`
// Character 1 => ${data1}
// Character 2 => ${data2}
// Character 3 => ${data3}`)

let NationLang = "Hindi";

let data4 = NationLang.charCodeAt(1);
let data5 = NationLang.charCodeAt(3);
let data6 = NationLang.charCodeAt(6);
let data7 = NationLang.charCodeAt(-4);
// console.log(`
// Unicode 4 => ${data4}
// Unicode 5 => ${data5}
// Unicode 6 => ${data6}
// Unicode 7 => ${data7}`)


let PropEx = "Languages";

let propRes1 = PropEx[0];
let propRes2 = PropEx[3];
let propRes3 = PropEx[5];
let propRes4 = PropEx[10];

// console.log(`
// PropRes1 => ${propRes1}
// PropRes2 => ${propRes2}
// PropRes3 => ${propRes3}
// PropRes4 => ${propRes4}`)


/* Other Methods => 

 upperCase()  It change string into uppercase,
 lowerCase() => It change string into lowercase,
  concat()    => to join or concat strings,
  trim()      => It removes whitespace from both sides of a string,
  pad()       => it gives widespace.
  split()     => convert string into array.
*/

let PerOne = "harsh";
let PerTwo = "TARUN";
let UcRes = PerOne.toUpperCase();
let LcRes = PerTwo.toLowerCase();

// console.log(`
// Uppercase => ${UcRes}
// Lowercase => ${LcRes}
// `);

let Fname = "Harsh";
let Lname = "Hariyani";
let fullName = Fname.concat(" ", Lname);
// console.log(`FullName is => ${fullName}`);


let useText = "               Hy         Harsh             ";
let useText1 = "Hy Harsh             ";
let trimOne = useText.trim();
let trimOne1 = useText1.trim();
let trimStrat = useText.trimStart();
let trimEnd = useText.trimEnd();

// console.log(`
// Trim Result => ${trimOne}
// TrimOne Result => ${trimOne1}
// TrimStart Result => ${trimStrat}
// TrimEnd Result => ${trimEnd}
// `);


let EngAlpha = "a ,b ,c ,d ,e ,f";
let languages = "Javascript PHP Python";
let country = "India | Pakistan | Bangladesh";
let split1 = EngAlpha.split(",");                // comma
let split2 = languages.split(" ");               // space
let split3 = country.split(" | ");               // pipeline

// console.log(`
// Split One => ${split1}
// Split Two => ${split2}
// Split Three => ${split3}
// `);

let textData = "Surat";
let padStart = textData.padStart(10);
let padEnd = textData.padEnd(12) + "ok";
let padStart1 = textData.padStart(14);
let padEnd2 = textData.padEnd(16) + "Extra";

// console.log(`
// padStart => ${padStart}
// padEnd => ${padEnd}
// padStart1 => ${padStart1}
// padEnd2 => ${padEnd2}
// `);

let text1 = "Python";
let tres1 = text1.at(2);
let tres2 = text1[4];

// console.log(`
// At two => ${tres1}
// At four => ${tres2}
// `);









/* Search Methods/Match Methods - match('value'), matchAll(),
 include("value", start position[optional]), startsWith(), endsWith() includes => It return boolean values., startsWith(), endsWith() =>  It return boolean values & we can't use regex in it.*/



let p = "Gym popular quoto is no PAIN no gain";
let p1 = "I love cats. Cats are very easy to love. Cats are very popular.";
let pRes1 = p.match("ain");
let pRes2 = p.match("ain", 16);  // we can't use 2nd argument
let pRes3 = p.match("AIN");
let pRes4 = p.match(/ain/i);
let pRes5 = p.match(/Ain/i);
let pRes6 = p.match(/ain/gi);    // it will return all global characters we need.

let p1Res1 = p.matchAll("ain")    // Object [RegExp String Iterator] {}
let p1Res2 = p1.matchAll("Cats")  //  Object [RegExp String Iterator] {}

// console.log(`
// pRes1 => ${pRes1}
// pRes2 => ${pRes2}
// pRes3 => ${pRes3}
// pRes4 => ${pRes4}
// pRes5 => ${pRes5}
// pRes6 => ${pRes6}
// `)


let avail = "Hello Harsh, welcome in Javascript tutorial";
let availRes1 = avail.includes("Harsh");
let availRes2 = avail.includes("Harsh", 4);
let availRes3 = avail.includes("Harsh", 8);
let availRes4 = avail.includes("harsh");

// console.log(`
// availRes1 => ${availRes1}
// availRes1$=> ${availRes2}
// availRes1$=> ${availRes3}
// availRes1$=> ${availRes4}
// `);

let staW = "Hello world, welcome to the universe."

let staWres1 = staW.startsWith("Hello");
let staWres2 = staW.startsWith("Hello", 10);
let staWres3 = staW.startsWith("Hello", 2);
let staWres4 = staW.startsWith("world", 2);
let staWres5 = staW.startsWith("world", 6);

// console.log(`
// staWres1 => ${staWres1}
// staWres2 => ${staWres2}
// staWres3 => ${staWres3}
// staWres4 => ${staWres4}
// staWres5 => ${staWres5}
// `); 

let nName = "Harsh Hariyani";
let nNameRes1 = nName.endsWith("Hariyani");
let nNameRes2 = nName.endsWith("Hariyani", 5);
let nNameRes3 = nName.endsWith("Hariyani", 6);
let nNameRes4 = nName.endsWith("Hariyani", 14);
let nNameRes5 = nName.endsWith("Harsh");

// console.log(`
// nNameRes1 => ${nNameRes1}
// nNameRes1 => ${nNameRes2}
// nNameRes1 => ${nNameRes3}
// nNameRes1 => ${nNameRes4}
// nNameRes1 => ${nNameRes5}
// `);


// repeat() method Syntax=> string.repeat(count)
// The number of copies wanted.

let repStr = "Hello World...!";
let repRes = repStr.repeat(5);
// console.log(` Result of repRes => ${repRes}`);


/*
7] Arrays =>
Array[
When we use var, we can store only 1 value/data at a time. 
But when we had to store multiple values & datatypes in one variable then we use array. In Js we have an array class & array are the prototype of this class].
var names = ["Raj", "Dipu", "Lollz"]
Raj - Lower Index/Lower Boundary/Starting Element; Lollz - Upper Index, Upper Boundary/Ending element.
So in array inside this [] is called as Elements.
So to access each individual elements we had the index no. & it starts with 0 & to access last element - we can had array.length - 1. 
Length starts with 1 & index starts with 0, if we had to go reverse so its starts with -1


Traversal of Array <--> [length, for loop, for in, for of, forEach()]
Search & Filter in an Array <--> [Search -> indexOf(), lastIndexOf(), includes(); Filter -> find(), findIndex(), filter()]
Sort & Compare an Array <--> [sort(), reverse()]
Insert, Read, Replace/update, Delete elements in array[CRUD Operation] <--> [push(), pop(), shift(), unshift(), splice()]
Map(), Reduce(), Filter()
*/


/*Array Length property */

let pl = ["Rohit", "Gill", "Virat", "Iyer"];
let lenPl = pl.length;
// console.log(`Array pl length is => ${lenPl}`);

/*Excessing Array Elements */

let frg = ["Raj", "Harsh", "Vedant", "Tarun"];
let frg2 = frg[1];
let frg3 = frg[3];
let frg4 = frg[4];

// console.log(`
// Element 2nd is => ${frg2}
// Element 3rd is => ${frg3}
// Element 4th is => ${frg4}
// `);

/*  Array in Javasript:- */


// Excessing Whole Array:-

let arr = ["Raj", "Vedant", "Harsh", "Tarun"];
// console.log(Whole Array = `${arr}`);


// creating an array by providing the elements:- 

let frGroup = [];
frGroup[0] = "Harsh";
frGroup[1] = "Raj";
frGroup[2] = "Vedant";
frGroup[3] = "Tarun";
// console.log(`Friends Group = ${frGroup}`);


// Assigening an array by new Array keword:-

let players = new Array("Virat", "Rohit", "Surya", "Gill");
// console.log(`All player = ${players}`);


// Excessing an element in Array:-

let arr1 = ["Vikas", "Utkarsh", "Mohit", "Aman"];
let ind1 = arr1[1];
// console.log(`1st index Element = ${ind1}`);


// Changing an array Element:-

let items = ["pen", "erasor", "sharpner", "scale"];
items[0] = "pencil";
// console.log(`Drawing Items = ${items}`);


// toString() method => It converts an array into string.

let changeToStr = arr1.toString();
// console.log(`Array into string = ${changeToStr}`);
// console.log(typeof (changeToStr));                     // now it is string


// For get individual values by giving array's index values:-

let p4 = ["Harsh", "Hariyani", 19];
let fName = p4[0]
let lName = p4[1]
let age = p4[2];

// console.log(`
// FirstName = ${fName}
// LastName = ${lName}
// Age = ${age}`
// );

// For get individual values by giving object name with it's keys:-

let p2 = { Fname: "Tarun", Lname: "Upadhyay", age: 26 };
let firstName = p2.Fname;
let LastName = p2.Lname;
let myAge = p2.age;

// console.log(`
// FirstName = ${firstName}
// LastName = ${LastName}
// myAge = ${myAge}
// `);


// length property => It define the length of an array total numbers of elements in it. 
let arr2 = ["Cat", true, 2, undefined];
let lenOfarr2 = arr2.length;
// console.log(`Array length = ${lenOfarr2}`);


// Excessing the last element of array:-

let comp = ["Bajaj", "TVS", "Honda", "Suzuki"];
let lastElem = comp[comp.length - 1];
// console.log(`Last Element = ${lastElem}`);



/*
Traversal of Array <--> [length, for loop, for in, for of, forEach()]
Search & Filter in an Array <--> [Search -> indexOf(), lastIndexOf(), includes(); Filter -> find(), findIndex(), filter()]
Sort & Compare an Array <--> [sort(), reverse()]
Insert, Read, Replace/update, Delete elements in array[CRUD Operation] <--> [push(), pop(), shift(), unshift(), splice()]
Map(), Reduce(), Filter()
Other methods -
*/

// Traverse by for loop => It will give whole array once.

const fruits = ["Banana", "Orange", "Apple", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    // console.log(`The Value = ${fruits[i]}`);
};


// Traverse by  for in => It gives index numbers:-

for (elements in fruits) {
    // console.log(`The Index = ${elements}`);
};


// for of => It gives values/elements:-

for (elements of fruits) {
    // console.log(`{elements}`);
};


// named or normal function:-

function harshFunction() {
    // code for Exicution
}

// Fat Arrow Function:-

const funcTarun = () => {
    // code for Exicution
}


// for each[calls a function for each elements in an array OR
// We can pass one callback function with this 3 params - elements(particular element in array), index(index no), array(particular array), thisArg(not mandatory/optional)]
// Combination of for In + for of = for Each.
// In for each we can't have break statement bcoz if it starts with data it will show the data to us till the end
// thisArg(4th parameter) it supports in normal function, in fat arrow we can't pass the 4th parameter in it -

// By Normal function:-

let kitchen = ["Bowls", "Spoons", "Forks", "Dish"];

kitchen.forEach(function (element, index, array) {
    // console.log(`
    //     Indexes  => ${index}
    //     Eements  => ${element}
    //     Arrays => ${array}
    //     `);
})


// By Fat Arrow function:-

kitchen.forEach((element, index, array) => {
    // console.log(`
    //     Indexes  => ${index}
    //     Eements  => ${element}
    //     Arrays => ${array}
    //     `);
})



// Search Methods in Array => 

// Sytax =>  indexOf()  = indexof("searchvalue", "fromwhere[optional]") get value in Forward direction .

let FrGroup = ["Raj", "Vedant", "Harsh", "Teerth", "Ayush", "Tarun", "Harsh", "Abhishek", "Aman", "Shivam"];

let find1 = FrGroup.indexOf("Harsh");
let find2 = FrGroup.indexOf("Harsh", 3);
let find3 = FrGroup.indexOf("Harsh", 9);
let find4 = FrGroup.indexOf("Harsh", 6);

// console.log(`
//  indexOf Harsh => ${find1}
//  indexOf Harsh => ${find2}
//  indexOf Harsh => ${find3}
//  indexOf Harsh => ${find4}
//  `);


// Sytax =>  lastIndexof()  = lastIndexof("searchvalue", "fromwhere[optional]") get value in Backward direction.


let search1 = FrGroup.lastIndexOf("Harsh");
let search2 = FrGroup.lastIndexOf("Harsh", 4);
let search3 = FrGroup.lastIndexOf("Harsh", 1);

// console.log(`
// Search1 = ${search1}
// Search2 = ${search2}
// Search3 = ${search3}
// `);


// Syntax => includes() = include("value", start position[optional])


let inc1 = FrGroup.includes("Ayush");
let inc2 = FrGroup.includes("Ayush", 4);
let inc3 = FrGroup.includes("Ayush", 9);

// console.log(`
// inc1 = ${inc1}
// inc2 = ${inc2}
// inc3 = ${inc3}
// `);


// Filter Methods -> find(), findIndex(), filter()]

/* find()  => It will return the test passing first element of array. */

let arrNum = [0, 100, 200, 300, 500, 700, 900, 1000];

// let findMet1 = arrNum.find(myFunc);

// console.log(findMet);
// function myFunc(value, index, array) {
//     return value > 200;
// }

/* findIndex()  => It will return the test passing first element's index value. */


// let findMet2 = arrNum.findIndex(myFunc1);

// console.log(findMet2);
// function myFunc1(value, index, array) {
//     return value > 200;
// }

/* filter()  => It will return the test passing all the element in a new array. */

// let findMet3 = arrNum.filter(myFunc2);

// console.log(findMet3);
// function myFunc2(value, index, array) {
//     return value > 200;
// }


// Sort & Compare an Array:-

// The sort() method sorts an array alphabetically:-
// The reverse() method reverse an array alphabetically in backward:-

let months = ['January', 'February', "March", "December", "April", "October"];
let sortMonths = months.sort();
let reverseMonths = months.reverse();

// console.log(`
// Array sort = ${sortMonths}
// Array reverse = ${reverseMonths}
// `);

/* Other Methods =>  [push(), pop(), shift(), unshift(), splice()]
 Map(), Reduce(), Filter()*/

//  The push() method adds a new element to an array (at the end):-
//  The pop() method removes an element in an array (at the end):-
//  The unshift() method add an element in an array (at the start):-
//  The shift() method removes an element in an array (at the start):-

let veg = ["Tomato", "Potato", "Okra", "Cabbage", "Coliflower"];
// let pushElem = veg.push("Bringel");
// let popElem = veg.pop();
// let unshiftElem = veg.unshift("Carrot");
let shiftElem = veg.shift();

// console.log(`
// Length Return after push = ${pushElem}
// Array Return after push= ${veg}
// `);


// console.log(`
// Array element who is poped = ${popElem}
// Array after pop method = ${veg}
// `);


// console.log(`
// Array element who is unshift = ${unshiftElem}
// Array after unshift method = ${veg}
// `);


// console.log(`
// Array element who is shift = ${shiftElem}
// Array after shift method = ${veg}
// `);


/* splice() method => 

The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("CSS" , "Javascript") define the new elements to be added.
*/

let it1 = ["Python", "C", "PHP", "Pandas"];
// let spIt1 = it1.splice(2, 0, "CSS", "Javascript");
let spIt2 = it1.splice(1, 2, "CSS", "Javascript");
// console.log(`After splice method = ${it1}`);


/* map() method*/

// The map() method creates a new array by performing a function on each array element.
// Note =>  map filter & reduce methods doesn't effecr the original array.

let numsForArr = [25, 14, 5, 61, 8];

let numsForArr1 = numsForArr.map(myMulFunc);

// console.log(`
// New Array = ${numsForArr1}
// Original Array = ${numsForArr}
// `);

function myMulFunc(value, index, array) {
    return value * 2;
}

/* filter() method*/

// The filter() method creates a new array with array elements that pass a test.

let numsForArr2 = numsForArr.filter(myMulFunc1);

// console.log(`
// New Array = ${numsForArr2}
// Original Array = ${numsForArr}
// `);

function myMulFunc1(value, index, array) {
    return value > 20;
}

/* reduce() method */

// The reduce() method runs a function on each array element to produce (reduce it to) a single value.

let numsForArr3 = numsForArr.reduce(myMulFunc2);

// console.log(`
// New Array with sum = ${numsForArr3}
// Original Array = ${numsForArr}
// `);

function myMulFunc2(total, value, index, array) {
    return total + value;
}


/* slice() method */

/* 1. The slice() method slices out a piece of an array into a new array. The slice() method creates a new array. The slice() method does not remove any elements from the source array/original array.
2. The slice() method can take two arguments like slice(1, 3). The method then selects elements from the start argument, and up to (but not including) the end argument.
*/

let bhaiLog = ["Mandar", "Vedant", "Harsh", "Tarun", "Raj"];
let bhaiS = bhaiLog.slice(1)
let bhaiS1 = bhaiLog.slice(1, 4)
let bhaiS2 = bhaiLog.slice(1, 5)

// console.log(`
// With one argument = ${bhaiS}
// With two argument = ${bhaiS1}
// With second argument who isn't correct = ${bhaiS2}
// `);

// Other methods - some() & every(), keys(), values(), entries(), from(), delete(), concat(), join(), toString() =>


/* some() Method =>  like or(|) operator , if any one condition is true returns true, if all are false returns false..*/

let sumNum = [24, 44, 64, 86, 114, 228];

let resOfsum = sumNum.some(mySumNumFunc);
// console.log(`Result for some method = ${resOfsum}`);

function mySumNumFunc(value, index, array) {
    return value > 60;
}

/* every() Method =>  like and(&) operator , if all elements condition satisfied returns true, does'nt satisfies it will return false..*/


let resOfsum1 = sumNum.every(mySumNumFunc1);
// console.log(`Result for every method = ${resOfsum1}`);

function mySumNumFunc1(value, index, array) {
    return value > 60;
}


/* 
1. key() Method => It returns an Array Iterator object with the keys of an array,
2.  values() - method returns an Array Iterator object with the values of an array,
3.  entries() - method returns an Array Iterator object with key/value pairs. 
*/

let frgrp = ["Mango", "Banana", "Apple", "Grapes"];
let rfrgp1 = frgrp.keys();
let rfrgp2 = frgrp.values();
let rfrgp3 = frgrp.entries();

// console.log(`
// keys in array => ${rfrgp1}
// values in array => ${rfrgp2}
// entries in array => ${rfrgp3}
// `);

// for (let keys1 in rfrgp1) {  // not work
//     console.log(keys1)
//   }

// for (let keys1 of rfrgp1) {  // it works
//     console.log(keys1)
//   }

// for (let values in rfrgp2) {  // not work
//     console.log(values)
//   }

// for (let values of rfrgp2) {  // it works
//     console.log(values)
//   }


// for (let entries in rfrgp3) {  // not work
//     console.log(entries)
//   }

// for (let entries of rfrgp3) {  // it works
//     console.log(entries)
//   }

let CwC2023Teams = ["India", "Newzealand", "South Africa", "Australia", "England", "Pakistan"];
let fromTeams = Array.from(CwC2023Teams);
// console.log(fromTeams);

let fromTeams1 = CwC2023Teams[0];
// console.log(fromTeams1);

let fromTeams2 = Array.from(fromTeams1);
// console.log(fromTeams2);

CwC2023Teams.map((cv) => {
    // console.log(Array.from(cv));
})

/* toString() Method */
// It converts array into string.

let tostringTeams = CwC2023Teams.toString();
//   console.log(tostringTeams);

let fromTaken = Array.from(tostringTeams);
// console.log(fromTaken);


/* delete() Method */

// It deletes the item you want to delete as give it's index.

let DecoItems = ["Flowers", "Colorstrips", "Balloons", "Sparkletape"];
delete DecoItems[1];

// console.log(`
// It return Array with deleted empty place = ${DecoItems}
// It return deleted item as Undefined = ${DecoItems}
// `);


// concat() method => add/concat two arrays together.

let studBoys = ["Harsh", "Tarun", "Raj"];
let studGirls = ["Ananya", "Sneha", "Priya"];
let studChildren = studBoys.concat(studGirls);

// console.log(`
// All studChildren = ${studChildren}
// `);

// join() method => join the elements in between the elements.

let studClass = ["Ramesh", "Priya", "Manish", "Vishal"];
let joinAdd1 = studClass.join(" + ");
let joinstar2 = studClass.join(" * ");

// console.log(`
// Join add = ${joinAdd1}
// Join star = ${joinstar2}
// `);

// at() method => it tell that what element is present on that index.

let atElemOn = studClass.at(2);
// console.log(`At 2nd index = ${atElemOn}`);


// findLast() => ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
// The findLastIndex() method finds the index of the last element that satisfies a condition.


let temprature = [32, 25, 16, 42, 44, 40, 43, 24];
let checqTemp = temprature.findLast(x => x > 40);
let checqTempInd = temprature.findLastIndex(x => x > 40);

// console.log(`
// FindLast temprature => ${checqTemp}
// FindLast Index of temprature => ${checqTempInd}
// `);


/* copyWithin() method */

// The copyWithin() method copies array elements to another position in an array.
/* The copyWithin() method overwrites the existing values.
The copyWithin() method does not add items to the array.
The copyWithin() method does not change the length of the array. */

elemfr = ["Mango", "Papaya", "Pomogranate", "Orange", "Apple"];
let resFrElem = elemfr.copyWithin(1, 2);
let resFrElem1 = elemfr.copyWithin(0, 1);
let resFrElem2 = elemfr.copyWithin(-1);

// console.log(`
// First Result = ${resFrElem}
// Second Result = ${resFrElem1}
// Second Result = ${resFrElem2}
// `);

/*Numeric sort() */

let numS = [20, 1, 52, 31, 26, 14];

// numS.sort(function(dg1,dg2){
//     return (dg1 -dg2);
// })
// console.log(`Num short result = ${numS}`);


/* Random sort() */

const mathR = [40, 100, 1, 5, 25, 10];
// document.getElementById("mrmethod").innerHTML = mathR;  

function mathRadFunc() {
    mathR.sort(function () { return 0.5 - Math.random() });
    //   document.getElementById("mrmethod").innerHTML = mathR;
}


// You can use Math.min.apply to find the lowest number in an array:

let maxMinVal = [20, 15, 2, 52, 36, 12];
// console.log(`Minimum Value = ${mathMin(maxMinVal)}`);

function mathMin(arr) {
    return Math.min.apply(null, arr);
}

// You can use Math.max.apply to find the highest number in an array:

// console.log(`Maximum Value = ${mathMax(maxMinVal)}`);

function mathMax(arr) {
    return Math.max.apply(null, arr);
}

// The ... operator expands an iterable (like an array) into more elements:

let tOrder = ["Rohit","Gill","Virat"];
let mOrder = ["Iyer","Rahul","Sky","Jadeja"];
let tailOrder = ["Kuldeep","Shami","Bumrah","Siraj"];
let fullTeam = [...tOrder , ...mOrder , ...tailOrder ];

// console.log(`Indian Team In CWC 2023 = ${fullTeam}`);

/*-----------------------------------------------------------------------------------------------------------*/

// Functions in Javascript:-


/*
5. Function =>
Function - It are first-class objects that can be passed to other functions, returned from functions, and assigned to variables and properties. They make JavaScript code more readable, organized, reusable, and maintainable Or 
It is a block of code which is designed to perform a particular task.

Function Definition[Before we use a function, we need to define it. A function definition (also called a function declaration/function statement) consists of the function keyword, followed by: 
a.The name of the function,
b. A list of parameters to the function, enclosed in parentheses and separated by commas, 
c. The JavaScript statements that define the function, enclosed in curly brackets, {...}].

Call Function[Defining a function cannot used it. It will execute when something invokes it (calls the function)]
Function Parameters & Arguments[
Function parameters are the names listed in the function's definition.
Function arguments are the real values passed to the function OR passed the values when we call the function].

Function Expressions[It simply means create a function and put it into the variable]

Return Keyword[When JavaScript reaches a return statement, the function will stop executing. Functions often compute a return value. The return value is "returned" back to the "caller"]

Anonymous Function[A function expression is similar to and has the same syntax as a function declaration. One can define "named" function expressions (where the name of the expression might be used in the call stack for example) or "anonymous" function expressions]
We avoid giving function name i.e function(){}.
*/


let dg1 = 10;
let dg2 = 5;
let dgaddRes = dg1 + dg2;
// console.log(dgaddRes);

// We can't use this anywhere & can't change value of ok or ok1.
// When we had to deal - ok2 with different-different numbers, so that time we can use functn.


// don't use any varaibles name same as the function name given, it will run but we will had confusion...!

function functionNew() {
    let dg3 = 10;
    let dg4 = 10;
    let dgCombine = dg3 + dg4;
    console.log(dgCombine); // 20
}
// functionNew();
// console.log(functionNew());
// console.log(`${functionNew()}`);


function funcMulTask(num1, num2) {
    const numMulTask = num1 * num2;
    console.log(`Result with parameters & arguments = ${numMulTask}`);
};
// funcMulTask();
// funcMulTask(5, 6);
// funcMulTask(10, 12);


function funcMulTask(num3, num4) {
    const numMulTask1 = num3 * num4;
    console.log(`Result with parameters & arguments = ${numMulTask1}`);
};
// let res = funcMulTask(4,6);
// res;


function funTaskAdd(num5, num6) {
    return (addRes1 = num5 + num6);
};
let resAdd = funTaskAdd(10, 15);
let resAdd1 = funTaskAdd(25, 50);

// console.log(`
// Result one = ${resAdd}
// Result two = ${resAdd1}
// `);


let DivTask = function (num7, num8) {
    return (resDev = num7 / num8);
};
let divR1 = DivTask(25, 5);
let divR2 = DivTask(63, 7);

// console.log(`
// Result Task1 stored in variable = ${divR1}
// Result Task2 stored in variable = ${divR2}
// Results comparison 1 = ${divR1 < divR2}
// Results comparison 2 = ${divR2 < divR1}
// `);

// console.log(`
// Result one without storing in Variable = ${DivTask(25, 5)}
// Result two without storing in Variable = ${DivTask(63, 7)}
// `);


/* Functions Types in Javascript */

/*
1. Named Function
2. Anonymous Function
3. Arrow/Fat Arraw Function
4. (IIFE) Function => Imediately Invocked function Expression
5. Higher Order Function
6. Constructor Function
*/


// Named Function:-

function NameFunc(n1, n2) {
    return n1 + n2;
}
// console.log(NameFunc(5, 6));


// Anonymous Function:-

let AnonFunc = function (TshrtNum) {
    // console.log(`Virat's Tshirt Number is = ${TshrtNum}`);
}
AnonFunc(18);


// Arrow Function:-

let ArrFunc = (BatPos) => {
    // console.log(`Rohit's Batting Position = ${BatPos}`);
}
ArrFunc("Opener");


// IIFE function:-

(function () {
    let PerName = "Harsh Hariyani";
    // console.log(`My name is = ${PerName}`);
})()

// Higher Order Functon:- 

// Higher Order Functions [Function that take 1 or more function as an arguments or return a function. Function which takes another function as an arguments is called HOF(Higher Order Function) eg. CallBack function.
// eg. map(), filter(), reduce()

let hrOrrF = [20, 40, 60, 80];
let hrOrrFNew = hrOrrF.map((hr) => hr * 6)
// console.log(`Higher Order Function => ${hrOrrFNew}`);


// Constructor Function:-

// Note => Used as blueprints for creating with similar properties & methods. They are invoked using the new keyword to create instances of objects.


function MeetStudData(nName, aAge) {
    this.nName = nName;
    this.aAge = aAge;
}

let MstudData = new MeetStudData("Harsh Hariyani", 19);

// console.log(`
// My name is => ${MstudData.nName}
// My age is => ${MstudData.aAge}
// `);


// arguments.length property in function:-

function ArgFunc(n1, n2, n3, n4) {
    return arguments.length;
}
let ArgVal = ArgFunc(2, 5, 6, 8);
// console.log(`Arguments used n this Function = ${ArgVal}`);


// toString() method in function:-

function conStrFunc(x1,x2){
    return x1 * x2;
}
let ConStrFuncRes = conStrFunc.toString();
// console.log(`Function in String = ${ConStrFuncRes}`);

/* Call,Apply & Bind Functionality in Javascript */

// Call Function in Javascript:-

let player1 = {
    pName: "Virat",
    pAge: 35,
    pNation: "India",
    printPlayerDetails: function () {
        return this.pName + " " + this.pAge + " ";
    }
};
player1.printPlayerDetails();


let player2 = {
    pName: "Rohit",
    pAge: 36,
    pNation: "India"
}

// Call function => It is called function Borrowing.

// player1.printPlayerDetails.call(player2);

// Give more values by call functionality:-

// let p1 = player1.printPlayerDetails.call(player1, "Right Handed", "1st DOWN","Delhi");
// let p2 = player1.printPlayerDetails.call(player2, "Right Handed", "Opener","Mumbai");

// console.log(`
// Player1 Details by call => ${p1}
// Player2 Details by call => ${p2}
// `);


// Apply Function:-


// pl3 = player1.printPlayerDetails.apply(player1, ["RCB", "Delhi", "1stDown"]);
// pl4 = player1.printPlayerDetails.apply(player1, ["MI", "Mumbai", "opener"]);

// console.log(`
// Player1 Details by apply => ${pl3}
// Player2 Details by apply => ${pl4}
// `);


// Bind Function:-

// let bindPer = player1.printPlayerDetails.bind(player2);
// console.log(bindPer());


// Closures in Javascript:-

// Example 1:-

let add = function (v1) {
    // console.log("Viewers" + v1);
    var v2 = 8;
    return function (v3) {
        return v1 + v2 + v3;
    }
}
let addInside = add(5);
// console.log(`Add Value Is => ${addInside(6)}`);

// Example 2:-

let mulTask = function (s1, s2, s3) {
    return {
        sumofTwo: function () {
            return s1 + s2;
        },
        sumofThree: function () {
            return s1 + s2 + s3;
        }
    }
}

let resultAdd = mulTask(5, 6, 8)

// console.log(`
// Sum of two => ${resultAdd.sumofTwo()}
// Sum of three => ${resultAdd.sumofThree()}
// `);


// Basic overview of Objects:-

/*
1. Property like => Value eg - model,color,weight etc. & Metho like => action eg- start,stop,break etc.
2.Object contains many values it is (Non-Premitive).
3. We can excess objects like (objName,ObjProperty).
*/

let meetFr = {
    nameIst: "Harsh",
    nameIstSirname: "Hariyani",
    nameIInd: "Hardik",
    homeTown: "Surat",
    fr1FullName: function () {
        return this.nameIst + " " + this.nameIstSirname;
    }
}
// console.log(`
// Friend one = ${meetFr.nameIst}
// Friend two = ${meetFr["nameIInd"]}
// Friend one full name = ${meetFr.fr1FullName()}
//         `);


// Javascript Objects:-

/*
What is Object Literal -> Object literal is simply a key:"value" pair data structure. Storing variables and functions together in one container, we can refer this as an Objects.
eg. object = school bag(in one bag it contains every data like notebook, compass, tiffin, water bottle, etc...) 

Why Objects -> 
In primitive[string, no, boolean, symbol, null, undefined] - we can put only one value in it. it uses passed by value.
*/


let n1 = "Harsh"; // correct
// let n1n2 = "Harsh","Tarun"; // incorrect
let dgt1 = 5;   // correct
// let dgt2 = 6,8 // incorrect
let bolv = true;  // correct
// let bolboth = true , false;  // incorrect

// Passed by Vale:-

let no1 = 50;
let no2 = no1;
// console.log(no1);  // 50
// console.log(no2);  // 50
no1 = 30;
// console.log(no1);   // 30
// console.log(no2);   // 50

// Passed by reference:-

let objOne = { Board: "BCCI" };
let objTwo = objOne;
// console.log(objOne);  // { Board: 'BCCI' }
// console.log(objTwo);  // { Board: 'BCCI' }
objOne.Board = "Bharat Board";
// console.log(objOne);  // { Board: 'Bharat Board' }
// console.log(objTwo);  // { Board: 'Bharat Board' }


// Note => Remember when we write function inside objects its called as methods.

// 1st way:-

let myBio = {
    myNaMe: "Harsh Hriyani",
    myAge: 19,
    getMyBio: function () {
        console.log(myBio.myNaMe + " " + myBio.myAge);
    }
}
// console.log(myNaMe); // error
// console.log(myBio.myNaMe + " " + myBio.myAge);  
// console.log(myBio.getMyBio());   // undefined

// 2nd way:-

let myBio1 = {
    myName1: "Tarun Upadhyay",
    myAge1: 26,
    getMyBio1() {
        console.log((myBio1.myName1) + " " + (myBio1.myAge1));
    }
}
// myBio1.getMyBio1();


// 3rd way:-

let myBio2 = {
    myFullName: {
        realName: "Tarun Upadhyay",
        favoritePlayer: "Virat Kohli"
    },
    myAgeNow: 26,
    myHomeTown: "Bulandshahr",
    getFullData() {
        // console.log((myBio2.myFullName) + " " + (myBio2.myAgeNow));
    }
}
myBio2.getFullData();
// console.log((myBio2.myFullName.realName) + " " + (myBio2.myFullName.favoritePlayer));


/*
What is this Object ->
The definition of "this" object is that it contain the current context[context or which scope it is working on] 
The this object can have different values depending on where it is placed.  
*/


/*
This will not work in editor, run this in browser ==>

ex 1 ->
console.log(this);
console.log(this.alert('Awesome')); // it refers to the current context and that is window global object 



ex 2 [this everytime refers to global object i.e nothing but an window object then what's its use case..] ->
function myNamewithThis() {
    console.log(this);
}
myNamewithThis();
*/

// Eg-3

// var broName = "Harsh";
// function myFrndName() {
//     console.log(this.broName);
// }
// myFrndName();

// Eg-4

let objForFrnd = {
    hisAge: 19,
    myFrName() {
        // console.log(this);
        // console.log(this.hisAge);
    }
}
// objForFrnd.myFrName();

// Eg-5

let objFrData = {
    hisState: "Gujrat",
    myFrbio: () => {
        // console.log(this);
        // console.log(this.hisState);
    }
}
// objFrData.myFrbio();

// Eg-6

// Nested Objects:-

let bioData = {
    myName: {
        realName: "Tarun Upadhyay",
        hobbies: 'Playing Games'
    },
    myAge: 26,
    getData() {
        //   console.log(`My name is - ${this.myName.realName} and my age is - ${this.myAge} `); 
    }
}
//   bioData.getData();


// In JavaScript, arrays use numbered indexes; objects use named(key) indexes; In array we can't provide key to distinguish.

// Adding key values in object:-

let ob1 = {};
ob1.name1 = "Harsh",
    ob1.name2 = "Hariyani",
    ob1.age = 19,
    ob1.hometown = "Surat"
// console.log(`His name is => {ob1.name1}`);


const a = new String("");
// console.log(a, typeof (a));

// Object in array:-

const arrob = ["Harsh", "Tarun", {
    name: "Raj",
    age: 22
}, {}];
//   console.log(arrob[2], arrob[2].name, arrob[3]);

// new Object():-

const person3 = new Object();
person3.firstName = "John";
person3.lastName = "Doe";
person3.age = 50;
person3.eyeColor = "blue";
// console.log(typeof(person3))

const ob2 = {
    fname1: "Harsh",
    lname: "Hariyani",
    age1: 19
}

const change = ob2;
change.age1 = 20;
// console.log(change);
// console.log(ob2);  

// Array in object keys:- 

const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}

//   console.log(myObj.cars[1]);


// To give methods to a function of object:-

const obPer = {
    p1name1: "Tarun",
    p1name2: "Upadhyay",
    fullNameofMe: function () {
        return (this.p1name1 + " " + this.p1name2).toUpperCase().padStart(20);
    }
}

// console.log(obPer.fullNameofMe());

// Displaying a JavaScript object will output [object Object].
// Displaying the Object Properties by name, Displaying the Object Properties in a Loop, Displaying the Object using Object.values(), Displaying the Object using JSON.stringify()

// console.log(Object.keys(person), Object.values(person), Object.entries(person))
// console.log(`Person Keys - ${person.keys}, Values - ${person.values}, Entries - ${person.entries}`)


// keys, values & entries:-

let objper2 = {
    nName1: "Harsh",
    nName2: "Hariyani",
    nAge: 19
}
// console.log(`
//     key =${Object.keys(objper2)}
//     values =${Object.values(objper2)}
//     entries =${Object.entries(objper2)}
// `)


// toLowerCase() & toLowerCase() methods:-

const person5 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return (this.firstName + " " + this.lastName).toUpperCase();
    },
    fullName1: function () {
        return (this.firstName + " " + this.lastName).toLowerCase();
    }
}
let res = person5.fullName()
//   console.log(Object.keys(person5),Object.values(person5))


// JSON.stringify() method:-

let stOb = {
    obName: "Harsh",
    obAge: 19,
    homeTown: "Surat"
}
let resStringify = JSON.stringify(stOb);
// console.log(`Obj as String => ${resStringify}`);


// looping in Objects:-

const myFrObj = {
    name: "Raj",
    age: 21,
    city: "Mumbai"
}
for (let k in myFrObj) {
    // console.log(myFrObj[k]); 
}

// Note => It will itereate every key of object.

const myObShoroom = {
    name: "Harsh",
    age: 19,
    cars: [
        { name: "Maruti", models: ["Celero", "Swift", "WagonR"] },
        { name: "Huendai", models: ["Verna", "i10", "Aura"] },
        { name: "Tata", models: ["Tiago", "Punch", "Neno"] }
    ]
}

for (let i in myObShoroom.cars) {
    // console.log(`Brand Name => ${myObShoroom.cars[i].name}`);
    for (let j in myObShoroom.cars[i].models) {
        // console.log(`Model => ${myObShoroom.cars[i].models[j]}`);
    }
}

// Stringify Dates:-

let obFr = {
    name: "Hardik",
    age: 26,
    date: new Date()
}
let myStrDate = JSON.stringify(obFr);
// console.log(myStrDate);

let obfr2 = {
    name: "Tarun",
    age: function () {
        return 30;
    }
}
// console.log(JSON.stringify(obfr2))  // not stringify function.


// How to fix it:-

let obfr3 = {
    name: "Tarun",
    age: function () {
        return 30;
    }
}
obfr3.age = obfr3.age.toString();
// console.log(JSON.stringify(obfr3)) 


// Array stringify:-

let arrCars = ["Celero", "Swift", "WagonR"];
// console.log(JSON.stringify(arrCars));


// Set => Setter in Objects:-

const perDetail = {
    plName: "Joy Root",
    plAge: 32,
    language: "no",
    set lang(lang) {
        this.language = lang;
    }
};
perDetail.lang = "UK-eg";
// console.log(perDetail.language);


// Get => getter in objects:-

const perDetail1 = {
    fFname11: "Harsh",
    fLname11: "Hariyani",
    fage11: 19,
    get fullName() {
        return this.fFname11 + " " + this.fLname11;
    }
}
// console.log(perDetail1.fullName);

const perDetail2 = {
    fFname11: "Harsh",
    fLname11: "Hariyani",
    fage11: 19,
    get fname() {
        return this.fFname11.toUpperCase();
    }
}

// console.log(perDetail2.fname);


// Objects creation by constructor method:-

function perDet(n1, n2, Age, eyeColor) {
    this.Fname = n1;
    this.Lname = n2;
    this.aAge = Age;
    this.Ecolor = eyeColor;
}

const perDatafun = new perDet("Harsh", "Hariyani", 19, "Black");
// console.log( perDatafun.Fname + " " + perDatafun.Lname);


// Creating many objects & Value adding in objects:-

function HomePerson(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    // Adding a constructor
    this.nationality = "Bharat";
    this.changelName = function (change) {
        return this.lastName = change;
    }
}



// Create two Person objects
const myFather = new HomePerson("Anil", "Upadhyay", 59, "brown");
const myMother = new HomePerson("Mamta", "Sharma", 48, "black");

// Change lastname
myMother.changelName("Upadhyay");

//   Adding a Property to an Object

//   myFather.nationality = "India";

// Add a name method to first object

myFather.name = function () {
    return this.firstName + " " + this.lastName;
};

//   console.log(myFather.firstName);
//   console.log(myMother.firstName);
//   console.log(myFather.nationality);
//   console.log(myFather.name());
//   console.log(myMother.nationality);
//   console.log(myMother.lastName);


function PlDetails(name, sirname, age, shirt, team) {
    this.playerName = name;
    this.playerSName = sirname;
    this.playerAge = age;
    this.playerShirt = shirt;
    this.playerTeam = team;
}

// adding property direct to object

// PlDetails.prototype.country = "Bharat";

// adding method direct to object

PlDetails.prototype.name = function () {
    return this.playerName + " " + this.playerSName;
};


let hodDetail = new PlDetails("Rohit", "Sharma", 36, 45, "India")

// console.log(hodDetail.playerName + " " + hodDetail.country)
// console.log(hodDetail.name());


// Iterate on a string:-

let strFrName = "Harsh";

for (let alf of strFrName) {
    // console.log(alf);
}


// Iterate on an array:-

let arrNum1 = ["A", "B", "C", "D", "E"];

for (let arrItr of arrNum1) {
    // console.log(arrItr);
}

// Set in objects & find size of it:-

let elemKitchen = new Set(["Chopper", "Knife", "Pan"]);
// console.log(elemKitchen.size);


// create an empty set by add method:-

let PlayIqupments = new Set();
PlayIqupments.add("Bat");
PlayIqupments.add("Ball");
PlayIqupments.add("Stumps");
// console.log(PlayIqupments.size);


// forEach loop for Set:-

let frG = new Set(["Raj", "Hardik", "Harsh", "Tarun", "Vedant"]);

// frG.forEach(function(value){
//     // console.log(value);
// })
// console.log(frG.values())


// Now you can use the Iterator object to access the elements:

let frG1 = new Set(["Raj", "Hardik", "Harsh", "Tarun", "Vedant"]);

for (const vl of frG1.values()) {
    // console.log(vl);
}

// Map in Objects:-

const frAr = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

//   console.log(frAr.get("bananas"));


// Create map set:-

const EqPlayIt = new Map();

// Set Map Values
EqPlayIt.set("bat", 2700);
EqPlayIt.set("ball", 150);
EqPlayIt.set("stumps", 400);

// change set value by Map
// EqPlayIt.set("bat","40000");

// console.log(EqPlayIt.get("ball"));
// console.log(EqPlayIt.get("bat"));

// Size of Map set
// console.log(EqPlayIt.size);



const EqCookIt = new Map([
    ["pan", 2],
    ["veesel", 4],
    ["Hotcase", 1]
]);

// delete element
// EqCookIt.delete("pan");

// clear all elements
// EqCookIt.clear();

// has telll it will available in the Map set or not return booean values;
// console.log(EqCookIt.has("pan"));
// console.log(EqCookIt.has("hotcase"));

// console.log(EqCookIt.size);


const EqCookIt1 = new Map([
    ["pan", 2],
    ["veesel", 4],
    ["Hotcase", 1]
]);

EqCookIt1.forEach(function(key,value){
    // console.log(key + " " + value);
})

// entries() method in object:-

const EqCookIt2 = new Map([
    ["pan", 2],
    ["veesel", 4],
    ["Hotcase", 1]
]);

for(let en of EqCookIt2.entries()){
    // console.log(en);
}
 
// keys() method in object:-

const EqCookIt3 = new Map([
    ["pan", 2],
    ["veesel", 4],
    ["Hotcase", 1]
]);

for(let ky of EqCookIt3.keys()){
    // console.log(ky);
}

// keys() method in object:-

const EqCookIt4 = new Map([
    ["pan", 2],
    ["veesel", 4],
    ["Hotcase", 1]
]);

for(let vl of EqCookIt4.values()){
    // console.log(vl);
}

// keys() method in object:-

const EqCookIt5 = new Map([
    ["pan", 2],
    ["veesel", 4],
    ["Hotcase", 1]
]);

let totalEq = 0;
for(let vlt of EqCookIt5.values()){
    totalEq += vlt;
}
// console.log(totalEq);

const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits1 = new Map();

// Add the Objects to the Map
fruits1.set(apples, 500);
fruits1.set(bananas, 300);
fruits1.set(oranges, 200);

// console.log(fruits.get(apples));