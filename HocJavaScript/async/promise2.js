

1111111111
    
var promise = new Promise(
    function(resolve,reject){
        // logic
        // thanh cong: resolve()
        // that bai : reject()
        resolve()
        
    }
);
promise
    .then(function(){
        return 1
    })
    .then(function(a){
        console.log(a);
        return(2)
    })
    .then(function(a){
        console.log(a)
    })
    .catch(function(){
        console.log('failare');
    })
    .finally(function(){
        console.log('done!')
    })

// 22222222222
// function sleep(ms) {
//     return new Promise(function(resolve){  
//         setTimeout(resolve,ms);
//     });
// }
// sleep(1000)
//     .then(function(){
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(function(){
//         console.log(2);
//         return new Promise(function(resolve,reject){
//             reject('co loi');
//         });
//     })
//     .then(function(){
//         console.log(3);
//         return sleep(1000);
//     })
//     .then(function(){
//         console.log(4);
//         return sleep(1000)
//     })
//     .catch(function(err){
//         console.log(err);
//     })
// 333333333333//
// Promise.resolve
// Promise.reject
// Promise.all
// promise = new Promise(
//     function(resolve,reject){
//         resolve('success!');
//     }
// );
// promise
//         .then(function(result){
//             console.log('result: ',result);
//         });
// 44444444
//  var promise1 = new Promise(
//     function(resolve){
//         setTimeout(function(){
//             resolve([1]);
//         }, 1000);
//     }
//  );
//  var promise2 = new Promise(
//     function(resolve){
//         setTimeout(function()  {
//             resolve([2,3]);
//         }, 3000);
//     }
//  );
//  Promise.all([promise1,promise2])
//     .then(function(result){
//         console.log(result);
//         let result1=result[0];
//         let result2=result[1];
//         console.log(result1.concat(result2)); 
//     })
// 4444444
// const promisesExp = ()=>{
//     return new Promise((resolve,reject)=>{
//        // resolve({name:"Long", tuoi:24})
//         resolve('get some data')
//     });
// }
// promisesExp()
//     .then(data=>{
//         console.log(data);
//     })
//     .catch(Error=>{
//         console.log(Error);
//     })
