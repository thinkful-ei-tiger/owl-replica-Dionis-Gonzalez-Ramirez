import React from 'react';
import StageParticipants from './StageParticipants'
import './Stage.css'

class Stage extends React.Component {
  render() {
    return (
      <div className='stage'>
        <StageParticipants participants={this.props.participants} />
      </div>
    )
  }
}

export default Stage;