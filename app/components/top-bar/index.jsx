import React from 'react'
import './top-bar.less'
import Bold from '../tools/bold.jsx'

function changeBlod() {
  console.log('bold', '<-------zxk')
}

export default class TopBar extends React.Component {

  render() {
    return (
      <div className="top-bar">
        <Bold onChange={changeBlod}/>
      </div>
    )
  }
}