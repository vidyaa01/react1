import { useState } from "react";

function App() {
  const [a,setA] = useState(10)

  return (
  <div>
    <h1>Value of a is:{a}</h1>
    <button onClick={()=>setA(a+10)}>Increment</button>
    <button onClick={()=>setA(a-10)}>Decrement</button>
  </div> 
  );
}

export default App;