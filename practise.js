let counter = 1;
const callbackFunction = function () {
 
  timeoutId = setTimeout(callbackFunction, 1000);
 
  counter += 1;
 
  if (counter > 10) {
    clearTimeout(timeoutId);
  }
};
 
let timeoutId = setTimeout(callbackFunction, 1000)