import React from 'react'
import ReactDOM from 'react-dom'
import './style/base.less'
import { EditorState, RichUtils } from 'draft-js'
import TopBar from './components/top-bar/index.jsx'
import Stage from './components/stage/index.jsx'

class RichText extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editorState: EditorState.createEmpty() }
  }

  /**
   * 修改文本样式方法
   * @param {*} param 
   */
  handleClickChange(argu) {
    const { type, param } = argu
    const inlineStyleType = this.getInlineStyleType(type, param)
    this.setState({ editorState: RichUtils.toggleInlineStyle(this.state.editorState, inlineStyleType) })
  }

  /**
   * 根据tool类型和携带的参数, 拼出最终的inlineStyleType
   * @param {*} toolType 
   * @param {*} value 
   */
  getInlineStyleType(toolType, param) {
    switch (toolType) {
      case 'bold':
        return 'BOLD'
      case 'italic':
        return 'ITALIC'
      case 'color':
        return `color_${param.value.substring(1)}`.toUpperCase()
      case 'underline':
        return 'UNDERLINE'
      default:
        return 'none'
    }
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
