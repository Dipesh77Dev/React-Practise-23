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


let ranks1 = 2;

switch (ranks1) {
    case 0:
        console.log(`Rank1 => Football is best`);
        break;
    case 1:
        console.log(`Rank1 => Cricket is best`);
        break;
    case 2:
        console.log(`Rank1 => Badminton is best`);
        break;
    case 3:
        console.log(`Rank1 => Hockey is best`);
        break;
    case 4:
        console.log(`Rank1 => Chess is best`);
        break;
    case 5:
        console.log(`Rank1 => Carrom is best`);
        break;
    default:
        console.log(`Rank1 => Other games are best but not in top 5 like - Ludo, Kabaddi, Golf....`)
}
