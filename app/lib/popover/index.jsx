import * as React from 'react'
import PropTypes from 'prop-types'

class Popover extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickOut = this.handleClickOut.bind(this)
  }

  componentWillReceiveProps(pros) {
    const { isOpen } = pros
    if (isOpen) {
      window.addEventListener('mousedown', this.handleClickOut)
    } else {
      window.removeEventListener('mousedown', this.handleClickOut)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.handleClickOut)
  }

  handleClickOut() {
    this.props.onClickOutside()
  }

  packContent(btn, content) {
    const { position, align, isOpen } = this.props
    if (!isOpen) {
      return null
    }
    const btnStyle = btn.props.style || { width: '26px', height: '26px' }
    const btnW = parseInt(btnStyle.width) || 28
    const btnH = parseInt(btnStyle.height) || 28
    const pack = React.Children.only(content)
    const packStyle = pack.props.style || { width: '100px', height: '100px' }
    const packW = parseInt(packStyle.width) || 100
    const packH = parseInt(packStyle.height) || 100
    let top = btnH + 'px'
    if (position === 'top') {
      top = -packH + 'px'
    }
    let left = 0
    if (align === 'left') {
      left = -packW + btnW + 'px'
    } else if (align === 'center') {
      left = -(packW - btnW) / 2 + 'px'
    }
    const props = {
      style: {
        position: 'fixed',
        zIndex: 999,
        top,
        left
      },
    }
    return React.cloneElement(<div className='popover'>{pack}</div>, props)
  }

  render() {
    const children = React.Children.only(this.props.children)
    const content = this.packContent(children, this.props.content)
    return React.cloneElement(children, {
      style: {
        ...children.props.style,
        transform: 'translate(0px, 0px)'
      },
      children: content
    })
  }
}

Popover.propTypes = {
  content: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  position: PropTypes.oneOf(['bottom', 'top']),
  onClickOutside: PropTypes.func
}

Popover.defaultProps = {
  content: null,
  isOpen: false,
  align: 'right',
  position: 'bottom',
  onClickOutside: () => { }
}

export default Popover

