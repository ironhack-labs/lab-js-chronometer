![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS Chronometer

## Introduction

In this lab, we are going to create a [chronometer](https://www.dictionary.com/browse/chronometer). Chronometers are very commonly used in sports - car racing, athletics, etc. We will use classes to organize and abstract our code and the JavaScript timers to implement the chronometer functionality. A perfect opportunity to sharpen our OOP skills and practice working with asynchronous JavaScript.

Let's get started!



## Requirements

- Fork this repo.

- Clone this repo.

  

## Submission

- Upon completion, run the following commands:

```shell
$ git add .
$ git commit -m "Solve lab"
$ git push origin master
```

- Create a Pull Request so that your TAs can check your work.



## Tests, tests, tests!

This LAB is equipped with unit tests to provide automated feedback on your lab progress. You'll start by working with the tests and using them in conjunction with the iteration instructions.

Please, open your terminal, change directories into the root of the lab, and run `npm install` to install the test runner. Next, run the `npm run test:watch` command to run automated tests.  

```shell
$ cd lab-javascript-chronometer
$ npm install
$ npm run test:watch
```

<br>

Open the resulting `lab-solution.html` file with the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension to see the test results.

**Note:** The testing environment and the `lab-solution.html` page don’t allow printing the _console logs_ in the browser.  To see the console.log outputs you write in any JavaScript file, open the `index.html` file using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension.

<br>



## Instructions

To check how the final version of the chronometer should work, check this **[demo](https://sandrabosk.github.io/demo-chrono/index.html)**.



<br>



### Iteration 0: Getting Started

<br>

#### The Stopwatch UI

To let you focus on the JavaScript portion of the exercise and on developing the chronometer functionality, we created the *stopwatch* UI for you.

To start, **open the `index.html` page in the browser**. You should see the *stopwatch* as shown in the below example.  This way, you can visually check the functionality of your chronometer as you progress with the exercise.

<details>
  <summary> Click here to see the image</summary>

<br>

![](https://education-team-2020.s3-eu-west-1.amazonaws.com/web-dev/labs/chronometer.png)
</details>

<br>

The *stopwatch* markup, styles, and DOM functionality are located in the files `styles/style.css`, `index.html`, and `javascript/index.js`. These files already include all the needed code, and **you should not modify them**.

<br>

#### The Chronometer

**You will do all your work in the `javascript/chronometer.js` file.** 

The goal of the exercise is to finish implementing the `Chronometer` class and its methods. The class and the methods are already defined in the `chronometer.js` file but have no functionality.



The `javascript/index.js` file depends on the methods of the `Chronometer` to display the time on the *stopwatch* and includes a `Chronometer` instance as follows: 

> ```js
> // javascript/index.js
> const chronometer = new Chronometer(); // instance of the Chronometer
> 
> // ...
> ```

The methods of the `Chronometer` are not yet functional. Your task will be to implement them in the following iterations.



<br>



### Iteration 1: The `Chronometer` class

Let's implement the `Chronometer` class following the below requirements:

- The class (`constructor`) should not take any arguments.

- The class (`constructor`) should initialize two properties for each new chronometer object:

  -  `currentTime`, with the initial value set to `0`.

  - `intervalId`, with the initial value set to `null`.




Once done, check the test results and verify that your code is passing the checks.



<br>



### Iteration 2: The `start` method

##### `start()` method

- should be declared on the `Chronometer` class
- should receive *one* argument (`printTimeCallback`)
- should increment by `1` the `currentTime` property every 1 second
- should invoke the passed `printTimeCallback` every 1 second



When called, the `start` will begin keeping track of time by running a function in 1-second intervals and incrementing the number of seconds stored in the property `currentTime` by `1`.

You should use the `setInterval` method to achieve this. The *interval id* that is returned by calling `setInterval` should be assigned to the `intervalId` property, so this way, we will be able to clear it later on when we need to stop the timer.

Additionally, the `start` method should accept a function as an argument. Let's name it `printTimeCallback`. Once `start` is invoked, the said `printTimeCallback` should be executed in 1-second intervals, meaning inside the `setInterval`.



:bulb: _Hint 1_: Keep in mind, if you pass a function declaration to the `setInterval()` method (by writing `setInterval(function () {/* */})`), the keyword `this` will not refer to the object _chronometer_, but to global scope. To enable referencing the chronometer by accessing `this`, pass a function expression (a so-called arrow function) to the `setInterval()` method (by writing `setInterval(() => {/* */})` instead).



<br>



### Iteration 3: The `getMinutes` method

##### `getMinutes()` method

- should be declared on the `Chronometer` class

- should not receive any arguments

- should return the number of entire *minutes* passed

  

We're storing the number of seconds elapsed in the `currentTime` property. However, we will need to calculate how many minutes have elapsed.

The `getMinutes` method should take no arguments, and it should return the _number_ of minutes that have passed as an integer, as a whole number.
To calculate the minutes, divide the current time by 60 and use the `Math.floor()` method to get a rounded number.



<br>



### Iteration 4: The `getSeconds` method

##### `getSeconds()` method

- should be declared on the `Chronometer` class
- should not receive any arguments
- should return the number of entire *seconds* passed



Previously, we implemented the method that returns the number of minutes passed. What if we want to get the number of seconds passed after the start of the current minute?

The `getSeconds` method should return the number of seconds that have passed after the start of the current minute.

For example, if the property `currentTime` holds `75`, `getSeconds` should return `15`. If `currentTime` holds `210`, `getSeconds` should return `30`, and so on.

You can use the [modulo operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder) (current time % 60) to get the number of remaining seconds.



<br>



### Iteration 5: The `computeTwoDigitNumber` method

##### `computeTwoDigitNumber()` method

- should be declared on the `Chronometer` class

- should receive *one* argument (`value`)

- should return a string

- should always return a string of length 2

  

Our *stopwatch* has a screen that displays the number of minutes and seconds passed. However, sometimes the `getMinutes` and `getSeconds` methods return a single-digit number. Let's create a helper function that will convert any number into a two-digits string representation.

The `computeTwoDigitNumber` method should take a `value` argument, a number, and return a string. The received number should be *padded* with 0s when the value is a single-digit number. 

For example, if `computeTwoDigitNumber` is called with the number `7`, it should return a string `"07"`. If called with the number `36`, it should return a string with the value of `"36"`.

:bulb: _Hint_: You can achieve this dynamically by using the `.slice()` method.





We'll use the `computeTwoDigitNumber` method in the following iterations to format the values before  displaying them on the *stopwatch*.



<br>



### Iteration 6: The `stop` method

##### `stop()` method

- should be declared on the `Chronometer` class

- should not receive any arguments

- should call `clearInterval`

- should clear the existing interval timer

  

We can start our chronometer, but we still need to implement a method to stop it.

When invoked, the `stop` method should clear the interval with the id that we had stored in the `intervalId` property. It's as simple as that.

:bulb: _Hint_: Use `clearInterval`.



<br>



### Iteration 7: The `reset` method

##### `reset()` method

- should be declared on the `Chronometer` class

- should not receive any arguments

- should reset the value of the `currentTime` property to `0`

  

The `reset()` will reset our chronometer. To do this, we need to set the value of the `currentTime` property back to `0`, and that's it!



<br>



### BONUS - Iteration 8: The `split` method

##### `split()` method

- should be declared on the `Chronometer` class
- should not receive any arguments
- should return a string
- should return a string showing the minutes and seconds in the *"mm:ss"* format



We might want to extract a formatted timestamp of the time elapsed since the chronometer was started. We call this "obtaining the split time".

The `split` method should take no arguments, and it should return a string where the time since the start is formatted as "_mm:ss_". Internally, the `split` method can use the previously declared methods `getMinutes`, `getSeconds`, and `computeTwoDigitNumber`.




<details>
  <summary> Click here to see the image </summary>

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_a5c9687f25bd710b2e7658ee6d997174.png)
    
</details>



<br>



### BONUS - Iteration 9: Milliseconds

Our chronometer is now fully functional, and we can use it to measure how much time we spend on each exercise. Now, what if we want to calculate our time in a race? We would need to be more accurate with our chronometer. How can we be more accurate? By adding milliseconds!


Finally, in JavaScript, we will have to add all the logic to show the milliseconds in the clock. You will also have to add these milliseconds to the split counter.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_82e9d1fd5976a3f98bb1382f2385f6a1.png)

Your goal is to create the JavaScript logic to:

- Be able to count the milliseconds.

- Show the milliseconds going forward.

- Show the milliseconds when you capture a split time.

- Clear the milliseconds when the Reset button is clicked.

  

**Note:** This slightly more complicated iteration will require you to modify the *timer interval* and update the calculation logic for *minutes*, *seconds*, and *milliseconds*. Additionally, Implementing the milliseconds feature will result in some tests (that you have previously passed) breaking.




<br>

**Happy coding!** :heart:

