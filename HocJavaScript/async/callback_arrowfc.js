console.log("hello world from JS");

let sum =(a,b,callback)=>{
    let tong = a+b;
    // setTimeout(() => {  // sau 5s se chay callback
    // callback(tong);   
    // }, 5000);
    let i=0;
    let timer =  setInterval(() => { //cu 1s in ra 1 lan
        callback(tong);
        i++;
        if(i===5){
            clearInterval(timer);
        }
    }, 1000);   
}


let printsum =  (message)=>{
    console.log("check sum 12+34=",message);
}
sum(12,34,printsum)
// settimeoutxsxs