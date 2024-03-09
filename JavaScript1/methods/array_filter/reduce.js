console.log('hello world from Js');
//array.reduce(function(total,currenValue,currenIndex,arr),innitialValue)
let data =[2,5,34,25,15,32];
let res = data.reduce((total,value)=>{         // use arrow function
    return total+value;
})
console.log(res);

// truyền 1 giá trij innitialValue cho hàm reduce()
let data2 = [11,21,23,55,67,32,3];
let reducer = (total,value)=> {return total+value}
result = data2.reduce(reducer,20)
console.log(result);