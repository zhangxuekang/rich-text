import React from 'react'
import './top-bar.less'
import ToolFactory, { toolCollections } from '../tools/tool-factory'

export default class TopBar extends React.Component {

  change(param) {
    console.log(param)
  }

  render() {
    return (
      <div className="top-bar">
        {toolCollections.map((tool) => {
          return ToolFactory.getTool(tool.name, {
            onChange: this.change.bind(this)
          })
        })}
      </div>
    )
  }
}