/* This is a JavaScript event listener. It is listening for a message to be sent to the window. */
addEventListener('message', messageReceived);

/**
 * Get the prime number that is closest to the number passed in
 * @param event - The event object that was passed to the listener.
 */
function messageReceived(event) {
    let numberToReach = event.data;
    let primeNumber = getPrime(numberToReach);
    postMessage(primeNumber);
}


/**
 * Given a number, return an array of prime numbers from 2 to the number
 * @param number - The number of primes to return.
 * @returns An array of prime numbers.
 */
function getPrime(number) {
    let array = Array.from({length: number - 2}, (v, i) => i + 3);
    return array.reduce((p, c) => p.some(element => c % element === 0) ? p : [...p,c], [2]);
}