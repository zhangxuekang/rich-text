import React from 'react'
import { Editor } from 'draft-js'
import './stage.less'
import PropTypes from 'prop-types'

export default class Stage extends React.Component {
  constructor(props) {
    super(props)
  }

  handeChange(editorState) {
    this.props.onChange(editorState)
  }

  render() {
    return (
      <div className="stage">
        <Editor
          editorState={this.props.editorState}
          onChange={this.handeChange.bind(this)}
        />
      </div>
    )
  }
}

Stage.propTypes = {
  editorState: PropTypes.any,
  onChange: PropTypes.func
}