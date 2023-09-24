const path = require('path')

// return a platform specific separator
console.log(path.sep) // \ 

// returns a normalized joined path - argument must be string
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath) // \content\subfolder\test.txt

const filePath2 = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath2) // \content\subfolder\test.txt

// returns the basename
const base = path.basename(filePath)
console.log(base);

// returns an Absolute Path - accepts a sequence of paths or path segments
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute) // C:\Users\sksha\Desktop\Express & Node\Express-Node-js\Second Try\node\Built-in_Modules\content\subfolder\test.txt
// __dirname provides the path where this current path.js is located