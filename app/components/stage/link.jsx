import * as React from 'react'
import PropTypes from 'prop-types'

export default class Link extends React.Component {
  render() {
    const { url } = this.props.contentState.getEntity(this.props.entityKey).getData()
    const style = {
      textDecoration: 'underline',
      color: '#3b5998',
      cursor: 'pointer'
    }
    return (
      <a href={url} style={style}>
        {this.props.children}
      </a>
    )
  }
}

Link.propTypes = {
  contentState: PropTypes.any.isRequired,
  entityKey: PropTypes.string.isRequired,
}