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
