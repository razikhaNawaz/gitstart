<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
    //call//
var obj={num:2};
var addToThis=function(a){
    return this.num+a;
}
console.log(addToThis.call(obj,3));

//apply//
var obj={num:2};
var addToThis=function(a,b,c){
    return this.num+a+b+c;
}
var arr=[1,2,3];
console.log(addToThis.apply(obj,arr));

var obj={num:2};
var addToThis=function(a,b,c){
    return this.num+a+b+c;
}
var arr=[1,2,3];
var bound=addToThis.bind(obj);
console.log(bound(1,2,3));

var student={age:20};
var addToThis=function(){
    return this.age;
}

var bound=addToThis.bind(student);
console.log(bound());//output:20//

//currying using bind method//
let multiply=function(x,y){
    console.log(x*y);
}
let multiplyByTwo=   multiply.bind(this,2);
multiplyByTwo(3);//output 6//


//currying usin closures//
let multiply=function(x){
    return function(y){
    console.log(x*y);
}
}
let multiplyByTwo=multiply(3);
multiplyByTwo(3); //output 9//


    </script>
</body>
</html>


