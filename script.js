/**
 * Get the value of the input element with the name `inputNumber`
 * @returns The value of the input field.
 */
function inputValue() {
    const input = document.getElementsByName('inputNumber')[0];
    return input.value;
}

/**
 * Clear the contents of the element with the specified id.
 * @param id - The id of the div element to clear.
 */
function clearScreen(id) {
    let par = document.getElementById(id);
    par.innerHTML = '';
}

/**
 * It gets the prime numbers from the worker and displays them in the result-prime div.
 */
function getPrime() {
    clearScreen('result-prime');
    let loader = document.getElementById('loader');
    loader.style.display = 'inline-block';

    const workerPrime = new Worker("./wwPrime.js");
    workerPrime.addEventListener('message', (event) => {
        loader.style.display = 'none';
        let primeNumber = event.data;
        let par = document.getElementById('result-prime');
        const result = document.createTextNode("Result: ");
        par.appendChild(result);
        for (const prime of primeNumber) {
            const node = document.createTextNode(' ' + prime + ' ');
            par.appendChild(node);
        }
    })
    workerPrime.postMessage(inputValue());
}

/**
 * It calculates the Fibonacci sequence.
 */
function getFibonacci() {
    clearScreen('result-Fibonacci');
    let loader2 = document.getElementById('loader2');
    loader2.style.display = 'inline-block';

    const workerFib = new Worker("./wwFibonacci.js");
    workerFib.addEventListener('message', (event) => {
        loader2.style.display = 'none';
        let fibonacciSequence = event.data;
        let par = document.getElementById('result-Fibonacci');
        const result = document.createTextNode("Result: ");
        par.appendChild(result);
        for (const number of fibonacciSequence) {
            const node = document.createTextNode(' ' + number + ' ');
            par.appendChild(node);
        }
    });
    workerFib.postMessage(inputValue());
}

/**
 * It calls the worker function to calculate the factorial of the input value.
 */
function getFactorial() {
    clearScreen('result-factorial');
    let loader3 = document.getElementById('loader3');
    loader3.style.display = 'inline-block';

    const workerFact = new Worker('./wwFactorial.js');
    workerFact.addEventListener('message', (event) => {
        loader3.style.display = 'none'
        let factorialNumber = event.data;
        let par = document.getElementById('result-factorial');
        const result = document.createTextNode("Result: ");
        par.appendChild(result);
        const node = document.createTextNode(' ' + factorialNumber + ' ');
        par.appendChild(node);
    });
    workerFact.postMessage(inputValue());
}

