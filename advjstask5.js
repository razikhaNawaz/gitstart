
/*console.log(a)

console.log(b);

let a =5;

var b =6;

console.log(b);// reference error//
const b=20;
b=1000;
console.log(b); //type error//

const b;
b=1000;
console.log(b); //syntax error//

let a=10;
let a=100;
console.log(a); // syntax error//

console.log(a);
let a=100; //reference error//
console.log(a);

var a = 5;
console.log(b);*///reference error

/*var a = 5;
var b = 6;
console.log(this.b);// 6//
console.log(window.b)//6//
console.log(window.a)//undefined bcoz seperate memory space is created that iz script so not obtained in window//
console.log(this.a);*///same here also//



//iterate through an object//
var scores={
    "india":"250",
    "england":"300",
    "afghanistan":"310"
}
console.log(Object.keys(scores));//keys got:india england, afghanistan//
Object.keys(scores).forEach(key=>{
    console.log(scores[key]);//value obtained of keys 250,300,310//
})