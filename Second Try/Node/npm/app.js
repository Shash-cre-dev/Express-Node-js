// NPM or Node Package Manager

// It allows us to 
// Reuse our own code in another project
// Use code written by other developers
// Share own code with other developers

// NPM calls a reusable code as package
// A package is a folder that contains a JS code
// Other name for a packages - modules or dependencies
// All three are used interchangeably

// There is no quality control in NPM Registry
// Anyone can publish anything

// good packages have high number of downloads

// When we install Node we also install npm
// This provides an access to npm global commands

// npm --version (npm --v)

// We can install packages in two ways
// local dependency - use it only in a particular project (like this)
// npm i <packageName> (i or install)

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// More used is local dependency with the arrival of npx

// package.json
// package.json - manifest file (stores important info about project/package)
// Three Approaches to Create package.json
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// Whenever a new package or dependency is added it makes it way to package.json
// where a dependencies property is created with name and version of that specific dependency.
// Also node_modules folder is created by Node which stores the info about all dependencies.
// Some packages use mode than one dependencies, they will also get installed in node_modules automatically.

// Always install your external packages before you start working with them
// Here for example lodash installed via npm i lodash (no use in this course, just for reference)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems) // [ 1, 2, 3, 4 ]

// WHY package.json is IMPORTANT for sharing code with Developers

// We donot push node_modules folder to any of the desired github repos, as it may take
// a lot of space.
// Add /node_modules to .gitignore file so that git ignores node_modules before pushing
// .gitignore is a file that specifies what to ignore by git

// So if a new developer want to run your code, without node_modules he has no idea of which dependencies to install
// So this is where package.json comes to help. The dependencies property in package.json has names of all the dependencies that
// is required to run the project. So the new developer has to do npm install or npm i to install all the desired dependencies for the project 
// and create the node_modules 

// package.json saves a lot of space by preventing to push node_modules in a repo

// npm i nodemon -D or npm i nodemon --save-dev // -D stands for devDependencies (Used throughout the Course)
// for restarting our application
// nodemon can be used during development
// for dependencies in production - dependencies