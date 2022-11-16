import React, { useState } from 'react';
import List from './components/List';
import './App.css';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string,
    id: number
  }[]
  key: number
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Finger",
      url: "https://upload.wikimedia.org/wikipedia/en/e/ea/Mike_Ehrmantraut_BCS_S3.png",
      age: 70,
      note: "All he wanted to do was fingerpaint",
      id: 0
    }
  ])



  return (
    <div className="App">
      <h1>People invited to our party</h1>
      <List key={Math.random()} people={people} setPeople={setPeople}/>
      <AddToList key={Math.random()} people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
