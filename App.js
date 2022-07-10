
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const[works,fwork]=useState([]);
  const[inpdes,Desc]=useState("");
  const[inpName,input]=useState("");

  const inputs = () => { 
    /* using if conditional in order to have the details filled up in the list 
    when name and description is blank */
    if (inpdes!==""  &&  inpName!==""){
     const listss = {
       id : Date.now(),
       Names : inpName,
       Descriptions : inpdes,
     };
     /*using dot operator as it allows multiple values to enter the list */
     fwork ((works) => [...works,listss]);
  }
  };
  useEffect(() => {
    const listss = [
      {
        id: 1,
        Names: "Ujjwal",
        Descriptions: "Programmer",
      },
      {
        id: 2,
        Names: "Dennis",
        Descriptions: "Programmer"
      },
    ];
    /* as the values are stored in the lists and fwork is a function 
    where the values are being stored  */
    fwork(listss);
  }, []);

  return (
    <div>
      <h1>Name Description</h1>
      <input
        type="texts"
        placeholder="Name Here"
        value={inpName}
        onInput={(text) => input(text.target.value)}
      />
      <input
        type="texts"
        placeholder="Description"
        value={inpdes}
        onInput={(text) => Desc(text.target.value)}
      />
      <button onClick={inputs} className="btn btn-primary">
        Add
      </button>
      <dl>
        <div class="row">
        <div class="column">Name</div>
        <div class="column">Description</div>
        <div class="column">delete</div>
        </div>
        {works.map((prod) => (
          <dd key={prod.i}>
            <div class="row list">
              <div class="column">{prod.Names}</div>
              <div class="column">{prod.Descriptions}</div>
              <div class="column">
                <button>
                  X
                </button>
                </div>
            </div>
          </dd>
        ))}
      </dl>
    </div>
  );
}

export default App;
