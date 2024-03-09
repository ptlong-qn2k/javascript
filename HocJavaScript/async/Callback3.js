// function myDisplayer(some){
//     console.log(some);
// }
// function myCalculater(num1,num2) {
//     let sum = num1+num2;
//     return sum
// }
// let result = myCalculater(23,45);  //khi chưa sử dụng callback
// myDisplayer(result);
// 2222222222
// function myDis (some) {
//     console.log(some);
    
// }
// function myCal (num1,num2){
//     let sum=num1+num2;
//     myDis(sum);
// }
// myCal(12,34)
// 333333333//CALLBACK

// function Cal(num1,num2,Callback){
//     sum=num1+num2;
//     Callback(sum);
// }
// function Display(some){
//     console.log(some);
// }
// Cal(23,55,Display)

// 4444444
// function myFunction(param){
//     // if (typeof param=== 'function'){
//         param('pham thanh long');
//         ""
//     // }
// }
// function myCallback(value){
// console.log('value: ',value)
// }
// myFunction(myCallback);
// 55555555
// function program1(callback){
//     setTimeout(function(){
//         console.log('lay tien');
//         callback()
//     },2000)
// {}
// }
// function program2(){
//     console.log('mua do');
// }
// program1(program2());
666666666
// cách sửa đúng sử dungj hàm gọi lại Callback, khai báo hàm kiểu cũ
function xinsdt(callback){
    let soDt;
    console.log('goi dien xin sdt');
    console.log('dang tim so dien thoai');
    setTimeout(() => {
        soDt = 21347194;
        console.log('da tim duoc so dien thoai');
        callback(soDt)
    }, 2000);
}
function give(sdt) {
        console.log(`day la so dienthoai: ${sdt}`);
    }
xinsdt(give);
