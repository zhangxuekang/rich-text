import * as React from 'react'
import Bold from './bold'
import Italic from './italic'
import Underline from './Underline'
import Color from './color'

// 工具组件配置
const toolCollections = [
  { type: 'bold', title: 'bold', widget: Bold },
  { type: 'italic', title: 'italic', widget: Italic },
  { type: 'underline', title: 'underline', widget: Underline },
  { type: 'color', title: 'color', widget: Color }
]

export default class ToolFactory {
  /**
   * 获取一个tool组件
   * @param {*} name 
   * @param {*} props 
   */
  static getTool(type, props = {}) {
    const tools = toolCollections.filter((tool) => {
      if (tool.type === type) {
        return true
      }
    })

    if (tools.length > 0) {
      return React.createElement(tools[0].widget, {
        ...props,
        key: tools[0].type,
        type: tools[0].type,
        title: tools[0].title
      })
    }

    return null
  }
}

export { toolCollections }