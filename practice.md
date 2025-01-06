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
