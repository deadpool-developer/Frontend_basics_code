// To give similar property to all the object, javascript uses something called proto

var animal = {eats: true}
var rabbit = {jumps: true}

//if i want each and every rabbit to have all the properties of animal kingdom

console.log(rabbit.__proto__ = animal)
console.log(rabbit) // rabbit property jumps is not altered but we can now acces the eats property of animal class
console.log(rabbit.eats)
//{ eats: true }
//{ jumps: true }
//true

// animal is the parent of the rabbit object


//Another example of __proto__

var animal = {eats:true , walk() {alert("Animal Walks")}}
var rabbit = {jumps:true , __proto__: animal}
console.log(rabbit.walk()) // gives the alert box


//Prototype in javascript  -> Agar kisi class ko extend karna hai(bina usse update kiye) then we use the prototype

//Prototype add property to the already defined class
//Proto is used to transfer the whole object into another object

String.prototype.show = function() {alert("Added the show function in the String")}
//This method will be found now in every string


