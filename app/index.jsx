import React from 'react'
import ReactDOM from 'react-dom'
import './style/base.less'
import TopBar from './components/top-bar/index.jsx'
import Stage from './components/stage/index.jsx'
class RichText extends React.Component {
  render() {
    return (
      <div className="rich-text">
        <TopBar></TopBar>
        <Stage></Stage>
      </div>
    )
  }
}

ReactDOM.render(< RichText />, document.getElementById('main'))
