import { useState } from 'react';
import img from './default.jpg';
import Board from './Board';
import './App.css'
import { loadImage } from './images';
import { initialize, kidsShuffle, shuffle } from './game';

function App() {
  const [key, setKey] = useState(0);
  const forceUpdate = () => setKey(~key);
  const [isLoaded, setIsLoaded] = useState(false);
  loadImage(img).then(() => setIsLoaded(true));

  if (!isLoaded)
    return <main>Loading...</main>;
  else
    return (
      <div>
        <Board />
        <aside style={{ verticalAlign: 'top' }}>
          <input type="button" value="Kids" onClick={() => {
            kidsShuffle();
            forceUpdate();
          }} />&nbsp;
          <input type="button" value="Shuffle" onClick={() => {
            shuffle();
            forceUpdate();
          }} />&nbsp;
          <input type="button" value="Initialize" onClick={() => {
            initialize();
            forceUpdate();
          }} />
          <br />
          <img
            src={img}
            style={{
              width: 'calc(var(--tile-side))',
              height: 'calc(var(--tile-side))',
              marginTop: '8px'
            }}
            alt='' />
          <br />
          <br />
          8-puzzle
          <br />
          <footer className="darker">
            &copy; 2022 Daniel Martínez Fernández
            <br />MIT License
          </footer>
        </aside>
      </div>
    );
}

export default App;
