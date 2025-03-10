```javascript
// const a = [1,2,4,5];
// const b = [7,8,9]

// const concat = a.concat(10);

// console.log(concat)

const curry = (a) =>{
    return (b)=> b ? curry(a+b): a; 
}

console.log(curry(2)(3)())

// const closures = () =>{
//     const a = 5;
//     const b = 10;
//     const childFn = ()=>{
//         return a+ b
//     }
//    return childFn();
// }

let obj = {
    name: "ankit",
    rollNo: 5455,
    id: {
        name: "ankit"
    },
    class1: {
        name: "ankit",
        67: {
            name: "ankit"
        }
    }
}

const changeName = (obj, name)=>{
    
    for(let key in obj){
    if(typeof obj[key] === 'object') {
        return changeName(obj[key], name)
    } else{
        if(key === 'name') {
            return {...obj,  obj[key] = name}
        } else return obj
    }
    }
}
console.log(changeName(obj, 'Rajasekhar'))


useEffect(()=> {
    //mounting

    return ()=>{
        //unmounting
    }
},[])//uppdating

https://www.programiz.com/javascript/online-compiler/

const [count, setCount] = useState(0);
function increment() {
  setCount(count + 1);
  setCount(count + 1);
  setCount((prev)=> prev+1);
}

// 1

const initialState = {};
export const Context = createContext(initialState)

const Provider = (children)=>{
    return (
        <Context.Provider value={initialState}>
        {children}
        </Context.Provider>
        )
}

<Provider>
<ParentCompo />
</Provider>

const context = useContext(Context);

const page = lazyLoading(()=> import("/path"))
const StyledComponent = styled.button`
font-size: 10px
`


{items.map((item) => (
  <div key={item.name}>{item.name}</div>
))}


cy.get([data-cy = "increment"]).click();
expect(value here)


https://nextleap.app/online-compiler/reactjs-programming

https://jsonplaceholder.typicode.com/posts


import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    const fetchApi = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(result.data as any);
    };
    fetchApi();
  }, []);

  const handleValue = (value) => {
    const filterResults = data.filter((obj) => obj.title.includes(value));
    setValue(value);
    setData(filterResults);
  };

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => handleValue(e.target.value)}
        placeholder="EnterText"
      />
      {data?.map((obj) => {
        return (
          <ul key={obj.key}>
            <li>{obj.title}-'title'</li>
            <li>{obj.body}-'body</li>
          </ul>
        );
      })}
    </>
  );
};
export default App;
