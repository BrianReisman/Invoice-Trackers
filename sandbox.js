//.ts is for typescript. This is not a JavaScript file and needs to be compiled down to it.
// in the terminal you can type tsc (typescript convert) sandbox.ts (this file "into") sandbox.js
// if sandbox.ts sandbox.js share the same name minus the extension, you can leave off the second one.
// if a .js file doesn't exist, it will be created
// $ tsc sandbox.ts sandbox.js
//* don't worry about error after converting since variables seem to be double declared
//*everytime you make a change in the .ts file you need to rerun tsc sandbox.ts
//*... unless you run the command $ tsx sandbox.ts -w (w is for watch)
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var log = console.log;
var character = "Brian";
var age = 30;
var isBlackBelt = false;
// character = 20;
character = "Ron";
// age = 'thirty'
age = 40;
// isBlackBelt = 'yes';
isBlackBelt = true;
var circ = function (diameter) {
    // const circ = (diameter: string) => {
    // const circ = (diameter: boolean) => {
    return diameter * Math.PI;
};
console.log(circ(7.5));
//*arrays
var names = ["Brian", "Ron", "Robin", "Steven"];
names.push("Bubby");
// names.push(4);
// names.push(true);
// names[0] = false;
var numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('Hello');
// let me = 'Brian';
// numbers.push(me)
var mixed = ["Ken", 4, "string", 8, 9];
mixed.push(44);
mixed.push("Text");
// mixed.push(false)
// mixed.push(true)
mixed[0] = 0;
mixed[1] = "string";
//* objects. Property types become fixed
var ninja = {
    name: "Brian",
    belt: "black",
    age: 30
};
ninja.age = 40;
ninja.name = "Test";
// ninja.age = "30";
// ninja.skills = ['fight', 'rest', 'sneaking']; //*new property cannot be added to existing object
ninja = __assign({}, ninja);
ninja = {
    name: "Patrick",
    belt: "blue",
    age: 32
};
