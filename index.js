const a = 20;
const b = 3;
var c;
(c)=> a+b;
console.log(typeof a)

//test
let arr1=[1,2,3,4,5,6,7,7,6,5,4,3,2,1]
let showArray=[...new Set(arr1)]
console.log(showArray)

let d =(a,b)=>{
    return a+b
}
console.log(d)
let language = "JavaScript";
let text = "";

for (let x in language) {
    text += x + " ";
}