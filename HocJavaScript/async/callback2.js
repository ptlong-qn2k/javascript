6666666
// cách sửa đúng sử dungj hàm gọi lại Callback
// có 2 tác vụ tốn thời gian thực hiện
let xinsdt=(callback)=>{
    let soDt;
    console.log('goi dien xin sdt');
    console.log('dang tim so dien thoai');
    setTimeout(() => {
        soDt = 21347194;
        console.log('da tim duoc so dien thoai');
        callback(soDt,goilai)
    }, 2000);
}
const sacPin = (sdt,callback2)=>{
    console.log('doi ti sac pin da');
    setTimeout(() => {
        console.log('Sac pin xong goi lai cho  dien thoai')
        callback2(sdt);      // callback2  chinh la ham goi lai
    }, 3000);

}
let goilai=(dt)=>{
    console.log(`dang goi lai vao so dien thoai ${dt}`);

}
xinsdt(sacPin)  //soDt,sdt,dt ket noi voi nhau qua callback1,callback2



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