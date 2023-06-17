// filter --> takeout contents of array based on condition.
// returns new array

let a=[1,2,3,4,5,6,7,8];

// print even number
const even = a.filter((val)=>{
    return val%2===0;
});

console.log(even);

// higher order functions are reusables, we can define them anywhere and call them multiple times.

// map changes the contents of array
// filter checks the contents of array based on condition