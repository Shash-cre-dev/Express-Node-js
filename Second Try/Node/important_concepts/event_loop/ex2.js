setInterval(() => {
    console.log('hello world')
}, 2000);
console.log('I will run first')
// process stays alive unless killed with CTRL + C
// it is an unexpected erorr

// Output
// I will run first
// hello world
// hello world
// hello world
// hello world
// hello world
// hello world
// hello world
// hello world
// hello world
// hello world
// hello world
// .
// .
// .
// .

// setInterval runs on CB with every interval of 2000