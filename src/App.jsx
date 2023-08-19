import React from 'react';
import './App.css';
import MenuSideBar from "./components/menu/MenuSideBar.jsx"
import ScreenMain from './components/content/ScreenMain';
import { ALL_DATA_FAKE } from './common/dataFake';

function App() {
  return (
    <div className="App">
      <MenuSideBar/>
      <ScreenMain
        data = {ALL_DATA_FAKE}
      />
    </div>
  );
}

export default App;
