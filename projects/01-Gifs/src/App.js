
import React, { use, useState } from "react";
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import Buscador from './components/buscador';

function App() {
  const [newKeyWord, setNewKeyWord] = useState('')

  function handleSearch(algo) {
    setNewKeyWord(algo)
  }

  return (
    <div className="App">
      <section className="App-content">
        <Buscador onSearch={handleSearch}/>
        {
          <ListOfGifs keyWord={newKeyWord} />
        }
      </section>
    </div>
  );
}

export default App;
