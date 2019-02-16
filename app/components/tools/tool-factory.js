import * as React from 'react'
import Bold from './bold'
import Italic from './italic'
import Underline from './Underline'
import Color from './color'
import backgroundColor from './background'
import Strikethrough from './strikethrough'
import Left from './left'
import Center from './center'
import Right from './right'
import Ul from './ul'
import Ol from './ol'

// 工具组件配置
const toolCollections = [
  { type: 'bold', title: '加粗', widget: Bold },
  { type: 'italic', title: '斜体', widget: Italic },
  { type: 'underline', title: '下划线', widget: Underline },
  { type: 'strikethrough', title: '删除线', widget:  Strikethrough},
  { type: 'alignLeft', title: '左对齐', widget: Left },
  { type: 'alignCenter', title: '居中', widget: Center },
  { type: 'alignRight', title: '右对齐', widget: Right },
  { type: 'ul', title: '有序列表', widget: Ul },
  { type: 'ol', title: '无序列表', widget: Ol },
  { type: 'color', title: '颜色', widget: Color },
  { type: 'backgroundColor', title: '背景颜色', widget: backgroundColor },
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