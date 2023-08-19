import React from 'react';
import './App.css';
import MenuSideBar from "./components/menu/MenuSideBar.jsx"
import ScreenMain from './components/content/ScreenMain';

function App() {
  return (
    <div className="App">
      <MenuSideBar/>
      <ScreenMain/>
    </div>
  );
}

export default App;
