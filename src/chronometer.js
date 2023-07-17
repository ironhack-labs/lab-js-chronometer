// The lab covers OOP and  OOP  asynchronous JavaScript.

// Feedback: I still don't feel comfortable with OOP



//Classes in JavaScript are a way to create objects with shared properties and methods.

//The constructor() function is a special method within a class that is automatically called when you use the "new" keyword to create a new object of that class.
class Chronometer {       
  constructor() {
    this.currentTime = 0;   // so these are the new keywords? - yes, currentTime and intervalId are the keywords 
    this.intervalId = null;  // 0 and null are the values
    // two instance variables are created: currentTime and intervalId. The currentTime variable is set to 0, and intervalId is initially set to null.
  }


// THE BELOW BLOCK OF CODE I AM NOT SURE I UNDERSTAND :(


  start(printTimeCallback) {     // how do I know this is a function - because theres a if?
    this.intervalId = setInterval(() => {  // function1
      this.currentTime++;  // this counts seconds 
      if (printTimeCallback) { // if  printTimeCallback === true  // if statement checks if the printTimeCallback parameter is provided and truthy. If it is, it means that a callback function for printing the time has been passed as an argument.

        printTimeCallback();  //function2 // you want it to appear... If the printTimeCallback is provided, the function is called by invoking printTimeCallback().
        
        
      }
    }, 1000); // called every second

  }

  //functions are theoretical



  getMinutes() {
     return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60) // 
  }





  computeTwoDigitNumber(value) {

        const stringValue = String(value); //String method changes the value to string
        if (stringValue.length===1){
         return "0" +stringValue;  // adding a 0 in front of any nr that is two digits
        } // But why +stringValue; ? - because we need to have two digits! okey
        return stringValue   // returns the two digits
       }




    
  

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0; // when I am not using this. then what does that mean???????? Why doesnt it work?
  }

  // I didnt do the below one / copied from a friend  

  //Please note when I press split on the stop watch I get : 
  // getMinutes() { // ... your code goes here return Math.floor(this.currentTime / 60) }:getSeconds() { return Math.floor(this.currentTime % 60) }
    //in the middle of the screen

    
    split() {
      const formattedMinutes = this.computeTwoDigitNumber(this.getMinutes);
      const formattedSeconds = this.computeTwoDigitNumber(this.getSeconds);
  
      return `${formattedMinutes}:${formattedSeconds}`;
    }
  }
