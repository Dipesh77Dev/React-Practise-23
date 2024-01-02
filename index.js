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
if(true){
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



function f2(){
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

