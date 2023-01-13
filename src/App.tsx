import React from 'react';
import './App.css';
import ArchiveSwitch from './Components/NavBar/ArchiveSwitch';
import ListTask from './Components/TaskList/ListTask';

const App: React.FC = () => {
  return (
    <div className="App container">
      <ArchiveSwitch/>
      <ListTask/>
    </div>
  );
}

export default App;
