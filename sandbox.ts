//.ts is for typescript. This is not a JavaScript file and needs to be compiled down to it.
// in the terminal you can type tsc (typescript convert) sandbox.ts (this file "into") sandbox.js
// if sandbox.ts sandbox.js share the same name minus the extension, you can leave off the second one.
// if a .js file doesn't exist, it will be created
// $ tsc sandbox.ts sandbox.js
//* don't worry about error after converting since variables seem to be double declared
//*everytime you make a change in the .ts file you need to rerun tsc sandbox.ts
//*... unless you run the command $ tsx sandbox.ts -w (w is for watch)

const log = console.log;

const character = "Bri";
log(character);

const inputs = document.querySelectorAll('input');
log(inputs)

inputs.forEach(input => {
  log(input)
})