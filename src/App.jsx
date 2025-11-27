function App() {
  const user = "Vidya"
  const abc = () =>{
    console.log("hello",user)
  }

  return (
  <div>
    <h1>Hello1</h1>
    <h2>Hello {user}</h2>
    <button onClick={abc}>Change User</button>
  </div> 
  );
}

export default App;