
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const[works,fwork]=useState([]);
  const[inpdes,Descrip]=useState("");
  const[inpName,inputName]=useState("");

  const inputs = () => { 
    /* using if conditional in order to have the details filled up in the list 
    when name and description is NOT blank */
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
  const Listed = (id) => {
    fwork((works) => works.filter((element) => element.id !== id));
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
        onInput={(text) => inputName(text.target.value)}
      />
      <input
        type="texts"
        placeholder="Description"
        value={inpdes}
        onInput={(text) => Descrip(text.target.value)}
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
        {works.map((element) => (
          <dd key={element.id}>
            <div class="row list">
              <div class="column">{element.Names}</div>
              <div class="column">{element.Descriptions}</div>
              <div class="column">
                <button
                onClick={() => {
                  Listed(element.id);
                }}
                >
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
