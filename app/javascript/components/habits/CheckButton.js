import React, { Component } from "react"
import PropTypes from 'prop-types'

const CheckButton = props =>
  <span>
    <button onClick={() => props.handleChecked( props.id )}>
      <strong>Check</strong>
    </button>
  </span>

CheckButton.propTypes = {
  id: PropTypes.number.isRequired,
  handleChecked: PropTypes.func.isRequired
}

export default CheckButton
