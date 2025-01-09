// mergeSort custom

const sort = (left, right)=>{
const result = [];
while(left.length && right.length){
result.push(left[0]<right[0]? left.shift(): right.shift())
}
return [...result, ...left, ...right]
}

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    const index = Math.floor(arr.length / 2);
    const left = arr.slice(0, index);
    const right = arr.slice(index);

    return sort(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([7, 4, 9, 0, 2, 5, 7, 88, 23]));

//debounce
let timer;

const debouncing = (value, time = 5000) => {
  // Clear the existing timer
  clearTimeout(timer);
  // Set a new timer
  timer = setTimeout(() => {
    console.log(value);
  }, time);
};

//infinite currying
function add(a) {
    return function (b) {
      if (b !== undefined) {
        return add(a + b); // Continue currying
      }
      return a; // Stop currying and return result
    };
  }
  
  // Example Usage
  console.log(add(1)(2)(3)(4)()); // Output: 10
  console.log(add(5)(10)(15)()); // Output: 30
//arrowFn
const infiniteCurrying = (a) => (b) => (b !== undefined ? add(a + b) : a);

// Example Usage
console.log(infiniteCurrying(1)(2)(3)(4)()); // Output: 10
console.log(infiniteCurrying(5)(10)(15)()); // Output: 30

//print 1 to 5 using var and currying
function printNumber(num) {
    return function () {
      console.log(num);
    };
  }
  
  for (var i = 1; i <= 5; i++) {
    setTimeout(printNumber(i), i * 1000); // Currying ensures each `i` is captured correctly
  }
  // custom flat array
const nestedArray = [1, [2, [3, [4, 5]]], 6];

function flatArray(array){
const result = [];
for(let i =0; i < array.length; i++){
if(Array.isArray(array[i])){
result.push(...flatArray(array[i]));
}else{
result.push(array[i])
}
}
return result;
}
console.log(flatArray(nestedArray));
