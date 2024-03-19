import { useState,useRef, useEffect } from "react";

function App() {
    // 1.DOM reference
    //2.Hold the previous state
    //3.hold mutable value prevent rerendering of the component

  const [ name , setName] = useState("")
  const [ counter , setCounter ] = useState(0)
  const inputEl = useRef("")
  const previousCounterRef =useRef("")

  useEffect( () => {
     previousCounterRef.current = counter
  },[counter])
  
  const resetName = () => {
    setName(" ")
    inputEl.current.focus();
    console.log(inputEl.current.value);
  }
  
  return (
    <div className="App">
      <div>
        <input
        ref={inputEl}
        name="name"
        autoComplete="off"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value) }/>
        <button onClick={resetName}>Reset</button>
      </div>
      <div>My name is {name}</div>
      <div>
        <h1>Random counter {counter}</h1>
        { typeof previousCounterRef.current !== "undefined" && <h2>Previous counter {previousCounterRef.current}</h2> }
        <button onClick={ (e) => setCounter(Math.ceil(Math.random()*100)) }>Random number generator</button>
      </div>
    </div>
  );
}

export default App;
