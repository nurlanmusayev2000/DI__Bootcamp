import  { createContext, useState } from "react";
import Component from "../component/dynamicComponent";

const DynamicContext = createContext();

function DynamicContextProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = ()=>{
    setCount(count-1)
  }

  return (
    <DynamicContext.Provider value={{ count, increment  , decrement}}>
        <Component/>
    </DynamicContext.Provider>
  );
}

export { DynamicContext, DynamicContextProvider };