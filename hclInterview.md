```javascript
1. How does tree shaking remove unnecessary or unused code during the build process?  
2. What is the difference between DOM and BOM?  
3. What is an HTML React parser, and how does it work in React?  
4. What is the difference between browser routing and hash routing in React?  
5. Can a hacker access a JWT token stored in `sessionStorage`? What are the security implications?  
6. How do you write a test case to check if list items are present in the UI?  
7. How can you create a polyfill for the `Array.prototype.map` method in JavaScript?  
8. How do you find the missing element in the array `[1, 2, 4, 5, 6]`?  formula n*(n+1)/2
9. How do you check if the array `[3, 4, 5]` is a subarray of `[1, 2, 3, 4, 5, 6]`?  
10. What are some practical examples of DOM and BOM usage in JavaScript?
11. What is Throttling ? write example?.
12. What is XSS? What is CSRF?
13. saga what is call and fork methods?
14. do you have any webpack configuration experience?
15. how can stop third party ads in your application?
16. How can access store in saga file?
17. how can access store values in redux?

Let me know if you'd like answers or code examples for any of these!

https://chatgpt.com/share/676ec9e8-1c94-8012-9b78-25f60d54a3ea

let x;
let y = 10;

localStorage.setItem('data', x);

if(localStorage.getItem('data')){

y=20;
}
y; what is the output of this//

…...….....................….......

let x={
a:10;
}
const value1 = x.a.c //what will be the output 
const value2 = x.a.c.d // what will be the output 



*write test cases for this*

import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default DataFetcher;


*any mistake in this*
import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ num }) {
  const calculate = (number) => {
    console.log('Calculating...');
    return number * 2;
  };

  const result = useMemo(() => calculate(num), [num]);

  return <div>Result: {result}</div>;
}

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
      <ExpensiveCalculation num={number} />
    </div>
  );
}

export default App;

*any mistake in this code:*
import React from "react";
function NameList() {
  const names = ["Alice", "Bob", "Charlie"];
  return (
    <ul>
      {names.map((name) => (
        <li>{name}</li>
      ))}
    </ul>
  );
}
export default NameList;


