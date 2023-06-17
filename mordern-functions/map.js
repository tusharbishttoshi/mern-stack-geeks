let a=[1,2,3,4,5];

// print square of each element of array
// map => transform the contents of array
//  always returns a new array

const sqarray = a.map(function(num){
    return num*num;
});

console.log(a);
console.log(sqarray);


// diff b/w fo each and map

// map is returning new array while, for each is just iterating array and not return anthing