import React, { useState } from 'react';
import Board from './Board';
import './App.css';
import './AppLight.css';

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  function handleModeChange() {
    setIsLightMode(!isLightMode);
  }

  return (
    <div className={isLightMode ? "gamelight-mode" : "game"}>
      <h1 className={isLightMode ? "h1light-mode" : ""}>Ta Te Ti</h1>
      <div className={isLightMode ? "game-boardlight-mode" : "game-board"}>
        <Board isLightMode={isLightMode} />
      </div>
      <button className={isLightMode ? "mode-button light" : "mode-button dark"} onClick={handleModeChange}/>

      {/* <button className="mode-button" onClick={handleModeChange}>
        {isLightMode ? "Dark Mode" : "Light Mode"}
      </button> */}
    </div>
  );
}

export default App;
