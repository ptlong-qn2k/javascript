// console.log("hello world from JS");

// let sum =(a,b,callback)=>{
//     let tong = a+b;
//     // setTimeout(() => {  // sau 5s se chay callback
//     // callback(tong);   
//     // }, 5000);
//     let i=0;
//     let timer =  setInterval(() => { //cứ 1s in ra 1 lan
//         callback(tong);               //  đây là function
//         i++;
//         if(i===5){
//             clearInterval(timer);
//         }
//     }, 1000);   
// }
// let printsum =  (message)=>{
//     console.log("check sum 12+34=",message);
// }
// sum(12,34,printsum)
// settimeoutxsxs



function conthoanco(callback){
    setTimeout(() => {
        console.log('con tho an co uong nuoc');
        callback();
    }, 2000);
}
function chuivaohang(){
    console.log('con tho da chuoi vao hang sauuu khi an xong');
}
conthoanco(chuivaohang);