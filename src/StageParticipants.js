import React from 'react';
import './StageParticipants.css'

class StageParticipants extends React.Component {
  state = {status: ''}

  onHover = () => {
    (this.state.status === '')
    ? this.setState({status: 'hidden'})
    : this.setState({status: ''})
  }

  render() {
    return (
      this.props.participants.map(participant => {
        return (
          <div 
            className={'stage-participant'}
            onMouseEnter={this.onHover}
            onMouseLeave={this.onHover}
          >
            <img src={participant.avatar} alt={participant.name} />
            <label>{participant.name}</label>
            <div className={`volume-container ${this.state.status}`}>
              <input type='range' value='75'></input>
            </div>
          </div>
        )
      })
    )
  }
}

export default StageParticipants;