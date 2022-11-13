class student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.mrks=marks;
    }
    setPlacementAge(minAge){
        return minMarks=>{
            if(this.marks>minMarks && this.age>minAge){
                console.log(this.name+"is ready for placements");
            } else {
                console.log(this.name+"is not ready for placements");
            }
        }
    }
}
const yash=new student('yash',20,70);
const vaibhav=new student('vaibhav',13,35);
yash.setPlacementAge(30)(80);
vaibhav.setPlacementAge(20)(40);