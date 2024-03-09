function resolveAfter2Seconds(x) {  // in ra gia tri 10 sau 2s
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  async function f1() {
    const x = await resolveAfter2Seconds(10);
    console.log(x); // 10
  }
  
  f1();

  
// asyncAwait 1  ham time
const xinSoDt =()=>{
    console.log('goi dien thoai xin so thang Nam');
    console.log('dang tim so dien thoai');
    let find = new Promise((resolve,reject)=>{
        let datimthay
        setTimeout(() => {
            datimthay=true;
            if(datimthay){
                soDt=21435352;
                console.log(`day roi , so Nam la:${soDt}`);
                resolve(soDt)
            }else{
                reject('tao ko co so thang Nam')
            }
        }, 3000);
    })
    return find
}
//sacpin
let sacpin = (soDt)=>{
    console.log('doi ti sac pin da');
    let chayPin
    let battery = new Promise((resolve,reject)=>{
        setTimeout(() => {
            chayPin = false;
            if (!chayPin){
                console.log('sac pin day, bat dau goi dien cho Nam')
                resolve(soDt)
            }else {
                reject('hu dien thoai roi khong goi duoc')
            }
        }, 2000);
    })
    return battery
}
    //goi cho Nam
const goichonam = (soDt)=>{
    console.log(`ddang noi chuyen voi nam tai so ${soDt}`);
}
const hanhDong = async()=>{
    try {
        const soDt = await xinSoDt()
        try {
            await sacpin();
            goichonam(soDt)
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log(error);
    }
}
hanhDong()
