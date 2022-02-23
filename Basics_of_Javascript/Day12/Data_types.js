//javascript is dynamically tight which means we do not have to define the type of the variable
function test() {
  var a = 1; //Number
  var b = 1.02; //Floating Number
  var c = "ABC"; //String
  var d = "A"; //Character
  var e = `I am a multi-line string and closed in back ticks`; //Multiline string
  var f = [1, 2, 3, 4, 5]; //Array
  var g = ["aa", "bb", "cc"]; //String as an array
  var h = [{ name: "Aditya", age: 21 }]; //Objects
  //In javascript most of the thing is object.
  //OBJECT: key:value pair is an object
}

//How to access the elements in the array

function arr() {
  arr = [3, 2, 4, 5];
  console.log(arr[2]); //using the index
  //4 ---> index ---> key
  var arr1 = { 0: 3, 1: 2, 2: 4, 3: 5 }; //both are the same representation
  console.log(arr1[2]); // Same answer
}
arr();

//Typeof in javascript
function test1() {
  var a = 1; //Number
  var b = 1.02; //Floating Number
  var c = "ABC"; //String
  var d = "A"; //Character
  var e = `I am a multi-line string and closed in back ticks`; //Multiline string
  var f = [1, 2, 3, 4, 5]; //Array
  var g = ["aa", "bb", "cc"]; //String as an array
  var h = [{ name: "Aditya", age: 21 }]; //Objects
  //In javascript most of the thing is object.
  //OBJECT: key:value pair is an object

  console.log(typeof a);
  console.log(typeof b);
  console.log(typeof c);
  console.log(typeof d);
  console.log(typeof e);
  console.log(typeof f);
  console.log(typeof g);
  console.log(typeof h);
}
test1()

