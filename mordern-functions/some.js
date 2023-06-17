// some ==> if one or more elemets of the arrray is satisfying condition , it returns true, else false

const transaction = [100, 200, -400, -800, 8000];

// whetehr any amout is negative

const negval = transaction.some((amt)=>{
    return amt< 0;
});
console.log(negval);