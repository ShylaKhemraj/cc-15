import React from 'react';
import './App.css';
import PersonalInfo from './personalinfo';
import Skills from './skills';
import Experience from './experience';
import Education from './education';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ZCoding Challege #15</h1>
      </header>
      <main>
        <PersonalInfo />
        <Skills />
        <Experience />
        <Education />
      </main>
    </div>
  );
}
export default App;