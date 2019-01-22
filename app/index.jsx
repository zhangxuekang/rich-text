import React from 'react'
import ReactDOM from 'react-dom'
import './style/base.less'
import { EditorState, RichUtils } from 'draft-js'
import TopBar from './components/top-bar/index.jsx'
import Stage from './components/stage/index.jsx'

const inlineStyle = {
  bold: 'BOLD'
}

class RichText extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editorState: EditorState.createEmpty() }
  }

  /**
   * 修改文本样式方法
   * @param {*} param 
   */
  handleClickChange(param) {
    const { type, value } = param
    if (value) {
      console.log()
    }
    this.setState({ editorState: RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle[type]) })
  }

  /**
   * 修改文本内容方法
   * @param {*} editorState 
   */
  handleTextChange(editorState) {
    this.setState({ editorState })
  }

  render() {
    return (
      <div className="rich-text">
        <TopBar
          onChange={this.handleClickChange.bind(this)}
        />
        <Stage
          editorState={this.state.editorState}
          onChange={this.handleTextChange.bind(this)}
        />
      </div>
    )
  }
}

ReactDOM.render(< RichText />, document.getElementById('main'))
