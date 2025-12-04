import { useState } from "react";
import './App.css'

function App() {
  const [a,setA] = useState(10)

  return (
  <div>
    <h1 className="text-5xl bg-green-500">Hello</h1>
  </div> 
  );
}

export default App;