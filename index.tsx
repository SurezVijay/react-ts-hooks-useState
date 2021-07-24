import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function App() {

  const [name,setName] = useState("Suresh");
  const [flag,setFlag] = useState(false);
  const [students,setStudents] = useState([]);

  function updateName() {
    setName("Sureshkumar Vijayakumar");
  }

  function toggleFlag() {
    setFlag(!flag);
  }

  function addStudents(e) {
    e.preventDefault();
    setStudents([...students, {id: students.length, name : name}]);
  }

  return (
    <div> <h2> React Hooks </h2> 
    <h4> Hello. {name} </h4>
    {
      flag ? <h4> Welcome {name} !!!</h4> : ""
           
    }    
    <button onClick={updateName}> ChangeName </button>
    <br/>
    <br/>
    <button onClick={toggleFlag}> ToggleFlag </button>

    <hr/>

    <form onSubmit={addStudents}>
      <input type="text" value={name} onChange={(e) => {
        setName(e.target.value)
      }} />
      <button> AddStudents </button>
    </form>
    
    <hr/>
   

      <ul>
        {
          students.map(item => (<li> {item.name} </li>))
        }
      </ul>

    </div>
  )
}


render(<App />, document.getElementById('root'));
