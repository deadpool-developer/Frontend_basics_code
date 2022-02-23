//////////////////////////////////////////////////////////////////////////////////////////////////

//Special functions to iterate an array
function test3(){
    arr = [1,2,3,4,5]
    for(n in arr){
        console.log(n)
    }

    //Wherever there is a dot that means forEach is written inside the arr.
    arr.forEach(function(n){ 
     //has a for inside it and whenever there is a for you do not except a return from it.
        console.log(n)
    })

    //Map method -> If we want to update the array we use map as return the value
    arr.map(function(n) {
        console.log(n)
    })
 
    //Difference between forEach and Map is map returns the value 
}
test3()

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//map return the updated value of the array but do not change the intial array values
function test(){
    var num = [2,1,5,4,6,7]  // [ 4, 2, 10, 8, 12, 14 ]
    var result = num.map(function(n){
        return n*2 //important to write the return while using the map
    })
console.log(result)
}
test()

//////////////////////////////////////////////////////////////////////////////////////

//If we want to perform the same operation with using the forEach we have to create the new arrayy and push the elements inside it

function test2(){
    var a = [2,1,5,4,6,7]
    var result_of_a = []
    a.forEach(function(n){
        result_of_a.push(n*2)

    })
    console.log(result_of_a)
}
test2()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
