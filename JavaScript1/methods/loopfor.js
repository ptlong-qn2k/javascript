for (let i = 1; i<=1000;++i){
    console.log(i);
}
let array = [
    'HTML',
    'C++',
    'JAVASCRIPT',
    'JSNODE',
    'LONG',
];
for(let i=0;i<=array.length-1;i++){
    console.log(array[i]);
}

//for in  với string, array, object
let mystring='dhiaudgiushdus'
let MYarray=['Long','LANH',24,22]    
let myInf = {
    name: 'Thanh Long',
    age: 24,
    add: 'Quang Nam,VN',
    high: '1m72'
}

for(let key in myInf){ //trả về key của từng đối tượng trong mảng, chuỗi,ob
    console.log(key);
}
//for/of với ,string (array,object)

let arr = {
    name: 'Thanh Long',
    age: 24,
    add: 'Quang Nam,VN',
    high: '1m72'
};
console.log(arr);
for ( let value of mystring ){
    console.log(value);
}
for (let OB of Object.keys(arr)){
    console.log(OB);  // console.log(arr[OB]);
}
////do while:
let i =0;
let isSuccess = false;
do{
    i++;
    console.log('Nạp Thẻ Lần: ',i);
    if(false){
        isSuccess = true;
    }
} while (!isSuccess&&i<=3);

//vòng lặp lồng nhau
let myAray =[
    [1,2],
    [3,4],
    [5,6]
];
for (let i=0;i<myAray.length;i++){
    for(let j=0;j<myAray[i].length;j++){
        console.log(myAray[i][j]);
    }
}