```javascript

** Program to find longest word in a given sentence ?**
const sentence = 'my name is rajasekhar';
const words = sentence.split(' ');

let maxLength = 0;
let longestWordIndex;

for (let index in words) {
    console.log(index, maxLength, words[index].length);

    if (maxLength < words[index].length) {
        maxLength = words[index].length;
        longestWordIndex = index;
    }
}

console.log(maxLength, words[longestWordIndex]);

**How to check whether a string is palindrome or not ?**
// Method 1: Using built-in functions (Concise)
const isPalindrome = (inputString) => {
    return inputString === inputString.split('').reverse().join('');
};

// Method 2: Using a loop (Efficient for large strings)
const checkPalindrome = (inputString) => {
    let reversedString = '';
    for (let character of inputString) {
        reversedString = character + reversedString;
    }
    return reversedString === inputString;
};

// Test cases
console.log(isPalindrome('RajaajaR'));  // true
console.log(checkPalindrome('RajaajaR'));  // true
console.log(isPalindrome('hello'));  // false
console.log(checkPalindrome('hello'));  // false

**Write a program to remove duplicates from an array ?**

// Method 1: Using Set (Concise and Fast)
const removeDuplicatesUsingSet = (array) => {
    return [...new Set(array)];
};

// Method 2: Using Loop (Efficient for maintaining order)
const removeDuplicatesUsingLoop = (array) => {
    const uniqueElements = [];

    for (let element of array) {
        if (!uniqueElements.includes(element)) {
            uniqueElements.push(element);
        }
    }
    return uniqueElements;
};

// Test cases
console.log(removeDuplicatesUsingSet([7, 7, 6, 6])); // Output: [7, 6]
console.log(removeDuplicatesUsingLoop([7, 7, 6, 6])); // Output: [7, 6]

**Program to find Reverse of a string without using built-in method ?**

const reverseString = (inputString) => {
    let reversedString = '';

    for (let character of inputString) {
        reversedString = character + reversedString; // Prepending each character
    }
    return reversedString;
};
console.log(reverseString('raja')); // Output: 'ajar'

**generateFibonacciSeries**
const generateFibonacciSeries = (num) => {
    if (num <= 0) return []; // Handle invalid cases
    if (num === 1) return [0]; // Handle case where num is 1

    const sequence = [0, 1];

    for (let i = 2; i < num; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
};

// Test Cases
console.log(generateFibonacciSeries(7)); // Output: [0, 1, 1, 2, 3, 5, 8]

** Find the factorial of given number ?**
const factorialRecursive = (num) => {
    if (num < 0) return "Factorial is not defined for negative numbers"; // Handle negative cases
    if (num === 0 || num === 1) return 1;  // Base case
    return num * factorialRecursive(num - 1);
};

console.log(factorialRecursive(5));  // Output: 120



