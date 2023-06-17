const users = [
    {
        firstName:"Tushar", lastName:"Bisht", age:"25"
    },
    {
        firstName:"Vikash", lastName:"kadhyan", age:"27"
    },
    {
        firstName:"SUmNA", lastName:"kUMAR", age:"35"
    },
    {
        firstName:"Sumit", lastName:"Sharma", age:"45"
    }
];

// const filterUser = users.filter((users)=>{
//     return users.age> 30;
// });

// const firstNames = filterUser.map((user)=> {
//     return user.firstName +" "+ user.lastName;
// });

// console.log(firstNames);

const filterUser = users.filter((us)=>{
    return us.age> 30;
}).map((usname)=>{
    return usname.firstName + " "+ usname.lastName; 
});
console.log(filterUser);