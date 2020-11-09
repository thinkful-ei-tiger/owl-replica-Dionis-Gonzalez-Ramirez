import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <div className='chat-options'>
          <a href='#' onClick={this.props.toggleHidden}>Hide</a>
          <div className='gestures'>
            <a href='#'>Like</a>
            <a href='#'>Unlike</a>
            <a href='#'>RaiseHand</a>
            <a href='#'>Clap</a>
          </div>
        </div>
        <div className='footer-options'>
          <div className='participant-options'>
            <a href='#'>Rate</a>
            <a href='#'>Camera</a>
            <a href='#'>Mic</a>
            <a href='#'>Share</a>
          </div>
          <button>Leave stage</button>
        </div>
      </footer>
    )
  }
}

export default Footer;