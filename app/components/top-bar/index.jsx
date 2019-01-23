import React from 'react'
import './top-bar.less'
import PropTypes from 'prop-types'
import ToolFactory, { toolCollections } from '../tools/tool-factory'

export default class TopBar extends React.Component {

  /**
   * 这里做所有工具事件的中转
   * @param {*} type 
   * @param {*} param 
   * @param {*} e 
   */
  transmit(type, param, e) {
    this.props.onChange({type, param})
    e.preventDefault()
  }

  render() {
    return (
      <div className="top-bar">
        {toolCollections.map((tool) => {
          return ToolFactory.getTool(tool.type, {
            onChange: this.transmit.bind(this, tool.type)
          })
        })}
      </div>
    )
  }
}

TopBar.propTypes = {
  onChange: PropTypes.func.isRequired
}