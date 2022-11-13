var a=10;
function b(){
    var x=10;
}
console.log(window.a);


var a = 2;
var c = 2;
function b(){
var x = 2;
var c = 4
console.log(c)
}
console.log(a); output:2 as variable a is defined within the global scope
console.log(this.a); output:2 if executed in window object. it shows aoutput as undefined if executed in terminal bcoz doesnt represent the window.
console.log(this.c); output:2 as variable a is defined within the global scope
console.log(this.x); output:undefined it just signifies the reference that is b, the value inside is not obtain
console.log(window.a); output:2 as variable a is defined within the global scope.. window===this
console.log(window.x); output:undefined
console.log(b()); output:undefined, bcoz function doesnot return the value.