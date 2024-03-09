example:
// const onWeBirthday = function(sick) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(!sick) {
//                 resolve(2);
//             }
//             else {
//                 reject(new Error("Kayo bị ốm"));
//             }
//         }, 5000)
//     })
// }
// /*onWeBirthday(false)
//     .then(week => {
//         console.log(week); // Sẽ hiển thị 2
//     })
//     .catch(error => {
//         console.log(error); // Hàm này không được chạy
//     })
//     .finally(() => {
//         console.log("Kết thúc"); // Hàm này sẽ chạy sau khi đã chạy then, catch
//     })
// */
// onWeBirthday(true)
// 	.then(week => {
// 		console.log(week); // Hàm này sẽ không được chạy
// 	})
// 	.catch(error => {
// 		console.log(error); // Lỗi Kayo bị ốm
// 	})
// 	.finally(() => {
// 		console.log("Kết thúc"); // Hàm này sẽ chạy sau khi đã chạy then, catch
// 	})

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

22222222
// let xinSoDt =()=>{
//     console.log('goi dien thoai xin so thang Long');
//     console.log('dang tim so dien thoai');
//     let find = new Promise((resolve,reject)=>{
//         let datimthay
//         setTimeout(() => {
//             datimthay=false;
//             if(datimthay){
//                 soDt=21435352;
//                 console.log(`day roi , so Long la:${soDt}`);
//                 resolve(soDt)
//             }else{
//                 reject('tao ko co so thang Long')
//             }
//         }, 3000);
//     })
//     return find
// }
// xinSoDt()
// .then((soDt)=>console.log(`da xin duoc so thang Long: ${soDt}`))
// .catch((loi)=>{console.log('khong biet');})
// .finally(()=>{console.log('done');})

//333333: 2 promises::

let xinSoDt =()=>{
    console.log('goi dien thoai xin so thang Long');
    console.log('dang tim so dien thoai');
    let find = new Promise((resolve,reject)=>{
        let datimthay
        setTimeout(() => {
            datimthay=true;
            if(datimthay){
                soDt=21435352;
                console.log(`day roi , so Long la:${soDt}`);
                resolve(soDt)
            }else{
                reject('tao ko co so thang Long')
            }
        }, 3000);
    })
    return find
}
//sacpin
let sacpin = ()=>{
    console.log('doi ti sac pin da');
    let chayPin
    let battery = new Promise((resolve,reject)=>{
        setTimeout(() => {
            chayPin = false;
            if (!chayPin){
                console.log('sac pin day, bat dau goi dien cho Nam')
                resolve()
            }else {
                reject('hu dien thoai roi khong goi duoc')
            }
        }, 2000);
    })
    return battery
}
//goi cho Nam
let goichonam = (soDt)=>{
    console.log(`ddang noi chuyen voi nam tai so ${soDt}`);
}
// thuc hien toan bo thao tac
xinSoDt()
    .then(soDt=>{
        sacpin(soDt)
        .then(soDt=> goichonam(soDt))
        .catch((loikhisacpin)=>{console.log(loikhisacpin)})
    })
    .catch((loikhongxinduoc)=>{console.log(loikhongxinduoc)})