// prototype: nguyên mẫu.
function User(firstName,lastName,avatar){   //let User = function(firstName,lastName,avatar){}
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

User.prototype.className = 'F8';   //tạo thuộc tính className cho User, thì user1,2 đều có thuôcj tính đó
User.prototype.getClassName = function(){     // thêm thuộc tính sau khi tạo đối tượng
    return this.className;
}
var user1 = new User('Thanh','Long','avatar');
var user2 = new User('Thanh','Lành','avatar');
console.log(user1.className);
console.log(user2.getClassName());
