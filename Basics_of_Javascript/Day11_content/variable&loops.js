//Creating an object with person's name
var person = { firstName: "Aditya", lastName: "Saini" };
var txt = "";

// If we want to show up the firstName and the lastName in the txt we use loops

for (var x in person) {
  console.log(x); //This will prints the keys of the person variable
}

//When x is dynamic we use person[x]
for (var x in person){
    console.log(person[x]); //This will prints the values of the person variable
}

//When x is not dynamic and it is static we use person.firstName or person.lastName to access the values
for (var x in person) {
    console.log(person.firstName)
    console.log(person.lastName)
}