var txt = "abcbdsefs"
console.log(txt.length)  //dot(.) means that is an object
console.log(typeof txt)   //but we are getting string as a type
console.log(txt.slice(2,6))  //slice(start,end) -< positive & negative both
console.log(txt.substring(2,6)) //substring(start,end) -> positive values only
//slice and substring is similar but the difference is that substring donot accept the negative values but slice do
console.log(txt.substr(2,6)) //It gives the number of character from any position -> substr(2(from where),5(how many character))

//replace in string
var text = "Please check website"
console.log(text.replace("website","devsnest"))
console.log(text)

//Casing 
console.log(text.toUpperCase())

//concatenation
console.log(txt.concat(" ",text))  //using concat function
console.log(txt + " " + text)     //normal using plus operator

//trim method

var toTrim = "               hello              "
console.log(toTrim)
console.log(toTrim.trim()) // trims the spaces from the string and return the string without the spaces

//If you want any character from some position
console.log(text.charAt(2))
console.log(text[2]) //work similar to charAt

//To get ASCII code

console.log(text.charCodeAt(2))

//if we want the starting/last index of any work in the string having multiple words 

console.log(text.indexOf("check")) // if not present -1
console.log(text.lastIndexOf("website"))
console.log(text.search("check")) //similar to indexOf