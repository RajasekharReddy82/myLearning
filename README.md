# mergeSort custom

function sort(right, left){
let resultArr = [];

while(left.length && right.length){
resultArr.push(left[0] < right[0] ? left.shift(): right.shift());
}
return [...resultArr, ...left, ...right]
}

function mergeSort(arr){
if(arr.length <= 1) return arr;
const index = Math.floor(arr.length/2);
const left = arr.slice(0, index);
const right = arr.slice(index);

return sort(mergeSort(left), mergeSort(right));
}
console.log(mergeSort([7,4,9,0,2,5,7,88,23]))
