import React from 'react';
import './Participant.css'
import online from './img/online.svg'

class Participant extends React.Component {
  render() {
    return (
      <div className='participant' key={this.props.participant.id}>
        <img src={this.props.participant.avatar} alt={this.props.participant.name} />
        <div className='participant-details'>
          <label><b>{this.props.participant.name}</b></label>
          <div className='participant-options'>
            {
              (this.props.participant.onStage)
              ? <>
                  <img src={online} /><label>on stage - </label>
                </>
              : null
            }
            <a href='https://www.google.com/'>Boot</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Participant;