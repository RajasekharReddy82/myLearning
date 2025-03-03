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

