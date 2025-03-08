```javascript
find common words in string word

function findCommonChars(str) {
    let words = str.split(' '); // Split string into words
    if (words.length < 2) return []; // If there are less than 2 words, return empty

    let commonChars = [...words[0]].filter(char => words[1].includes(char)); // Find common chars
    return [...new Set(commonChars)]; // Remove duplicates
}

var str = "rajasekhar reddy";
console.log(findCommonChars(str)); // ['r']



//////.......................
typeof a
const a = [1, 3];
console.log(typeof a); // "object"
console.log(Array.isArray(a)); // true


///..................
delete the 4 element and what will be the output
const a = [1, 2, 3, 4, 5, 6];

delete a[3];  // Removes the element at index 3 (which is 4)
console.log(a);  // [1, 2, 3, empty, 5, 6]
console.log(a.length); // 6 (length remains the same)

