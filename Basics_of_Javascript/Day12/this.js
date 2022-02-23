function test() {
    var person = {
        firstName: "Aditya",
        lastName: "Saini",
        fullName: function() {
            return this.firstName + " " + this.lastName
            // console.log( this.firstName + " " + this.lastName)

        },
        printThis: function() {
            console.log("This is: ",this)
        }
    }
    person.printThis()
    person.fullName()

}
test()


//In javascript , this refers to the whole object itself.
//In javascript, maximum things are object