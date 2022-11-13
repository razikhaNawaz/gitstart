var getA=function(a){
    return a;
};//normal function
var getA=a=>a;
console.log(getA(1)); //output:1 fat arrow function

let square=a=>a*a;
console.log(square(2));//output 4

let square=(a)=>{return a*a}
console.log(square(4));//16 or

var a=5;
let square=()=>{return a*a};
console.log(square());

let mult=(a,b)=>{return a*b};
console.log(mult(2,4));//output 8

var x=function(){
    this.val=1;
    setTimeout(()=>{
        this.val++;
        console.log(this.val);
    },1)
}
var y=new x(); //output:2

var x=(_ _ _n)=>{
    console.log(n[0])
};
x(1,2,3); //output:1

