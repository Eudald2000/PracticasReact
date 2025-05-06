
import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Route, Link } from 'wouter';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>APP</h1>
        <Link href='/gif/panda'>Gifs de pandas</Link>
        <Link href='/gif/anime dance'>Anime dance</Link>
        <Link href='/gif/' >Inicio</Link>
        <Route component={ListOfGifs}
          path='/gif/:keyWord'
        />

      </section>
    </div>
  );
}

export default App;
