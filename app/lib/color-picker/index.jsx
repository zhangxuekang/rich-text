import * as React from 'react'
import PropTypes from 'prop-types'
import './style.less'

export default class ColorPicker extends React.Component {
  handleChange(value, e) {
    this.props.onChange(value, e)
    e.stopPropagation()
    e.preventDefault()
  }
  getItems() {
    return this.props.colors.map((color, index) => {
      const style = {
        backgroundColor: color,
      }
      return (
        <li key={index} onMouseDown={this.handleChange.bind(this, color)}>
          {color.includes('#') ? <div style={style} /> : null}
        </li>
      )
    })
  }
  render() {
    return (
      <ul className='color-picker'>
        {this.getItems()}
      </ul>
    )
  }
}

ColorPicker.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func
}

ColorPicker.defaultProps = {
  colors: ['#000000', '#ffffff', '#ff0000', '#ffff00', '#0000ff', '#00ff00', '#999999', '#ff7f00', '#7c3a89', '#d2d7d3'],
  onChange: () => { }
}