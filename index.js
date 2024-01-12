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

let no1 = 10;

do {
    no1++;
    // console.log(no1);
} while (no1 < 5)


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