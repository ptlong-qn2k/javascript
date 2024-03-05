console.log('hello world from JS');

/* Là hàm (function) được truyền qua đối số ,được gọi lại (trong hàm nhận đối số) */
function myDisplayer(sth){
    console.log(sth);
}
let myCalculator=(num1,num2,)=>{  //arow function
    let sum=num1+num2;
    return sum;
}
let result= myCalculator(12,34);
myDisplayer(result);
// 2.
// function myDisplayer(something) {
//     console.log(something);
//   }
  
// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
//   myCalculator(5, 5, myDisplayer);
// 3.
function doHomework(subject, callback) {
  setTimeout( function(){
      console.log(`Bắt đầu làm bài tập ${subject}.`);
      callback();
  }, 5000);
  
}

function alertFinished(){
  console.log('Làm bài tập xong!');
}
doHomework('Toán', alertFinished);
