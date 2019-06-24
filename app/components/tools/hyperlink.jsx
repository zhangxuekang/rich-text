import React from 'react'
import './tools.less'
import Base from './base.jsx'
import PropTypes from 'prop-types'
import { Modal, Form, Button } from 'react-bootstrap'

class Hyperlink extends React.Component {

  constructor() {
    super()
    this.state = {
      show: false,
      url: ''
    }
  }

  handleClick(e) {
    if (this.state.show) {
      this.close()
    } else {
      this.open()
    }
    e.preventDefault()
    e.stopPropagation()
  }

  close() {
    this.setState({
      show: false,
      url: ''
    })
  }

  open() {
    this.setState({
      show: true,
      url: 'https://www.'
    })
  }

  handleUrlChange(e) {
    this.setState({
      url: e.target.value
    })
  }

  handlePrimary(e) {
    this.props.onChange({
      value: this.state.url
    }, e)
    this.close()
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="tool-hyperlink"
          onMouseDown={this.handleClick.bind(this)}>
        </div >
        <Modal
          size="sm"
          show={this.state.show}
          onHide={this.close.bind(this)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              请输入url
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              type="text"
              placeholder="www"
              value={this.state.url}
              onChange={this.handleUrlChange.bind(this)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" size="sm" onMouseDown={this.close.bind(this)}>取消</Button>
            <Button variant="primary" size="sm" onMouseDown={this.handlePrimary.bind(this)}>确定</Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    )
  }
}

Hyperlink.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}



export default Base(Hyperlink)