import React from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'
import './stage.less'

export default class Stage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editorState: EditorState.createEmpty() }
    setTimeout(()=>{
      this.blodClick()
    }, 4000)
  }

  handeChange(editorState) {
    this.setState({ editorState })
  }

  blodClick() {
    this.handeChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
  }

  render() {
    return (
      <div className="stage">
        <Editor
          editorState={this.state.editorState}
          onChange={this.handeChange.bind(this)}
        />
      </div>
    )
  }
}