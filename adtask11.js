/*a()

b()
function a(){
console.log('inside a');
}
var b = function (){
    console.log('inside b');
} output:'a called' and b is not defined,here function b acts like a variable and memory is allocated before creating it is.e., undefined(in hoisting);
*/

//function decleration//
/*function a(){
    console.log('a callled');
}
a();

//function statement//
var b=function(){
    console.log('b called');
}
b();// the major difference between theses two is hoisting//

//function statement is same as function decleration//

//anonymous function//
function(){

}
//a function without a name is known as anonymous function,these are used when functions are used as values.

//difference between arguments and parameters//
//argument:The values that are declared within a function when the function is called are known as an argument.
//parameter:The variables that are defined when the function is declared are known as a parameter.

*/
//first class function//
//a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.//


/*var b=function(param1){
console.log(param1);
}
function xyz(){

}
b(xyz);*/


function add(num1){
    return(num2)=>{
        return num1+num2;
    }
}
console.log(add(5)(15));


let multiply=function(x){
    return function(y){
        console.log(x*y);
    }
}
let mulBythree=multiply(3);
mulBythree(10);

function makeTea(){
return function addmilk(){
    console.log('milkadded');
    return function boilmilk(){
         console.log('boil milk now')
         return()=>{
            console.log('add tea leaves');
         }
    }
}
console.log(makeTea()()());
}