import React from 'react'
import ReactDOM from 'react-dom'
import './style/base.less'
import { EditorState, RichUtils, CompositeDecorator } from 'draft-js'
import TopBar from './components/top-bar/index.jsx'
import Stage from './components/stage/index.jsx'
import Link from './components/stage/link.jsx'

class RichText extends React.Component {
  constructor(props) {
    super(props)
    const decorator = new CompositeDecorator([
      {
        strategy: findLinkEntities,
        component: Link,
      },
    ])
    this.state = {
      editorState: EditorState.createEmpty(decorator),
      textAlignment: 'left'
    }
  }

  /**
   * 修改文本样式方法
   * @param {*} param 
   */
  handleClickChange(argu) {
    const { editorState } = this.state
    const contentState = editorState.getCurrentContent()
    const selection = editorState.getSelection()
    const { type, param } = argu
    switch (true) {
      case 'hyperlink' === type:
        if (!selection.isCollapsed()) {
          const startKey = editorState.getSelection().getStartKey()
          const startOffset = editorState.getSelection().getStartOffset()
          const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey)
          const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset)
          if (linkKey) {
            this.setState({
              editorState: RichUtils.toggleLink(editorState, selection, null),
            })
          } else {
            const url = param.value
            const contentStateWithEntity = contentState.createEntity(
              'LINK',
              'MUTABLE',
              { url }
            )
            const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
            const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity })
            this.setState({
              editorState: RichUtils.toggleLink(
                newEditorState,
                newEditorState.getSelection(),
                entityKey
              )
            })
          }
        }
        break
      case 'unhyperlink' === type:
        if (!selection.isCollapsed()) {
          const startKey = editorState.getSelection().getStartKey()
          const startOffset = editorState.getSelection().getStartOffset()
          const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey)
          const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset)
          if (linkKey) {
            this.setState({
              editorState: RichUtils.toggleLink(editorState, selection, null),
            })
          }
        }
        break
      case /^align/.test(type):
        this.setState({
          textAlignment: param.value
        })
        break
      case (type === 'ul' || type === 'ol'):
        this.setState({
          editorState: RichUtils.toggleBlockType(
            this.state.editorState,
            param.value
          )
        })
        break
      default:
        const inlineStyleType = this.getInlineStyleType(type, param)
        this.setState({
          editorState: RichUtils.toggleInlineStyle(
            this.state.editorState,
            inlineStyleType)
        })
    }
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
      case 'backgroundColor':
        return `background_color_${param.value.substring(1)}`.toUpperCase()
      case 'underline':
        return 'UNDERLINE'
      case 'strikethrough':
        return 'STRIKETHOUGH'
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
          textAlignment={this.state.textAlignment}
        />
      </div>
    )
  }
}

function findLinkEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity()
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === 'LINK'
      )
    },
    callback
  )
}

ReactDOM.render(< RichText />, document.getElementById('main'))
