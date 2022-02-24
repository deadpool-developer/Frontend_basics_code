//anything in the real world is an object -> that have some characterstics

var animal ={eats: true}
var rabbit = {jumps : true}

//now to add a property to rabbit we simply do following things:

//adding property using objects
 rabbit.fly = false

 console.log(rabbit) //{ jumps: true, fly: false }

 //adding property using array
rabbit['swim' ] = false
console.log(rabbit)  //{ jumps: true, fly: false, swim: false }

