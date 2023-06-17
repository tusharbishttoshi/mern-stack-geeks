//  reduce -- iterate through contents of your array and return one single output

let a = [1,3,3,4,5];
var sum = 0;
for (var i=0; i<a.length; i++){
    sum =sum+a[i];
}
console.log(sum);

let sum_red = a.reduce((sum, curr)=>{
    return sum+curr;
},0);

console.log(sum_red);