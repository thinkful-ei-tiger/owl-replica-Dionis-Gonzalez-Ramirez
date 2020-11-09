import React from 'react';
import ParticipantList from './ParticipantList'
import Stage from './Stage'
import Footer from './Footer'
import {participants} from './data';
import './App.css'


class App extends React.Component {
  state = {status: ''}

  toggleHidden = () => {
    (this.state.status === '')
    ? this.setState({status: 'hidden'})
    : this.setState({status: ''})
  }

  render() {
    return (
      <>
        <main className='App'>
          <ParticipantList
            state={this.state}
            participants={participants}
          />
          <Stage participants={participants} />
          
          {/* <Stage /> */}
          
          {/* <Chat /> */}
  
        </main>
        <Footer toggleHidden={this.toggleHidden} />
      </>
    )
  }
}

export default App;
