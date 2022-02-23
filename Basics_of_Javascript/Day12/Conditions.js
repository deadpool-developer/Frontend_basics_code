//If and else in Javascript

function test(state,age){
    if(state == "Haryana" && age >= 18){
        console.log("You can vote")
    }
    else{
        console.log("You cannot vote")
    }
}

//AND OPERATOR IN JAVASCRIPT

var obj1 = {a:{b:1}}
console.log(obj1.a.b.c)
var obj2 = {}
//In javascript the AND(&&) operator is used to check the two or more condition.
//If all are true then the result is printed else false is return.
console.log(obj2 && typeof obj1 == "object" && obj1.a.b.c && true)

console.log(obj2 && typeof obj1 == "object" && true)
//Also while using the && operator, the last value is returned by the javascript -> true is printed for the above case.


//OR Operator in Javascript -> either this or this

function test1(state,age){
    if (state == "Haryana" || age >= 18){
        console.log("You can vote")
    }
    else{
        console.log("You cannot vote")
    }
}

//Ternary Operator in Javascript

var age = 10
console.log(age < 10 ? "You are less than 10 years old" : "You are more than 10 years old")
//(condition ? if : else)




