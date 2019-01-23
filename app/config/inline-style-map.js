const toolsType = {
  none: 'NONE',
  bold: 'BOLD',
  italic: 'ITALIC',
  underline: 'UNDERLINE',
  color_ffffff: 'COLOR_FFFFFF'
}

const styleMap = {}
Object.keys(toolsType).forEach((key) => {
  switch (key) {
    case 'none':
      styleMap[toolsType[key]] = {}
      break
    case 'bold':
      styleMap[toolsType[key]] = {
        fontWeight: 'bold'
      }
      break
    case 'italic':
      styleMap[toolsType[key]] = {
        fontStyle: 'italic'
      }
      break
    case 'underline':
      styleMap[toolsType[key]] = {
        textDecoration: 'underline'
      }
      break
    case 'color_ffffff':
      styleMap[toolsType[key]] = {
        color: 'red'
      }
      break
  }
})

export default styleMap
export { toolsType }