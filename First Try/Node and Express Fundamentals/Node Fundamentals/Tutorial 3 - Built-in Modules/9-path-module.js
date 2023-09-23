 //PATH MODULES

 //It helps one to interact with the file paths 

 //for built in modules, no need to reference it with './'

 const path = require('path')

 console.log(path.sep)
 // returns the platform specific path separator used when defining a file path 
 // Windows - \
 // Mac - /

 const filePath = path.join('/content', 'subfolder', 'test.txt')
 console.log(filePath)
// it joins a sequence of paths (passed as strings) using the platform specific separator  then
// returns a normalized resulting path

// \content\subfolder\test.txt

const base = path.basename(filePath)
console.log(base)

// returns the base name for a file path here base text.txt

const absolute = path.resolve(__dirname,'content', 'subfolder', 'test.txt')
console.log(absolute)

// returns an absolute path by resolving s sequence of paths or path segments
// __dirname - global used to locate where the current file (app.js) is present

// C:\Users\sksha\Desktop\Express & Node\Express-Node-js\Node and Express Fundamentals\Node Fundamentals\Tutorial 3 - Built-in Modules\content\subfolder\test.txt