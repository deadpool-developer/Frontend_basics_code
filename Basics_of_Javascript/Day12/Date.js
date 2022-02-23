var a = new Date()
console.log(a)

var b  = new Date().getDate()
 console.log(b)

var c = new Date().getHours()
console.log(c)

var d = new Date().getMinutes()
console.log(d)

////////////////////////////////////////////////////////////////////////////////////////////////

//Switch Case in javascript

function test(){
    var day = ""
    switch (new Date().getDay()){  //type is number
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thrusday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        default:
            day = "Day"

    }
    console.log(day)

}

test()

//////////////////////////////////////////////////////////////////////////////////

//break example

function test2()
{
    for(var i=0;i<1000;i++){
        if(i == 10)
        {
            break;
        }
        else{
            console.log(i)
        }
    }
}

test2()

/////////////////////////////////////////////////////////////////////////////////////

