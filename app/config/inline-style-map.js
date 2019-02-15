const styleData = {
  color: ['#000000', '#ffffff', '#ff0000', '#ffff00', '#0000ff', '#00ff00', '#999999', '#ff7f00', '#7c3a89', '#d2d7d3'],
  backgroundColor: ['#000000', '#ffffff', '#ff0000', '#ffff00', '#0000ff', '#00ff00', '#999999', '#ff7f00', '#7c3a89', '#d2d7d3'],
  fontSize: [28, 30, 32, 34],
  fontFamily: [{
    name: 'Araial',
    family: 'Arial, Helvetica, sans-serif',
    key: 'Araial'
  }, {
    name: 'Georgia',
    family: 'Georgia, serif',
    key: 'Georgia'
  }, {
    name: 'Impact',
    family: 'Impact, serif',
    key: 'Impact'
  }, {
    name: 'Monospace',
    family: '"Courier New", Courier, monospace',
    key: 'Monospace'
  }, {
    name: 'Tahoma',
    family: 'tahoma, arial, "Hiragino Sans GB", 宋体, sans-serif',
    key: 'Tahoma'
  }],
}

const styleMap = {
  NONE: {},
  BOLD: {
    fontWeight: 'bold'
  },
  ITALIC: {
    fontStyle: 'italic'
  },
  UNDERLINE: {
    textDecoration: 'underline'
  },
  STRIKETHOUGH: {
    textDecoration: 'line-through'
  }
}
Object.keys(styleData).forEach((key) => {
  const values = styleData[key]
  switch (key) {
    case 'color':
      values.forEach((value) => {
        styleMap[('color_' + value.substring(1)).toUpperCase()] = {
          color: value
        }
      })
      break
    case 'backgroundColor':
      values.forEach((value) => {
        styleMap[('background_color_' + value.substring(1)).toUpperCase()] = {
          backgroundColor: value
        }
      })
      break
    case 'fontSize':
      values.forEach((value) => {
        styleMap[('font_size_' + value).toUpperCase()] = {
          fontSize: value + 'px'
        }
      })
      break
    case 'fontFamily':
      values.forEach((value) => {
        styleMap[('font_family_' + value.name.substring(1)).toUpperCase()] = {
          fontFamily: value.family
        }
      })
      break
  }
})

export default styleMap
export { styleData }