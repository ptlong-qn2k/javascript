// cách khởi tạo một / nhiều đối tượng dễ dàng
function User(firstName,lastName,avatar){   //let User = function(firstName,lastName,avatar){}
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}
let author =  new User('Thanh','Long','avatar');
let user = new User('Thanh','Lanh','avata');
author.title = 'tao thuoc tinh title cho author'  // định nghĩa thêm thuộc tính
user.comment = 'coconmua nao doi minh di qua'
console.log(author);
console.log(user);
console.log(author.getName());
console.log(user.getName());
