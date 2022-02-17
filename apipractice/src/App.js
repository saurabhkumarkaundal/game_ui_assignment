import './App.css';
import React,{useState} from 'react';


function App() {
  const[data,setdata]=useState([]);
  function getApi(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response)=>response.json())
    .then((data)=>{
      setdata(data);
    })
  }
  return (
    <div className="App">
      <h1>hello api</h1>
      <button onClick={getApi}>click me</button><br></br>
      <h2>titles in the list</h2>
      {
        data.map((items)=>
        <h4 key={items.id}>title is:{items.title}</h4>
        )
      }
    </div>
  );
}

export default App;
