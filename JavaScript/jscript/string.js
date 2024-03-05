// in ra mot object
let person ={
    firstName :'Thanh',
    lastName : 'Long',
    age : 24,
    couuntry: 'Viet Nam'

};
document.write(person.firstName, " ", person.lastName," nam nay toi " ,person.age,' tuoi ',"quoc tich: ",person.couuntry);
console.log(person.firstName, " ", person.lastName," nam nay toi " ,person.age,' tuoi ',"quoc tich: ",person.couuntry);
// string
let stringtest='UIGDAIGFIUYGFUIYSDG';
let stringtest2='dahgdiuadauhfcuac';
console.log(stringtest.length);

/* tring length
String.charArt(3) :trả lại ký tự ở vị trí 3
String.charCodeAt(3) : trả lại mã của kí tự ở vị trí 3
String.at(2)     : giống charArt()
String[123...]    
String.slice(start,end)  :trả về chuỗi tính từ start tới end, ko tính end. slice(x)
String.substring(start,end) : gần giống slice()
String.substr(start,length) :trích xuất chuỗi với vị trí và độ dài
String. toUppcaseCase(),toLowerCase()
String.concat(" ",string2,,.....)
String.trim(),  trimStart(), trimEnd() :loại bỏ khoảng trắng ở cả 2 bên chuỗi hoặc từng bên
String.padStart(5,"ds"), padEnd(6,"as") : đệm một chuỗi từ đầu hoặc từ cuối đến khi đủ độ dài
String.repeat(3)    : nhân thêm 2 bản sao ,trả về môtj chuỗi mới
String.replace(), replaceAll(), vd: test.replace('cat','dog'), phân biệt chữ hoa thường
String.split()  : chuyển đổi chuỗi thành mảng
*/

// String.indexOf("ahs") : trả về chỉ mục(vị trí ) của lần xuất hiện đầu tiên của 1 chuỗi trong chuỗi
//     ***trả về -1 nếu không tìm thấy chuỗi
// String.lastIndexOf("locate") : trả về chỉ mục xuất hiện cuối cùng của một văn bản đã chỉ định
// String.search('locate'); : tìm kiếm chuỗi cho 1  chuỗi, trả về trị trí như indexof
// Template String..
