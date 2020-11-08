import React from 'react';
import cog from './img/cog.svg'
import url from './img/url.svg'
import question from './img/question.svg'
import './Menu.css'

class Menu extends React.Component {
  render() {
    return (
      <div className='menu'>
        <a href='https://www.google.com/'>Chat</a>
        <a href='https://www.google.com/'>Participants</a>
        <a><img src={cog} /></a>
        <a><img src={url} /></a>
        <a><img src={question} /></a>
      </div>
    )
  }
}

export default Menu;