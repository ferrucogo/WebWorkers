/* This is a JavaScript event listener. It is listening for a message to be sent to the worker. */
addEventListener('message', messageReceived);

/**
 * Get the factorial of a number and post it back to the caller
 * @param event - The event object that was passed to the callback function.
 */
function messageReceived(event) {
    let numberToReach = event.data;
    let factorialNumber = getFactorial(numberToReach);
    postMessage(factorialNumber);
}

/**
 * Calculate the factorial of a number
 * @param num - The number you want to find the factorial of.
 * @returns The factorial of the number passed in.
 */
function getFactorial(num) {
    var factorial = 1;
    for (var i = 2; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }