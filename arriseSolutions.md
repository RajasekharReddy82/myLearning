```javascript

filter with any key values and also index number create dynamic

const filterObject = (arr, value) =>{


if(typeof value === 'number')  return arr[value];

return arr.find((i)=> Object.values(i).includes(value))

}

const arr = [

  { name: "Amir", id: "1" },

  { name: "Samlan", id: "2" },

  { name: "Shahrukh", id: "0" },

];

 
console.log(filterObject(arr, 0)); // { name: "Amir", id: "1" }

console.log(filterObject(arr, "Amir")); // { name: "Amir", id: "1" }

console.log(filterObject(arr, "0")); // { name: "Shahrukh", id: "0" }


//create customhook for debouncing 

import { useCallback, useRef } from "react";

export const useDebounce = (delay = 2000) => {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const debounce = useCallback((fun: (...args: any[]) => void) => {
    return (...args: any[]) => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => fun(...args), delay);
    };
  }, [delay]);

  return debounce;
};

import { useState } from "react";
import "./styles.css";
import { useDebounce } from "./hooks/useDebounce";

export default function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const { debounce } = useDebounce();

  const handleChange = debounce((e) => {
    setInputValue(e.target.value);
  });
  return (
    <div className="App">
      <input type="text" placeholder="enter" onChange={handleChange} />
      {inputValue}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

 
