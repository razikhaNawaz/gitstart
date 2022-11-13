function y(){
    //var a=10;//
setTimeout(() => console.log(a), 1000)
console.log('Done Coding')
}
y();//output:done coding and a is undefined,if var a was defined it would have took 1 sec to access a,as javascript doesnot wait for so directly we can access 'done coding'//*/

function y(){
    //var a=10;//
setTimeout(() => console.log(a), 0)
console.log('Done Coding')
}
y();//output:'done coding' a is undefined if a was defined it took 0sec to access a value.//*/
 

function y(){
for(var i=1;i<6;i++){
setTimeout(() => console.log(i ), i * 1000)
}
console.log('Done Coding')
}
y(); //output:'done coding' 6 6 6 6 6 6 with 1 sec gap.setTimeout function in JavaScript usually takes a callback function as an argument. A callback function is a function that is executed after another function finishes running. In this case, it will run after for loop finishes. At this point, i is already 6 when the console.log([i]) is about to be executed. Due to the closure of JavaScript, the console.log has access to the i =6 which is defined as an outer layer of the setTimeout.


function y(){
for(let i=1;i<6;i++){
setTimeout(() => console.log(i ), i * 1000)
}
console.log('Done Coding')
}
y();//output:done coding and 1 2 3 4 5(1sec),The let keyword from ES6 creates a separate scope for the code block that allows for loop to print the consecutive variables.


const fun=(arr)=>{
    var count=0;
    return()=>{
        console.log('hello'+arr[count])
        count++;
    }
}
const name=fun(['ram','shyam'])
name();
name();