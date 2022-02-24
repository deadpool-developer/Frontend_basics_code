//Object -> classes -> encapsulation -> Inheritance

//OBJECT -> An object is an unique identity.
//CLASS -> Group of objects that have some common properties(blueprint of an object).

//Defination of class
function Student(firstName , lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.js = true;

}

//new keyword creates a new object out of the class Student
var mentor = new Student("Aditya" , "Saini")
var vikas = new Student("Vikas", "Kumar")
console.log(vikas)
console.log(mentor)

//////////////////////////////////////////////////////////////////////////////

//To update the properties of the class we use prototype

Student.prototype.print = function() {console.log(this)}

vikas.print()

//////////////////////////////////////////////////////////////////////////

//3 ways to create an object

var a = new Object() // converted like b
console.log(a)

var b = {}
console.log(b)

// var c = Object.create()
// console.log(c)

//////////////////////////////////////////////////////////////////////////

//creates the property of new object with the properties of another function
var coder = {isStudying: false , printFun : function(){
    console.log(`My name is ${this.name}. I am studying? : ${this.isStudying}`)

}}

const me = Object.create(coder)
me.name = "Aditya"
me.printFun()

//CLASSES in javascript

class A { //this gets converted into function and prototype is used
    print() {
        console.log("hello world!!")

    }
}

var a = new A()
a.print()

//CREATING A CLASS HAVING CONSTRUCTOR

class Students{
    constructor(name) {
        this.name = name
    }

    print() {
        console.log(this.name)
    }
}

var me1  =  new Students("Aditya")
me1.print()

//ENCAPSULATION IN JAVASCRIPT

//Wrapping up of properties and function within a single unit is called encapsulation
//Classes do the encapsulation themself

class Person { //to pas some properties to the class Person then we have to use the constructor
    constructor(name,id,add){ //It is called when a new object is made
        this.name = name
        this.id = id
        this.add = add
    } 
    add_address(add) {
        this.add = add;
    }
    getDetails() {
        console.log(`Name is ${this.name}, address is ${this.add}`);
    }
}

me3 = new Person("Aditya" ,"A-36,F-2,Shalimar Garden")
me3.getDetails()

//INHERITANCE IN JAVASCRIPT

//using extends keyword to inherit the properties of another class 


class Stud extends Person{
    constructor(name,id) {
        super(name) //this of the parent class -> When you want the property of the parent class
        this.id = id
    }

    print() {
        console.log(this.name)
    }
}


var ne = new Stud("Aditya" ,1)
ne.print()

//Prototype is same as extends
