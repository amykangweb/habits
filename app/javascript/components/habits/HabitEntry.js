import React, { Component } from "react"
import PropTypes from 'prop-types'

import CheckButton from './CheckButton'

class HabitEntry extends Component {
  render() {
    return (
      <li>
        { this.props.name }
        <CheckButton
          id={ this.props.id }
          handleChecked={ this.props.handleChecked } />
      </li>
    )
  }
}

HabitEntry.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  handleChecked: PropTypes.func.isRequired
}

export default HabitEntry
