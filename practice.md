```javascript
const data = [
{key:"Sample 1", data: "data1"},
{key:"Sample 1", data: "data1"},
{key:"Sample 1", data: "data1"},
{key:"Sample 2", data: "data2"},
{key:"Sample 2", data: "data2"},
{key:"Sample 3", data: "data3"},
{key:"Sample 4", data: "data4"},
];

const dataResult = data.reduce((obj, cur) => {
if(obj && !obj[cur.key]){
obj[cur.key] = [cur]
}else {
obj[cur.key].push(cur)
}
return obj;
},{})

console.log(dataResult, 'result')




const memoizeOne=(fn)=>{
const map = new Map();
return (...args)=>{
const key = args.join('-');

if(map.has(key)){
console.log('cached')
return map.get(key);
}
const result= fn(...args);
map.set(key, result)
return result
}
}

const add = (a,b) =>a+b;
const addMemo = memoizeOne(add);
console.log(addMemo(1,3));
console.log(addMemo(1,4));
console.log(addMemo(1,3));
console.log(addMemo(1,5));
console.log(addMemo(1,6));
console.log(addMemo(1,4));
