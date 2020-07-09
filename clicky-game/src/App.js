import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h2>Clicky Game</h2>
       <p>Click an image to begin!</p>
       <div className="score">
         <p>Score:  | Top Score: </p>
       </div>
      </header>
      
      <div className="top-section">
        <h1>Clicky Game!</h1>
        <p>Click on an Image to earn points, but don't click on any more than once!</p>
      </div>

      <div className="images">

      </div>

      <div className="footer">
        
      </div>

    </div>
  );
}

export default App;
