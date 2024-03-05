6666666
// cách sửa đúng sử dungj hàm gọi lại Callback
// có 2 tác vụ tốn thời gian thực hiện
function xinsdt(callback){
    let soDt;
    console.log('goi dien xin sdt');
    console.log('dang tim so dien thoai');
    setTimeout(() => {
        soDt = 21347194;
        console.log('da tim duoc so dien thoai');
        callback(soDt,goilai)
    }, 2000);
}
function give(sdt) {
        console.log(`day la so dienthoai: ${sdt}`);
    }
const sacPin = (soDt,callback2)=>{
    console.log('doi ti sac pin da');
    setTimeout(() => {
        console.log('Sac pin xong goi lai cho  dien thoai')
        callback2(soDt);
    }, 2000);

}
let goilai=(soDt)=>{
    console.log(`dang goi lai vao so dien thoai ${soDt}`);
}
xinsdt(sacPin)

// callback hell
// setTimeout(function()  {
//     console.log(1);
//     setTimeout(function() {
//         console.log(2);
//         setTimeout(function() {
//             console.log(3);
//             setTimeout(function() {
//                 console.log(4);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000)