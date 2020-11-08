import React from 'react';
import ParticipantList from './ParticipantList'
import Menu from './Menu'
import {participants} from './data';
import './App.css'


function App() {
  return (
    <main className='App'>
      <Menu />
      <ParticipantList participants={participants} />

      {/* <Stage /> */}
      {/* <Chat /> */}

    </main>
  );
}

export default App;
