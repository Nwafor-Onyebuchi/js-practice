// Function declaration
function myfunc(a,b, ){
    return a+b
}

myfunc(4,6) // 10
myfunc(20,19) // 39

// Function expression
const myFunc = function(greet){
    return greet 
}

// Higher order function
function higherOderFunction(callback) {
    callback()
}

higherOderFunction(function(){
    // console.log('This is a higher order function')
})

// arrow functions
const myFunc2 = (a,b) => {
    return a+b
}

//  callback arrow functions 
// higherOderFunction(()=>console.log('Call back arrow function'))


/***
 * Operators
 * Arithmetic operator
 * +, -, /, *, %
 * 
 * comaprison operators
 * ==, ===, <, >, <=, >=
 * 
 * * logical operators
 * &&, ||
 */


 const fname = 'Blessing'
 const lname= 'Grace'
 const age = 23
 const stateOfOrigin = 'Osun'
 

/***
 * Conditional statments
 * if, if-else, if-else-if, switch
 * if(condition) {
 *  statements
 * }
 */

 if(age>25) {
     console.log('You are old enough')
 } else {
    console.log("You're too young") 
 }

 const color ='blue'

 switch(color){
     case 'green':
         console.log('My favorite')
         break
     case 'blue':
         console.log('No favorite')
         break

        
 }



  const getDayOfTheWeek = () => {
    switch (new Date().getDay()) {
        case 0:
          return "Sunday"
        case 1:
          return "Monday"
        case 2:
           return "Tuesday"
        case 3:
          return "Wednesday"
        case 4:
          return "Thursday"
        case 5:
          return "Friday"
        case 6:
            return "Saturday"
      }
  }

  console.log(getDayOfTheWeek())

  /** 
   * rewrite the getDayOfTheWeek function to regular function expression, instead of arrow function; also multiple if-else-if statments instead of switch statement 
   */




















