import React from 'react';
import Participant from './Participant';
import Menu from './Menu'
import './ParticipantList.css'

class ParticipantList extends React.Component {
  render() {
    return (
      <div className={`sidebar ${this.props.state.status}`} >
        <Menu />
        <div className='participant-list'>
          {
            this.props.participants.sort(participant => {
              return (participant.onStage) ? -1 : 1;
            })
            .map(participant => {
              return (
                <Participant
                  onClick={this.toggleHidden}
                  participant={participant}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default ParticipantList;