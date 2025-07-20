```javascript
const obj = {
  a: {
    b: {
      c: {
        d:{
          e:6
        }
      }
    },
    d: 2
  }
};

const flattenObject = (obj, prifix='', result={}) =>{
for(let key in obj){
  const value = obj[key];
  const newPrifix = prifix ? `${prifix}.${key}` : key;

  if(typeof value === 'object' && !Array.isArray(value)){
    flattenObject(value, newPrifix, result)
  } else result[newPrifix] = value 
}
return result;
}

console.log(flattenObject(obj)); 
// Output: { 'a.b.c': 1, 'a.d': 2 }
