//array.every(): not change, tra ve true/false
const ages=[22,44,53,12,,45];
function check(age) {
    return age>15;
}
let kiemtra = ages.every(check);
console.log(kiemtra);

//array.fill(value,start,end);      ghi đè lên mảng bban đầu
const names=['Nhi','nhi','Long','Lanh'];
const arrayfill=names.fill('lam',1,2);
console.log(arrayfill);

//array.filter()  : tạo mảng mới chứa các phần tử vươtj qua bài kiểm tra
// khonglamthay doi mang cu
const numbers=[12,44,53,3,2,5,63,23];
const over15 = numbers.filter(myFunction);
function myFunction(value,index,array){
    return value>15;
}
console.log(over15);

//array.foreach(item,index,array): chạy một hàm cho từng phần tử trong mảng
const number = [65, 44, 12, 4];
number.forEach(myFunction)   

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}
console.log(number);

//hoặc tính tổng các phần tử:
let sum = 0;
const numbe = [65, 44, 12, 4];
numbe.forEach(myFunction);
function myFunction(value) {
  sum += value;
}
console.log(numbe);
//array.reduce(total,value,index,aray):  chạy 1 hàm trên phần tử mảng,
//không thay đổi mảng gốc
const numb = [15.5, 2.3, 1.1, 4.7];
const lamtron=numb.reduce(getSum,0)
function getSum(total, num) {
    return total + Math.round(num);}
console.log(lamtron);
//array.map(value,index,array): taoj mảng mới bằng cách thực hiênj một hàm trên mảng cũ



