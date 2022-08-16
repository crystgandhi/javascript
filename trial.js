/*var obj={name: "john", age: "45"}

function printName(id, profession){
    return "My name is " + this.name + "."+ " I am " + this.age +" years old." + " My id is " + id + 
    ". My profesiion is " + profession
}
const bindFunc= printName.bind(obj)
console.log(bindFunc(64,"professor"))
console.log(bindFunc(60,"assistant professor"))
___________________________________________________________________________
const age1=10
var person={myname:"Johnsmith", 
age1:30,
getAge:function(){
    return this.age1
},
};
var person2 ={age1: 24}
console.log(person.getAge())
console.log(person.getAge.call(person2))
--------------------------------------
var status="Happy";
setTimeout(() => {
  const status="Normal";
    const data = {
        status:"sad",
     getStatus () {
            return this.status;
        },
    };
    console.log(data.getStatus())// sad
    console.log(data.getStatus.call(this)); }, 0)*/
   // -----------------------------------
    console.log(Math.max.apply(null, [3,5,6,9,2,1]))

    

