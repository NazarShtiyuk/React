import React from 'react';
import './App.css'
import Launches from "./components/launches";

const App = () => {
    return (
        <div >
          <Launches styleClass={'launches'}/>
        </div>
    );
};

export default App;