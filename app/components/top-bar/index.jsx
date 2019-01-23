import React from 'react'
import './top-bar.less'
import PropTypes from 'prop-types'
import ToolFactory, { toolCollections } from '../tools/tool-factory'

export default class TopBar extends React.Component {

  change(param, e) {
    this.props.onChange(param)
    e.preventDefault()
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

TopBar.propTypes = {
  onChange: PropTypes.func.isRequired
}