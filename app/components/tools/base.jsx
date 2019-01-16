import React from 'react'
import './tools.less'

export default function(Target) {
  class Base extends React.Component {
    render() {
      return (
        <div className="tool">
          <Target {...this.props}/>
        </div>
      )
    }
  }

  return Base
}