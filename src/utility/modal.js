/**
 * Taken from React docs
 * https://reactjs.org/docs/portals.html
 */
import React from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

class Modal extends React.Component {
  constructor(props) {
    super(props)

    this.el = document.createElement('div')
    this.modalRoot = document.getElementById('modal')
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el) // avoid memory leaks
  }

  render() {
    return createPortal(this.props.children, this.el)
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Modal
