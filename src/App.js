import logo from './logo.svg';
import './App.css';
import data from './options.json';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import Components from './components';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Components />
      {/* </header> */}
    </div>
  );
}

export default App;
