//////////////////////////////////////////////////////////////////////////

//While loop in javascript

function test(){
    var a = [1,2,3,4,5,6] //6 length
    var result = []  //0 length
    var i = 0
    while(result.length < a.length) {
        var temp = a[i];  //a[0] = 1
        result[i] = temp*2
        i++
    }
console.log(result)
}
test()

//Other way of doing the above thing
function test1(){
    var a = [1,2,3,4,5,6] //6 length
    var result = []  //0 length
    var i = 0
    while(result.length < a.length) {
        var temp = a[i];  //a[0] = 1
        result.push(temp*2)
        i++
    }
console.log(result)
}
test1()

/////////////////////////////////////////////////////////////////////////////////////

//pop method -> delete from the last

function test3(){
    var a = [1,2,3,4,5,6] //6 length
   a.pop()   //delete 6 from the last
   console.log(a)
}
test3()

/////////////////////////////////////////////////////////////////////////////////////

//do-while loop in array

function test4(){

    var text  = []
    var i = 0;
    do{
        text += i
        i++
    }
    while(i<5){
        console.log(text)
    }
}
test4()

//////////////////////////////////////////////////////////////////////////////////////////
