```javascript

const arr = [1,5,2,1,5,3,1,4,6,3, 6,6,6,6, 10,10,10,10,10,10,10]

const maxRepeatNum = (arr)=>{
const result = {};
let mostFrequentNum = null;
let maxNumber = 0;

for(let value of arr){
result[value] = (result[value] || 0) + 1
}

 for (let value in result) {
        if (maxNumber < result[value]) {
            maxNumber = result[value];
            mostFrequentNum = Number(value);
        }
   }

console.log(mostFrequentNum);

return result;
}


console.log(maxRepeatNum(arr))


................................

console.log('start');

setTimeout(()=> console.log('callback'),0);

promise.resolve().then(()=> console.log('promise'))

console.log('end');

Javascript
hosting, closures, event loop, why react, react hooks, class compo and lifecycle methods, redux, generators
