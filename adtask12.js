this.table='window table';
console.log(window.table); //this inside a global scope//

this.garage={
    table:'garage table',
    cleanTable(){      
        console.log(`cleaning  ${this.table}`);
    }
};
//console.log(this.garage.table);//data accessible from public property//
this.garage.cleanTable();
let johnsRoom={
    table:'johnsTable',
    cleanTable(){
        console.log(`cleaning ${this.table}`);
    }
};
//console.log(johnsRoom.table); //this inside an object//
johnsRoom.cleanTable();   

//using call function//

this.table='window table';
const cleanTable=function(soap){
    console.log(`cleaning ${this.table} using some ${soap}`);
}
this.garage={
    table:'garage table',
}
let johnsRoom={
    table:'johnsTable',
}

cleanTable.call(this, 'soap');
cleanTable.call(this.garage,'soap');
cleanTable.call(johnsRoom,'soap');


//using inner function//
this.table='window table';
const cleanTable=function(soap){
    const innerFunction=function(soap){
        console.log(`cleaning ${this.table} using some ${soap}`);
    }
    innerFunction.call(this,soap);
};
this.garage={
    table:'garage table',
}
let johnsRoom={
    table:'johnsTable',
}

cleanTable.call(this, 'soap');
cleanTable.call(this.garage,'soap');
cleanTable.call(johnsRoom,'soap');

//using arrow function
this.table='window table';
const cleanTable=function(soap){
    const innerFunction=(soap)=>{
        console.log(`cleaning ${this.table} using some ${soap}`);
    }
    innerFunction.call(this,soap);
};
this.garage={
    table:'garage table',
}
let johnsRoom={
    table:'johnsTable',
}

cleanTable.call(this, 'soap');
cleanTable.call(this.garage,'soap');
cleanTable.call(johnsRoom,'soap');

//using constructor
this.table='window table';
const cleanTable=function(soap){
        console.log(`cleaning ${this.table} using some ${soap}`);
    }

let createRoom=function(name){
    this.table=`${name}s room`
}
const jillsRoom=new createRoom('jill');
const johnsRoom=new createRoom('yash');*/


//this inside the classes
this.table='window table';
this.garage={
    table:'garage table',
}
class createRoom{
    constructor(name){
        this.table=`${name}s table`;
    }
    createTable(soap){
        console.log(`cleaning ${this.table} using some ${soap}`);
    }
}


const jillsRoom=new createRoom('jill');
const johnsRoom=new createRoom('yash');

jillsRoom.createTable('soap');
johnsRoom.createTable('soap');