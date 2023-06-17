// whter every elemet is passing the conditions or not , if yes returns true else false

const transaction = [100, 200, -400, -800, 8000];

// whetehr any amout is negative

const negval = transaction.every((amt)=>{
    return amt< 0;
});
console.log(negval);