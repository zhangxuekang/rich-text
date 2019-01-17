import * as React from 'react'
import Bold from './bold'
const toolCollections = [
  { name: 'bold', widget: Bold }
]

export default class ToolFactory {
  /**
   * 获取一个tool组件
   * @param {*} name 
   * @param {*} props 
   */
  static getTool(name, props = {}) {
    const tools = toolCollections.filter((tool) => {
      if (tool.name === name) {
        return true
      }
    })


    if (tools.length > 0) {
      return React.createElement(tools[0].widget, { key: name, ...props })
    }

    return null
  }
}

export { toolCollections }