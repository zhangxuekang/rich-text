import React from 'react'
import { Editor, DefaultDraftBlockRenderMap } from 'draft-js'
import './stage.less'
import 'draft-js/dist/Draft.css'
import PropTypes from 'prop-types'
import styleMap from '../../config/inline-style-map'
import {getBlockRender, getBlockStyle} from '../../config/block-style'

export default class Stage extends React.Component {
  constructor(props) {
    super(props)
  }

  handeChange(editorState) {
    this.props.onChange(editorState)
  }

  render() {
    const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(getBlockRender())
    return (
      <div className="stage">
        <Editor
          editorState={this.props.editorState}
          textAlignment={this.props.textAlignment}
          onChange={this.handeChange.bind(this)}
          customStyleMap={styleMap}
          blockRenderMap={extendedBlockRenderMap}
          blockStyleFn={getBlockStyle}
        />
      </div>
    )
  }
}

Stage.propTypes = {
  editorState: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  textAlignment: PropTypes.oneOf(['right', 'center', 'left']).isRequired
}