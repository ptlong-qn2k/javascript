let sourses = [
    {
        id: 1,
        name: 'javascript',
        coin: 0
    },
    {
        id: 2,
        name: 'html, css',
        coin: 1,
    },
    {
        id: 3,
        name: 'ruby',
        coin: 1,
    },
    {
        id: 4,
        name: 'ruby',
        coin: 6,
    },
    {
        id: 5,
        name: 'ruby',
        coin: 9,
    },
    {
        id: 6,
        name: 'ruby',
        coin: 12,
    },
];

function myFunction (value,index,array){
    // console.log(value);
    return{
        id:value.id,
        name:`khoa hoc: ${value.name}`,
        coin:value.coin,
        index:index,
        array:array,
    }
}
    
let newCourses = sourses.map(myFunction)
console.log(newCourses);
let arraynew = sourses.map((iFunction=value=>value.name))
console.log(arraynew);
// let myFunction=(value,index,array)=>{console.log(value)};
