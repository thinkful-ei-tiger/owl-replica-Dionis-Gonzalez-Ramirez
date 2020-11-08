import React from 'react';
import Participant from './Participant';
import './ParticipantList.css'

class ParticipantList extends React.Component {
  render() {
    return (
      <div className='participant-list'>
        {
          this.props.participants.map(participant => {
            return <Participant participant={participant} />
          })
        }
      </div>
    )
  }
}

export default ParticipantList;