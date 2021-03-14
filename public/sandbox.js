"use strict";
//.ts is for typescript. This is not a JavaScript file and needs to be compiled down to it.
// in the terminal you can type tsc (typescript convert) sandbox.ts (this file "into") sandbox.js
// if sandbox.ts sandbox.js share the same name minus the extension, you can leave off the second one.
// if a .js file doesn't exist, it will be created
// $ tsc sandbox.ts sandbox.js
//* don't worry about error after converting since variables seem to be double declared
//*everytime you make a change in the .ts file you need to rerun tsc sandbox.ts
//*... unless you run the command $ tsx sandbox.ts -w (w is for watch)
// const log = console.log;
// let character = "Brian";
// let age = 30;
// let isBlackBelt = false;
// // character = 20;
// character = "Ron";
// // age = 'thirty'
// age = 40;
// // isBlackBelt = 'yes';
// isBlackBelt = true;
// const circ = (diameter: number) => {
//   // const circ = (diameter: string) => {
//   // const circ = (diameter: boolean) => {
//   return diameter * Math.PI;
// };
// // console.log(circ(.7));
// //*arrays
// let names = ["Brian", "Ron", "Robin", "Steven"];
// names.push("Bubby");
// // names.push(4);
// // names.push(true);
// // names[0] = false;
// let numbers = [10, 23, 30, 40];
// numbers.push(25);
// // numbers.push('Hello');
// // let me = 'Brian';
// // numbers.push(me)
// let mixed = ["Ken", 4, "string", 8, 9];
// mixed.push(44);
// mixed.push("Text");
// // mixed.push(false)
// // mixed.push(true)
// mixed[0] = 0;
// mixed[1] = "string";
// //* objects. Property types become fixed
// let ninja = {
//   name: "Brian",
//   belt: "black",
//   age: 30,
// };
// ninja.age = 40;
// ninja.name = "Test";
// // ninja.age = "30";
// // ninja.skills = ['fight', 'rest', 'sneaking']; //*new property cannot be added to existing object
// ninja = {
//   ...ninja,
//   // skills: "test"
// };
// ninja = { //must match exact same shape
//   name: "Patrick",
//   belt: "blue",
//   age: 32,
//   // skills: []
// };
//!#5
//!#5
//!#5
// //explicit types - not defining a value, but defining the type
// let character: string;
// let age: number;
// let isLoggedIn: boolean;
// // age = '30' //*fail, wrong type
// // age = true //*fail, wrong type
// age = 30;
// //ARRAYS
// let ninjas: string[]; //an array of strings. Undefined, no value initialized
// let ninjasInit: string[] = []; //an array of strings. Here initialized and can be pushed onto.
// // ninjas = [10, 21] //*fail, wrong type
// ninjas = ["Brian", "Zander"];
// //UNION TYPE - one or two or one of three types
// let mixed: (string | number)[] = []; //* | is used for multiple types
// mixed.push("test");
// mixed.push(22);
// // mixed.push(false) //*=> fail/linting error. because boolean isn't in the union ()
// let mixed3: (string | number | boolean)[] = []; //* | is used for multiple types
// mixed3.push("test");
// mixed3.push(22);
// mixed3.push(false); //*=> acceptable because boolean is not in the union ()
// //Union type infront of an array needs (), but if just a varaible no () are needed
// let uid: string | number;
// uid = 123;
// uid = "123";
// // uid = true; //*error, since boolean was not added to union type definintion
// //!OBJECT
// let ninjaOne: object;
// ninjaOne = { name: "Brian", age: 30 };
// // ninjaOne = 'string' //*nope! This is an object
// let ninjaTwo: {
//   name: string;
//   age: number;
//   beltColor: string;
//   isAboveGreenBelt: boolean;
// }; //*this is NOT the same as... let ninjaTwo = {}. This is an object. And it must have these properties of these types
// ninjaTwo = {
//   name: 'Brian',
//   age: 30,
//   beltColor: 'yellow',
//   isAboveGreenBelt: false,
// }; //*more or less properties than defined originally doesn't pass.
//!#6
//!#6 - Dynamic (any) types. primatives + objects
//!#6 - No errors. essentially undoes what TypeScript offers. Worsens intelicense
// let age: any = 25; //"let age be any type, but for now lets start it initialized with a value of 25"
// //The above is a one line version of the two following lines
// let age2: any;
// age2 = 4;
// let mixedAnyArr: any[] = [];
// mixedAnyArr.push("test");
// mixedAnyArr.push(123);
// mixedAnyArr.push(false);
// let anyObj: {
//   name: string;
//   age: any; //*<<<
// };
// anyObj = {
//   name: "brian", //fixed string
//   age: 23, //any
// };
// anyObj = {
//   name: "brian", //fixed string
//   age: false, //any
// };
// anyObj = {
//   name: "brian", //fixed string
//   age: "23", //any
// };
// !
// !
// ! - 7 Workflow & tsconfig
console.log('Brian');
