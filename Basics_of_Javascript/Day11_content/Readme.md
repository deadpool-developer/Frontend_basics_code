# Javascript Content Taught in Day11 Class

### There are 3 types of javascript-: 
    * Inline Javascript -> written in the HTML tag. 
    * Internal Javascript -> Written in the body with the script tag at last.
    * External Javacript -> It is written inside the script tag with the syntax as ==> <script scr=""></script> 

### Function-:
    * A function is a piece of code which has its own memory.
    * Keywords: Words that have special meaning in our program.
    * To define a function we use syntax as -> function(keyword) anything(name-of-function) [curly braces()]{}
    * To call a function , we simply use ->  name-of-the-function ()

### Javascript Works On Events
    * Event is like -> When you click something , hover over something, where you have to put some logic.
    * Each and every tag have the event onload() in which we can call the functions. (even the body have onload event)

### To write more than one line of javascript , we use back ticks ` `
    * document.getElementById(app).innerHTML = `Hello my name is Aditya Saini`

### External javascript is prefered to use.
    * Developers use external file of javascript.

### In javascript, everything is just a dot(.) away
    * document.getElementById("app").style.color = "blue";
    * document.getElementById("app").style.backgroundColor = "black";
    * document.getElementById("app").style.display = "inline-block";

### To declare a variable in javascript
    * var person
    * var can store anything -> char, string, number, float ,function, object ,etc.

### loops in javascript
    * To repeat a procedure again and again.
    * for(var x in ___){}

### Always seperate the jobs when writing code
    * To print the name with name onclick of the button.
    
      /**
       * Click of button
       *        - Attach a click event to button
       *        - Create a function
       *        - Call it inside event
       * Full Name of person inside id app
       *        - Get that div with that id app
       *        - Inside that div put the name
       *            - Use a loop to get the values
       *            - Create a string of values with space in between
       *                - var with empty string (txt)
       *                - values from loop I have to put in the above string
       *                - give this string to innerHTML
       */