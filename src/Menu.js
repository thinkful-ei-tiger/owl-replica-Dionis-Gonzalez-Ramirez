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
        <div className='menu-options'>
          <a href='#'><img src={cog} /></a>
          <a href='#'><img src={url} /></a>
          <a href='#'><img src={question} /></a>
        </div>
      </div>
    )
  }
}

export default Menu;