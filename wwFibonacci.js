/* Adding an event listener to the `window` object. The event listener is listening for the `message`
event. */
addEventListener('message', messageReceived);

/**
 * Get the fibonacci sequence for the number passed in
 * @param event - The event object that was passed to the onmessage function.
 */
function messageReceived(event) {
    let numberToReach = event.data;
    let fibonacciSequence = getFibonacci(numberToReach);
    postMessage(fibonacciSequence);
}

/**
 * It returns an array of the first n Fibonacci numbers.
 * @param number - The number of Fibonacci numbers to return.
 * @returns An array of numbers.
 */
function getFibonacci(number) {
    let array = [];
    let n1 = 0;
    let n2 = 1;
    let n3;
    for (let i = 0; i < number; i++) {
        array.push(n1);
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
    return array;
}
