// // filter and find
// console.log('hello world from JS');
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let filter = arr.filter( (item,index )=> {
//     console.log('>>>check filter: item:',item,'index',index);
//     return item && item>5;
// });
// console.log(filter);


let arr2 = [
    {name: 'Nhi',  age: 28},
    {name: 'Nhị',  age: 24},
    {name: 'Long', age: 24},
    {name: 'Lành', age: 22}
]
let filter2 =  arr2.find((item1)=>{
    return item1 && item1.age == 22;
})
console.log(filter2); 
// let ages=[23,55,67,32,15,21];
// let age=ages.filter((a)=>{return a>23})
// function myFunction(a){
//     return a>22
// }

// console.log(age)