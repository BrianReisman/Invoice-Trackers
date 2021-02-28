//.ts is for typescript. This is not a JavaScript file and needs to be compiled down to it.
// in the terminal you can type tsc (typescript convert) sandbox.ts (this file "into") sandbox.js
// if sandbox.ts sandbox.js share the same name minus the extension, you can leave off the second one.
// if a .js file doesn't exist, it will be created
// $ tsc sandbox.ts sandbox.js
//* don't worry about error after converting since variables seem to be double declared
//*everytime you make a change in the .ts file you need to rerun tsc sandbox.ts
//*... unless you run the command $ tsx sandbox.ts -w (w is for watch)

const log = console.log;

let character = "Brian";
let age = 30;
let isBlackBelt = false;

// character = 20;
character = "Ron";

// age = 'thirty'
age = 40;

// isBlackBelt = 'yes';
isBlackBelt = true;

const circ = (diameter: number) => {
  // const circ = (diameter: string) => {
  // const circ = (diameter: boolean) => {
  return diameter * Math.PI;
};
console.log(circ(7.5));

//*arrays
let names = ["Brian", "Ron", "Robin", "Steven"];

names.push("Bubby");
// names.push(4);
// names.push(true);
// names[0] = false;

let numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('Hello');
// let me = 'Brian';
// numbers.push(me)

let mixed = ["Ken", 4, "string", 8, 9];
mixed.push(44);
mixed.push("Text");
// mixed.push(false)
// mixed.push(true)
mixed[0] = 0;
mixed[1] = "string";

//* objects. Property types become fixed
let ninja = {
  name: "Brian",
  belt: "black",
  age: 30,
};
ninja.age = 40;
ninja.name = "Test";
// ninja.age = "30";
// ninja.skills = ['fight', 'rest', 'sneaking']; //*new property cannot be added to existing object

ninja = {
  ...ninja,
  // skills: "test"
};

ninja = { //must match exact same shape
  name: "Patrick",
  belt: "blue",
  age: 32,
  // skills: []
};
